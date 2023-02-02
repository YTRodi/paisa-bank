import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

import { type AuthState } from '~/types'

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        shouldPersist: false,
        userName: null,
        login: ({ userName, shouldPersist }) => {
          set(() => ({ isLoggedIn: true, userName, shouldPersist }))
        },
        logout: () => {
          set(() => ({
            isLoggedIn: false,
            userName: null,
            shouldPersist: false,
          }))
        },
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
)
