import { createBox } from '@shopify/restyle'
import React, { type ComponentProps } from 'react'
import {
  ActivityIndicator,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { Box } from '../Box'
import { Text } from '../Text'

import { useTheme } from '~/hooks'
import { type Theme } from '~/styles/theme'

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity)

type ButtonProps = ComponentProps<typeof BaseButton> & {
  label: string
  isLoading?: boolean
}

export const Button = ({
  label,
  isLoading,
  disabled,
  activeOpacity = 0.7,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <BaseButton
      activeOpacity={activeOpacity}
      disabled={disabled ?? isLoading}
      {...rest}
    >
      <Box
        backgroundColor={
          disabled ? '$buttonDisabled' : '$primaryButtonBackground'
        }
        borderRadius="md"
        flexDirection="row"
        justifyContent="center"
        padding="md"
      >
        {isLoading ? (
          <ActivityIndicator color={theme.colors.$primaryButtonText} />
        ) : (
          <Text color="$primaryButtonText" variant="$body1">
            {label}
          </Text>
        )}
      </Box>
    </BaseButton>
  )
}
