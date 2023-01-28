import { ThemeProvider } from '@shopify/restyle'
import { type ReactNode } from 'react'

import { SplashProvider } from './SplashProvider'

import theme from '~/styles/theme'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <SplashProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SplashProvider>
  )
}
