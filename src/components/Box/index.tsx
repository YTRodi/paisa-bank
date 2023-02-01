import { createBox, type BoxProps as RestyleBoxProps } from '@shopify/restyle'
import { type ReactNode } from 'react'
import { ScrollView, type ScrollViewProps } from 'react-native'

import { useTheme } from '~/hooks'
import { type Theme } from '~/styles/theme'

export const Box = createBox<Theme>()
export type BoxProps = RestyleBoxProps<Theme>

export const BaseScrollBox = createBox<Theme, ScrollViewProps>(ScrollView)
export const ScrollBox = ({
  children,
  ...rest
}: BoxProps & { children: ReactNode }) => {
  const theme = useTheme()

  return (
    <BaseScrollBox
      {...rest}
      contentContainerStyle={{
        paddingVertical: theme.spacing['4xl'],
      }}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </BaseScrollBox>
  )
}

export const ShadowBox = ({
  children,
  ...rest
}: BoxProps & { children: ReactNode }) => {
  return (
    <Box
      elevation={1}
      shadowColor="black"
      shadowOffset={{
        width: 0,
        height: 8,
      }}
      shadowOpacity={0.06}
      shadowRadius={16}
      {...rest}
    >
      {children}
    </Box>
  )
}
