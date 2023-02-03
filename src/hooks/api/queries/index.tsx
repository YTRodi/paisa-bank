import { useQuery } from '@tanstack/react-query'

import { getCards, getTransactions } from '~/api'
import { cardKeys, transactionKeys } from '~/constants'

export const useGetCardsQuery = () => {
  return useQuery({
    queryKey: cardKeys.lists(),
    queryFn: getCards,
    suspense: true,
  })
}

export const useGetTransactions = () => {
  return useQuery({
    queryKey: transactionKeys.lists(),
    queryFn: getTransactions,
    suspense: true,
  })
}
