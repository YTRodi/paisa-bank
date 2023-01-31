import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, type ReactNode } from 'react'
import { View } from 'react-native'

SplashScreen.preventAutoHideAsync().catch(console.error)

export const SplashProvider = ({ children }: { children: ReactNode }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  )
}
