import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { Box, Text } from '~/components'
import { AppProviders } from '~/context'

export default function App() {
  return (
    <AppProviders>
      <AppState />
    </AppProviders>
  )
}

const AppState = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Box>
        <Text variant="$brand">PaisaBank</Text>
        <Text variant="$heading">heading</Text>
        <Text variant="$subheading">subheading</Text>
        <Text variant="$body">body</Text>
        <Text variant="$small">small</Text>
        <Text variant="$body">Hola Paisanx</Text>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
