import React from 'react'

import { Box, Button, Text } from '~/components'
import { type ContactsScreenProps } from '~/types'

type Props = ContactsScreenProps

export const Contacts = ({ navigation }: Props) => {
  return (
    <Box alignItems="center" flex={1} justifyContent="center">
      <Text variant="$heading">Contacts Screen!</Text>
      <Button
        label="Go back"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
    </Box>
  )
}
