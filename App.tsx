import { AppProviders } from '~/context'
import { RootStackNavigator } from '~/navigation'

export default function App() {
  return (
    <AppProviders>
      <RootStackNavigator />
    </AppProviders>
  )
}
