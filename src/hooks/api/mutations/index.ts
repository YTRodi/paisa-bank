/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useMutation } from '@tanstack/react-query'

import { login } from '~/api'

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  })
}
