import { createBox, type BoxProps as RestyleBoxProps } from '@shopify/restyle'

import { type Theme } from '~/styles/theme'

export const Box = createBox<Theme>()
export type BoxProps = RestyleBoxProps<Theme>
