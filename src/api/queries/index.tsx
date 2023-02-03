import { apiClient } from '../apiClient'
import { ENDPOINTS } from '../endpoints'

import { type GetCardsResponse } from '~/types'

export const getCards = async (): Promise<GetCardsResponse> => {
  const response = await apiClient.get(ENDPOINTS.CARDS)

  return response.data
}
