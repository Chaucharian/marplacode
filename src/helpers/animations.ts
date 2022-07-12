import { config, UseSpringProps } from '@react-spring/core'

export const lineGrow: UseSpringProps = {
  from: { width: '0%' },
  to: { width: '100%' },
  config: { ...config.stiff },
}

export const textAppears = {
  from: { opacity: 0, transform: 'translateY(30)' },
  to: { opacity: 1, transform: 'translateY(0px)' },
}
