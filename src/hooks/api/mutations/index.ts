/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useMutation } from '@tanstack/react-query'

import { login } from '~/api'
import { MUTATION_KEYS } from '~/constants'

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: MUTATION_KEYS.LOGIN,
    mutationFn: login,
  })
}
