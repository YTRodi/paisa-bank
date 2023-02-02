import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import { type ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AppStateProvider } from './AppStateProvider'
import { SplashProvider } from './SplashProvider'

import theme from '~/styles/theme'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <AppStateProvider>
      <ThemeProvider theme={theme}>
        <SplashProvider>
          <SafeAreaProvider>
            <NavigationContainer>{children}</NavigationContainer>
          </SafeAreaProvider>
        </SplashProvider>
      </ThemeProvider>
    </AppStateProvider>
  )
}
