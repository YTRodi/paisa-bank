import { Box, Button, Text } from '~/components'
import { useAuthStore } from '~/store'
import { type HomeScreenProps } from '~/types'

type Props = HomeScreenProps

export const Home = ({ navigation }: Props) => {
  const { token, logout } = useAuthStore()

  return (
    <Box alignItems="center" flex={1} justifyContent="center">
      <Text variant="$heading">Home Screen!</Text>
      <Text variant="$heading">TOKEN: {token}</Text>
      <Button
        label="Go to Contacts"
        onPress={() => {
          navigation.navigate('Contacts')
        }}
      />
      <Button label="Log out" onPress={logout} />
    </Box>
  )
}
