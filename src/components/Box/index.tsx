import { createBox } from '@shopify/restyle'
import { type ComponentProps, type ReactNode } from 'react'
import { ScrollView, type ScrollViewProps } from 'react-native'

import { useTheme } from '~/hooks'
import { type Theme } from '~/styles/theme'

export const Box = createBox<Theme>()
export type BoxProps = ComponentProps<typeof Box>

export const BaseScrollBox = createBox<Theme, ScrollViewProps>(ScrollView)
export type ScrollBoxProps = ComponentProps<typeof BaseScrollBox>
export const ScrollBox = ({
  children,
  contentContainerStyle,
  ...rest
}: ScrollBoxProps & { children: ReactNode }) => {
  const theme = useTheme()

  return (
    <BaseScrollBox
      contentContainerStyle={[
        {
          paddingVertical: theme.spacing['4xl'],
        },
        contentContainerStyle,
      ]}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      {...rest}
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
