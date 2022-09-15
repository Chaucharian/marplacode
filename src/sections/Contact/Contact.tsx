import { Flex, Spacer, Text, Button, Link, TextButton } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useEffect, useState } from 'react'
import Line from '@/components/dom/Line'
import { FormTextField } from '@/components/dom/Form'
import { useForm } from 'react-hook-form'
import { Container } from '../components'
import { useIsMobile, useScroll } from '@/helpers/hooks'
import Grid from '@/components/dom/Grid'
import { FormCheckbox, FormRadio } from '@/components/dom/Form'
import Footer from '../Footer/Footer'

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
  const isMobile = useIsMobile()

  // useEffect(() => {
  //   if (focus) {
  //     console.log({ scroll })
  //     scroll.style.bottom = 270
  //     // scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight
  //   } else {
  //     scroll.style.bottom = 0
  //   }
  // }, [focus])

  const submit = () => {}

  console.log(isMobile)

  return (
    <div style={{ height: '100%' }}>
      <Container
        bg='#1A1D22'
        minHeight='1000px'
        pt={'110px'}
        pb={'100px'}
        display='block'
        height={{ _: 'auto', md: '100%' }}
      >
        <Flex>
          <Flex width={{ md: '50%' }}>
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
              <form onSubmit={handleSubmit(submit)}>
                <Flex flexDirection='column' pl={'10px'} pr={'10px'}>
                  <Text type={theme.fonts.span}>Name/ Company name</Text>
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
                  <Text type={theme.fonts.span}>Email</Text>
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
                  <Text type={theme.fonts.span}>Budget</Text>
                  <Spacer vertical={'32px'} />
                  <div>
                    <FormRadio
                      name='budget'
                      label='5k'
                      required
                      control={control}
                    />
                    <FormRadio
                      name='budget'
                      label='10k'
                      required
                      control={control}
                    />
                    <FormRadio
                      name='budget'
                      label='20k'
                      required
                      control={control}
                    />
                    <FormRadio
                      name='budget'
                      label='>30k'
                      required
                      control={control}
                    />
                  </div>
                  <Spacer vertical={'16px'} />
                  <Line play={true} />
                  <Spacer vertical={'62px'} />
                  <Text type={theme.fonts.span}>Message</Text>
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
                        onClick={() => {}}
                      >
                        Submit
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </form>
            </Flex>
            <Spacer vertical={theme.spacing.medium} />
          </Flex>
          {/* <Flex bg='white' width='50%' height='100%'></Flex> */}
        </Flex>
      </Container>
      <Footer />
    </div>
  )
}
export default Contact
