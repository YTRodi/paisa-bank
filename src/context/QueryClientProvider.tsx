import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from '@tanstack/react-query'
import axios from 'axios'
import { type ReactNode } from 'react'
import Toast from 'react-native-toast-message'

import { type ApiErrorResponse } from '~/types'

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            if (axios.isAxiosError<ApiErrorResponse>(error)) {
              Toast.show({ type: 'error', text2: error.response.data.message })
              return
            }
          }

          Toast.show({ type: 'error', text1: error.message })
        }
      },
    },
  },
})

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  )
}
