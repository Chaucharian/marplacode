import styled from 'styled-components'
import { Flex, Spacer, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import React from 'react'

const Container = ({ children, ...props }) => {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      pl={{
        _: theme.spacing.horizontal.mobile,
        md: theme.spacing.horizontal.desktop,
      }}
      pr={{
        _: theme.spacing.horizontal.mobile,
        md: theme.spacing.horizontal.desktop,
      }}
      height='100%'
      {...props}
    >
      {children}
    </Flex>
  )
}
export default Container
