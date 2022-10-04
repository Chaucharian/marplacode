import { Flex, Spacer, Text, Button, Link, TextButton } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useEffect, useState } from 'react'
import Line from '@/components/dom/Line'
import { FormTextField } from '@/components/dom/Form'
import { useForm } from 'react-hook-form'
import { Container } from '@/sections/components'
import { FormCheckbox, FormRadio } from '@/components/dom/Form'

const ContactForm = () => {
  const { control, handleSubmit, formState, getValues } = useForm({})

  const submit = () => {}

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Flex flexDirection='column' pl={'10px'} pr={'10px'}>
        <Text type={theme.fonts.span}>Name*</Text>
        <FormTextField
          control={control}
          name='name'
          placeholder='Hello...'
          enterkeyhint='next'
          rules={{
            required: 'EEE',
            maxLength: 8,
          }}
        />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Company name</Text>
        <FormTextField
          control={control}
          name='company'
          placeholder='or website?'
          enterkeyhint='next'
          rules={{
            required: 'EEE',
            maxLength: 8,
          }}
        />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Email*</Text>
        <FormTextField
          control={control}
          name='email'
          inputmode='email'
          placeholder='Where can we reply?'
          enterkeyhint='next'
          rules={{
            required: 'pattern',
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          }}
        />
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
          <FormRadio name='budget' label='5k' required control={control} />
          <FormRadio name='budget' label='10k' required control={control} />
          <FormRadio name='budget' label='20k' required control={control} />
          <FormRadio name='budget' label='>30k' required control={control} />
        </div>
        <Spacer vertical={'16px'} />
        <Line play={true} />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Message*</Text>
        <FormTextField
          control={control}
          name='message'
          placeholder='I want to build something something beatiful'
          enterkeyhint='next'
          required
          type='textarea'
        />
        <Spacer vertical={theme.spacing.medium} />
        <Flex width='100%' justifyContent='flex-end'>
          <Flex p={{ md: 10 }}>
            <Button
              fontSize='20px'
              secondaryColor='rgba(255, 255, 255, 0.06)'
              selectedTextColor='black'
              type='submit'
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