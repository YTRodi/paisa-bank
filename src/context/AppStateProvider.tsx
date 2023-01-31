import { useEffect, type ReactNode } from 'react'
import { AppState } from 'react-native'

import { useAuthStore } from '~/store'

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, shouldPersist, logout } = useAuthStore()

  useEffect(() => {
    AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        return
      }

      if (isLoggedIn && !shouldPersist) {
        if (nextAppState === 'background') {
          logout()
        }
      }
    })
  }, [isLoggedIn, shouldPersist])

  return <>{children}</>
}
