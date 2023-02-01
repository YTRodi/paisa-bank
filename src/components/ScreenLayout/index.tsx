import { type ReactNode } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import { isAndroid } from '~/constants'
import { useTheme } from '~/hooks'

export const ScreenLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.$mainBackground,
        paddingTop: isAndroid ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  )
}
