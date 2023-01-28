import { type ReactNode } from 'react'

import { Box, type BoxProps } from '../Box'
import { Text } from '../Text'

interface FormElementProps {
  label?: string
  children: ReactNode
}

export const FormElement = ({
  label,
  children,
  ...rest
}: FormElementProps & BoxProps) => {
  return (
    <Box {...rest}>
      {label ? (
        <Text color="$inputLabel" marginBottom="md">
          {label}
        </Text>
      ) : null}
      {children}
    </Box>
  )
}
