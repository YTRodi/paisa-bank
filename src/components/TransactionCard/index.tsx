import { createBox } from '@shopify/restyle'
import React, { type ComponentProps } from 'react'

import { Box, ShadowBox } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { type Theme } from '~/styles/theme'
import { type ColorCombination, type TransactionTypeEnum } from '~/types'
import {
  getColorCombinationByTransactionType,
  getIconByTransactionType,
  getTransactionBodyByTransactionType,
} from '~/utils'

export const TransactionCardBase = createBox<Theme>()

export type TransactionCardProps = {
  title: string
  amount: string
  type: TransactionTypeEnum
} & ComponentProps<typeof TransactionCardBase>

export const TransactionCard = ({
  title,
  amount,
  type,
  ...rest
}: TransactionCardProps) => {
  const colorCombination = getColorCombinationByTransactionType(type)

  return (
    <ShadowBox
      alignItems="center"
      backgroundColor="$mainForeground"
      borderRadius="md"
      flexDirection="row"
      paddingHorizontal="md"
      paddingVertical="xl"
      {...rest}
    >
      <Box alignItems="center" flex={1} flexDirection="row">
        <TransactionCardIcon {...colorCombination} type={type} />
        <Box flex={1} marginLeft="md">
          <Text color="$cardTitle" marginBottom="xxs" variant="$body1">
            {title}
          </Text>
          <Text color="$cardBody" variant="$small">
            {getTransactionBodyByTransactionType(type)}
          </Text>
        </Box>
      </Box>
      <Text
        color={colorCombination.foregroundColor}
        fontFamily="Poppins_500Medium"
        variant="$body2"
      >
        ${amount}
      </Text>
    </ShadowBox>
  )
}

const TransactionCardIcon = ({
  backgroundColor,
  foregroundColor,
  type,
}: Pick<TransactionCardProps, 'type'> & ColorCombination) => {
  return (
    <Box
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="md"
      justifyContent="center"
      padding="sm"
    >
      <Icon color={foregroundColor} icon={getIconByTransactionType(type)} />
    </Box>
  )
}
