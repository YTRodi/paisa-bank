import { AppProviders } from '~/context'
import { Login } from '~/screens'

export default function App() {
  return (
    <AppProviders>
      <AppState />
    </AppProviders>
  )
}

const AppState = () => {
  return <Login />
}
