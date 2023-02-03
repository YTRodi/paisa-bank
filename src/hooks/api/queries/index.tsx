import { useQuery } from '@tanstack/react-query'

import { getCards, getContacts, getTransactions } from '~/api'
import { cardKeys, contactKeys, transactionKeys } from '~/constants'

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

export const useGetContacts = () => {
  return useQuery({
    queryKey: contactKeys.lists(),
    queryFn: getContacts,
    suspense: true,
  })
}
