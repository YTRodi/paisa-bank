import { createBox } from '@shopify/restyle'
import React, { type ComponentProps } from 'react'

import { Box, ShadowBox } from '../Box'
import { Text } from '../Text'

import { type Theme } from '~/styles/theme'
import { width } from '~/utils'

export const ContactCardBase = createBox<Theme>()
type ContactCardBaseProps = ComponentProps<typeof ContactCardBase>

export type ContactCardProps = {
  name: string
  lastName: string
  phone: string
} & ContactCardBaseProps

export const ContactCard = ({
  name,
  lastName,
  phone,
  ...rest
}: ContactCardProps) => {
  const contactCardProps = {
    name,
    lastName,
    phone,
  }

  return (
    <ShadowBox
      alignItems="center"
      backgroundColor="$mainBackground"
      borderRadius="md"
      flex={1}
      flexDirection="row"
      paddingHorizontal="md"
      paddingVertical="xl"
      {...rest}
    >
      <ContactCardAbbreviatedNameAndLastName
        lastName={contactCardProps.lastName}
        name={contactCardProps.name}
      />
      <ContactCardInfomation {...contactCardProps} />
    </ShadowBox>
  )
}

const ContactCardAbbreviatedNameAndLastName = ({
  name,
  lastName,
}: Pick<ContactCardProps, 'name' | 'lastName'>) => {
  const firstCharacterInName = name.charAt(0)
  const firstCharacterInLastName = lastName.charAt(0)
  const abbreviation = `${firstCharacterInName}${firstCharacterInLastName}`

  return (
    <Box
      alignItems="center"
      backgroundColor="lightblueLight"
      borderRadius="md"
      height={width / 7}
      justifyContent="center"
      width={width / 7}
    >
      <Text
        color="lightbluePrimary"
        fontFamily="Poppins_500Medium"
        variant="$body2"
      >
        {abbreviation}
      </Text>
    </Box>
  )
}

const ContactCardInfomation = ({
  name,
  lastName,
  phone,
}: Pick<ContactCardProps, 'name' | 'lastName' | 'phone'>) => {
  return (
    <Box flex={1} marginLeft="md">
      <Text color="$cardTitle" marginBottom="xxs" variant="$body1">
        {name} {lastName}
      </Text>
      <Text color="$cardBody" variant="$small">
        {phone}
      </Text>
    </Box>
  )
}
