import {
  createText,
  type TextProps as RestyleTextProps,
} from '@shopify/restyle'

import { type Theme } from '~/styles/theme'

export const Text = createText<Theme>()
export type TextProps = RestyleTextProps<Theme>
