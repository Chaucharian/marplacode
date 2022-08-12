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

const Footer = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  const animate = scroll >= 0.15
  const { control, handleSubmit, formState } = useForm({})

  return (
    <Flex
      height='150%'
      bg='#FFF'
      p={theme.spacing.small}
      flexDirection='column'
      justifyContent='center'
      position='relative'
    >
      <Flex flexDirection='column' alignItems='center'>
        <Text type={theme.fonts.span} fontSize='30px' color='#000'>
          Have an idea?
        </Text>
        <Spacer vertical={theme.spacing.tiny} />
        <Link show={show} color1='grey' color2='black'>
          <Text type={theme.fonts.span} color='#000' fontSize={'16px'}>
            hello@marplacode.com
          </Text>
        </Link>
      </Flex>
    </Flex>
  )
}
export default Footer
