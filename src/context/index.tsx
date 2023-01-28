import { ThemeProvider } from '@shopify/restyle'
import { type ReactNode } from 'react'

import theme from '~/styles/theme'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
