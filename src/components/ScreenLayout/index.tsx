import { type ReactNode } from 'react'
import { SafeAreaView } from 'react-native'

import { useTheme } from '~/hooks'

export const ScreenLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.$mainBackground }}
    >
      {children}
    </SafeAreaView>
  )
}
