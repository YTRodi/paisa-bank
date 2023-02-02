import { createBox } from '@shopify/restyle'
import React, { type ComponentProps } from 'react'
import {
  ActivityIndicator,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { Box, ShadowBox } from '../Box'
import { Icon, type IconProps } from '../Icon'
import { Text } from '../Text'

import { useTheme } from '~/hooks'
import { type ColorProps, type Theme } from '~/styles/theme'
import { IconEnum } from '~/types'

export const BaseButton = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity
)

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
        backgroundColor={disabled ? '$buttonDisabled' : '$buttonBackground'}
        borderRadius="md"
        flexDirection="row"
        justifyContent="center"
        padding="md"
      >
        {isLoading ? (
          <ActivityIndicator color={theme.colors.$buttonText} />
        ) : (
          <Text color="$buttonText" variant="$body1">
            {label}
          </Text>
        )}
      </Box>
    </BaseButton>
  )
}

export type IconicButtonProps = Omit<ButtonProps, 'isLoading'> & IconProps

export const IconicButton = ({
  label,
  activeOpacity = 0.7,
  icon = IconEnum.WALLET,
  color,
  size,
  ...rest
}: Omit<ButtonProps, 'isLoading'> & IconProps) => {
  const iconProps = {
    icon,
    size,
    color,
  }
  const getBackgroundColor = (): ColorProps['color'] => {
    let backgroundColor: ColorProps['color'] = '$mainBackground'

    switch (color) {
      case 'greenPrimary':
        backgroundColor = 'greenLight'
        break
      case 'orangePrimary':
        backgroundColor = 'orangeLight'
        break
      case 'purplePrimary':
        backgroundColor = 'purpleLight'
        break
      case 'lightbluePrimary':
        backgroundColor = 'lightblueLight'
        break
    }

    return backgroundColor
  }

  return (
    <BaseButton activeOpacity={activeOpacity} {...rest}>
      <ShadowBox
        alignItems="center"
        backgroundColor={getBackgroundColor()}
        borderRadius="md"
        justifyContent="center"
        padding="xl"
      >
        <Icon {...iconProps} />
      </ShadowBox>
      <Text
        color="$cardTitle"
        marginTop="md"
        textAlign="center"
        variant="$body1"
      >
        {label}
      </Text>
    </BaseButton>
  )
}
