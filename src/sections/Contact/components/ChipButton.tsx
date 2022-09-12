import { Button } from '@/components'

const ChipButton = ({ children, ...props }) => {
  return (
    <Button
      background='#1A1D22'
      borderColor='#D7D7D7'
      textProps={{ color: '#FFF', fontSize: '13px' }}
      width='100%'
      height='50px'
      padding='10px'
      {...props}
    >
      {children}
    </Button>
  )
}

export default ChipButton
