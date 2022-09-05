import styled from 'styled-components'
import { Flex, Spacer, Text, Button, Link, TextButton } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useEffect, useState } from 'react'
import Line from '@/components/dom/Line'
import { lineGrow } from '@/helpers/animations'
import { FormTextField } from '@/components/dom/Form'
import { useForm } from 'react-hook-form'
import { Container } from '../components'
import { useScroll } from '@/helpers/hooks/useScroll'

// if ('virtualKeyboard' in navigator) {
//   navigator.virtualKeyboard.overlaysContent = true
//   navigator.virtualKeyboard?.addEventListener('geometrychange', (event) => {
//     const { x, y, width, height } = event.target.boundingRect
//     console.log('Virtual keyboard geometry changed:', x, y, width, height)
//   })
// }

const Contact = () => {
  const scroll = useStore((state) => state.scroll)
  const scrollPercentage = useScroll(scroll)
  const show = useStore((state) => state.domReady)
  const animate = scroll >= 0.15
  const { control, handleSubmit, formState } = useForm({})
  const [focus, setFocus] = useState(false)

  // useEffect(() => {
  //   if (focus) {
  //     console.log({ scroll })
  //     scroll.style.bottom = 270
  //     // scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight
  //   } else {
  //     scroll.style.bottom = 0
  //   }
  // }, [focus])

  return (
    <Container bg='#1A1D22'>
      <Flex>
        <Flex pt={'110px'}>
          <Flex flexDirection='column'>
            <Text type={theme.fonts.h1}>Say hi!</Text>
            <Spacer vertical={theme.spacing.tiny} />
            <Text
              fontFamily='LibreFranklin'
              fontSize='40px'
              fontWeight='300'
              color='#808690'
            >
              Tell us about your idea
            </Text>
            <Spacer vertical={theme.spacing.large} />
            <div onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
              <Flex flexDirection='column' pl={'10px'} pr={'10px'}>
                <FormTextField
                  control={control}
                  name='name'
                  placeholder="What's your name/company"
                  enterkeyhint='next'
                />
                <Spacer vertical={'32px'} />
                <FormTextField
                  control={control}
                  name='name'
                  placeholder='Budget'
                  enterkeyhint='next'
                />
                <Spacer vertical={'32px'} />
                <FormTextField
                  control={control}
                  name='email'
                  inputmode='email'
                  placeholder='Email'
                  enterkeyhint='next'
                />
                <Spacer vertical={'32px'} />
                <FormTextField
                  control={control}
                  name='message'
                  placeholder='Message'
                  enterkeyhint='next'
                />
                <Spacer vertical={theme.spacing.medium} />
                <Flex width='100%' justifyContent='flex-end'>
                  <TextButton onClick={() => {}}>Submit</TextButton>
                </Flex>
              </Flex>
            </div>
          </Flex>
          <Spacer vertical={theme.spacing.medium} />
        </Flex>
        {/* <Flex bg='white' width='50%' height='100%'></Flex> */}
      </Flex>
    </Container>
  )
}
export default Contact
