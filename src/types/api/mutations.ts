export interface LoginResponse {
  success: boolean
  data: {
    name: string
  }
}
export interface LoginVariables {
  email: string
  password: string
}
