export interface AuthState {
  isLoggedIn: boolean
  shouldPersist: boolean
  userName: string | null
  login: (loginValues: { userName: string; shouldPersist: boolean }) => void
  logout: () => void
}
