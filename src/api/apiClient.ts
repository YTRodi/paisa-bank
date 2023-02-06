import axios from 'axios'

import { API_HEADERS, ENV_VARIABLES } from '~/constants'

export const apiClient = axios.create({
  baseURL: ENV_VARIABLES.API_BASE_URL,
  headers: {
    [API_HEADERS.API_KEY]: ENV_VARIABLES.API_KEY,
  },
})
