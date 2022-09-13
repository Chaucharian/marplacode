import { FC } from 'react'
import { SpectrumTextFieldProps } from '@react-types/textfield'
import { useController } from 'react-hook-form'
import Button from '../Button'
import styled from 'styled-components'

const Container = styled.span`
  ${({}) => `
  input {
    display: none;
  } 
`}
`
export interface FormButtonProps extends SpectrumTextFieldProps {
  name: string
  label: string
  control: any
  rules?: any
  defaultValue?: any
  [x: string]: any
}

const FormCheckbox: FC<FormButtonProps> = ({
  name,
  label,
  control,
  rules,
  defaultValue = false,
  ...props
}) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  })

  return (
    <Container>
      <input value={value} name={name} type='checkbox' />
      <Button selected={value} onClick={() => onChange(!value)} {...props}>
        {label}
      </Button>
    </Container>
  )
}

export default FormCheckbox
