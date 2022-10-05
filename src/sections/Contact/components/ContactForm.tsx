import {
  Flex,
  Spacer,
  Text,
  Button,
  Link,
  TextButton,
  Box,
} from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useEffect, useState } from 'react'
import Line from '@/components/dom/Line'
import { FormTextField } from '@/components/dom/Form'
import { useForm } from 'react-hook-form'
import { Container } from '@/sections/components'
import { FormCheckbox, FormRadio } from '@/components/dom/Form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const ErrorMessage = ({ message }) => (
  <Box pl={theme.spacing.small} pt={theme.spacing.small} minHeight='35px'>
    <Text type={theme.fonts.span} color='#e73c3c'>
      {message}
    </Text>
  </Box>
)

const ContactForm = () => {
  const { control, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      budget: '',
      company: '',
      email: '',
      ideas: { web: false, mobile: false, landing: false, product: false },
      message: '',
      name: '',
    },
  })

  const submitForm = useMutation((payload) => {
    return axios.post('/api/email/send', payload)
  })
  console.log('RE', { formState })
  const submit = (form) => {
    console.log('EEEEE', form)
    submitForm.mutate(form)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Flex flexDirection='column' pl={'10px'} pr={'10px'}>
        <Text type={theme.fonts.span}>Name*</Text>
        <FormTextField
          control={control}
          name='name'
          placeholder='Hello...'
          enterkeyhint='next'
          rules={{
            required: `what's your name?`,
          }}
        />
        <ErrorMessage message={formState.errors?.name?.message} />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Company name</Text>
        <FormTextField
          control={control}
          name='company'
          placeholder='or website?'
          enterkeyhint='next'
        />
        <ErrorMessage message={formState.errors?.company?.message} />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Email*</Text>
        <FormTextField
          control={control}
          name='email'
          inputmode='email'
          placeholder='Where can we reply?'
          enterkeyhint='next'
          rules={{
            required: 'we need your email to reach out to you 🙏',
            pattern: {
              message: 'email format is not valid',
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          }}
        />
        <ErrorMessage message={formState.errors?.email?.message} />
        <Spacer vertical={'62px'} />
        <Flex flexDirection='column'>
          <Text type={theme.fonts.span}> What's in your mind?</Text>
          <Spacer vertical={'32px'} />
          <div>
            <FormCheckbox
              name='ideas.web'
              label='Web development'
              control={control}
            />
            <FormCheckbox
              name='ideas.mobile'
              label='Mobile'
              control={control}
            />
            <FormCheckbox
              name='ideas.landing'
              label='Creative Landing'
              control={control}
            />
            <FormCheckbox
              name='ideas.product'
              label='Product Design'
              control={control}
            />
          </div>
          <Spacer vertical={'16px'} />
          <Line play={true} />
        </Flex>
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Budget*</Text>
        <Spacer vertical={'32px'} />
        <div>
          <FormRadio
            name='budget'
            label='5k'
            rules={{
              required: `how much are you willing to pay?`,
            }}
            control={control}
          />
          <FormRadio
            name='budget'
            label='10k'
            rules={{
              required: `how much are you willing to pay?`,
            }}
            control={control}
          />
          <FormRadio
            name='budget'
            label='20k'
            rules={{
              required: `how much are you willing to pay?`,
            }}
            control={control}
          />
          <FormRadio
            name='budget'
            label='>30k'
            rules={{
              required: `how much are you willing to pay?`,
            }}
            control={control}
          />
        </div>
        <Spacer vertical={'16px'} />
        <Line play={true} />
        <ErrorMessage message={formState.errors?.budget?.message} />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Message*</Text>
        <FormTextField
          control={control}
          name='message'
          placeholder='I want to build something something beatiful'
          enterkeyhint='next'
          rules={{
            required: `tell us something about your idea 🤘`,
          }}
          type='textarea'
        />
        <ErrorMessage message={formState.errors?.message?.message} />
        <Spacer vertical={theme.spacing.medium} />
        <Flex width='100%' justifyContent='flex-end'>
          <Flex p={{ md: 10 }}>
            <Button
              fontSize='20px'
              secondaryColor='rgba(255, 255, 255, 0.06)'
              selectedTextColor='black'
              type='submit'
              onClick={handleSubmit(submit)}
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  )
}

export default ContactForm
