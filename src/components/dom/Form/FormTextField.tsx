import { TextField } from '@/components'
import { FC } from 'react'
import { SpectrumTextFieldProps } from '@react-types/textfield'
import { useController } from 'react-hook-form'

export interface FormTextFieldProps extends SpectrumTextFieldProps {
  name: string
  control: any
  rules?: any
  defaultValue?: any
}

const FormTextField: FC<FormTextFieldProps> = ({
  name,
  control,
  rules,
  defaultValue,
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
  return <TextField name={name} value={value} onChange={onChange} {...props} />
}

export default FormTextField
