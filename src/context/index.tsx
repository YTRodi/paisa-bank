import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import { type ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AppStateProvider } from './AppStateProvider'
import { QueryClientProvider } from './QueryClientProvider'
import { SplashProvider } from './SplashProvider'

import theme from '~/styles/theme'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <AppStateProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider>
          <SplashProvider>
            <SafeAreaProvider>
              <NavigationContainer>{children}</NavigationContainer>
            </SafeAreaProvider>
          </SplashProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </AppStateProvider>
  )
}
