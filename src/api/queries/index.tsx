import { apiClient } from '../apiClient'
import { ENDPOINTS } from '../endpoints'

import { type GetCardsResponse, type GetTransactionsResponse } from '~/types'

export const getCards = async (): Promise<GetCardsResponse> => {
  const response = await apiClient.get(ENDPOINTS.CARDS)

  return response.data
}

export const getTransactions = async (): Promise<GetTransactionsResponse> => {
  const response = await apiClient.get(ENDPOINTS.TRANSACTIONS)

  return response.data
}
