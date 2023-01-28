import { useTheme as useRestyleTheme } from '@shopify/restyle'

import { type Theme } from '~/styles/theme'

export const useTheme = (): Theme => {
  return useRestyleTheme<Theme>()
}
