import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

import { type AuthState } from '~/types'

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        token: null,
        shouldPersist: false,
        login: (token, shouldPersist) => {
          set(() => ({ isLoggedIn: true, token, shouldPersist }))
        },
        logout: () => {
          set(() => ({ isLoggedIn: false, token: null, shouldPersist: false }))
        },
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
)
