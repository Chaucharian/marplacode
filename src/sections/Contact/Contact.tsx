import styled from 'styled-components'
import { Flex, Spacer, Text, Button, Link, TextButton } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useEffect, useState } from 'react'
import Line from '@/components/dom/Line'
import { FormTextField } from '@/components/dom/Form'
import { useForm } from 'react-hook-form'
import { Container } from '../components'
import { useScroll } from '@/helpers/hooks'
import Grid from '@/components/dom/Grid'
import { ChipButton } from './components'
import FormCheckbox from '@/components/dom/Form/FormCheckbox'

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
  const { control, handleSubmit, formState, getValues } = useForm({})
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
    <Container bg='#1A1D22' minHeight='800px'>
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
            <form onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
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
                <Flex flexDirection='column'>
                  <Text type={theme.fonts.span}> What's in your mind?</Text>
                  <Spacer vertical={'32px'} />
                  <Grid
                    gridGap={10}
                    // alignItems='center'
                    // placeItems='center'
                    justifyContent='start'
                    gridAutoFlow={{ _: 'row', md: 'column' }}
                    // gridAutoFlow={{ _: 'row', md: 'column' }}
                    gridTemplateColumns={{
                      // _: '1fr 1fr',
                      md: 'repeat(auto-fit, minmax(auto-fit,1fr))',
                    }}
                    // gridTemplateColumns='repeat(auto-fill, minmax(auto-fit,1fr))'
                  >
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
                  </Grid>
                  <Spacer vertical={'32px'} />
                  <Line play={true} />
                </Flex>
                <Spacer vertical={'32px'} />
                <Text type={theme.fonts.span}> Budget</Text>
                <Spacer vertical={'32px'} />

                <Grid gridGap={10} gridAutoFlow='column' alignItems='center'>
                  <FormCheckbox name='budget' label='5k' control={control} />
                  <FormCheckbox name='budget' label='10k' control={control} />
                  <FormCheckbox name='budget' label='20k' control={control} />
                  <FormCheckbox name='budget' label='>30k' control={control} />
                </Grid>
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
            </form>
          </Flex>
          <Spacer vertical={theme.spacing.medium} />
        </Flex>
        {/* <Flex bg='white' width='50%' height='100%'></Flex> */}
      </Flex>
    </Container>
  )
}
export default Contact
