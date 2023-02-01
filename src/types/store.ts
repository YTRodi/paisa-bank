export interface AuthState {
  isLoggedIn: boolean
  token: string | null
  shouldPersist: boolean
  login: (token: string, shouldPersist: boolean) => void
  logout: () => void
}
