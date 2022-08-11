import styled from 'styled-components'
import { Flex, Spacer, Text, Button, Link } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React from 'react'
import Line from '@/components/dom/Line'
import { lineGrow } from '@/helpers/animations'
import { FormTextField } from '@/components/dom/Form'
import { useForm } from 'react-hook-form'

const Container = styled.section`
  width: 100%;
  height: 100vh;
`

const Content = styled.section`
  width: 100%;
  height: 50%;
  background: ${theme.colors.primary};
`

const Contact = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  const animate = scroll >= 0.15
  const { control, handleSubmit, formState } = useForm({})

  return (
    <Flex
      height='100%'
      bg='#E48157'
      p={theme.spacing.small}
      flexDirection='column'
      position='relative'
    >
      <Spacer vertical={theme.spacing.large} />
      <Text fontFamily='Akira' fontSize='40px' fontWeight='900' color='#000'>
        CONTACT
      </Text>
      <Spacer vertical={theme.spacing.small} />
      <form>
        <Flex flexDirection='column'>
          <FormTextField
            control={control}
            name='name'
            placeholder="What's your name/company"
            enterkeyhint='next'
          />
          <Spacer vertical={theme.spacing.small} />
          <FormTextField
            control={control}
            name='name'
            placeholder='Budget'
            enterkeyhint='next'
          />
          <Spacer vertical={theme.spacing.small} />
          <FormTextField
            control={control}
            name='email'
            inputmode='email'
            placeholder='Email'
            enterkeyhint='next'
          />
          <Spacer vertical={theme.spacing.small} />
          <FormTextField
            control={control}
            name='message'
            placeholder='Message'
            enterkeyhint='next'
          />
          <Spacer vertical={theme.spacing.medium} />
          <Flex width='100%' justifyContent='flex-end'>
            <Button onClick={() => {}}>Submit</Button>
          </Flex>
        </Flex>
      </form>

      <Spacer vertical={theme.spacing.medium} />
      <Flex flexDirection='column' alignItems='center'>
        <Text type={theme.fonts.span}>Drop us a line!</Text>
        <Link show={show}>
          <Text type={theme.fonts.span} fontSize={'16px'}>
            hello@marplacode.com
          </Text>
        </Link>
      </Flex>
    </Flex>
  )
}
export default Contact
