import { createBox, type BoxProps as RestyleBoxProps } from '@shopify/restyle'
import { type ReactNode } from 'react'
import { ScrollView, type ScrollViewProps } from 'react-native'

import { type Theme } from '~/styles/theme'

export const Box = createBox<Theme>()
export type BoxProps = RestyleBoxProps<Theme>
export const ScrollBox = createBox<Theme, ScrollViewProps>(ScrollView)

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
