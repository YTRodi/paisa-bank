import { API_BASE_URL, API_KEY } from '@env'

export const ENV_VARIABLES = {
  API_BASE_URL: API_BASE_URL as string,
  API_KEY: API_KEY as string,
} satisfies Record<string, string>
