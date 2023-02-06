import { apiClient } from '../apiClient'
import { ENDPOINTS } from '../endpoints'

import { type LoginResponse, type LoginVariables } from '~/types'

export const login = async (
  credentials: LoginVariables
): Promise<LoginResponse> => {
  const response = await apiClient.post(ENDPOINTS.LOGIN, credentials)

  return response.data
}
