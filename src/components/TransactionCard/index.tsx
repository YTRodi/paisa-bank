import { createBox } from '@shopify/restyle'
import { Skeleton } from 'moti/skeleton'
import React, { type ReactNode, Suspense, type ComponentProps } from 'react'
import { ErrorBoundary, type ErrorBoundaryProps } from 'react-error-boundary'

import { Box, ShadowBox } from '../Box'
import { Fallback } from '../Fallback'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { STRINGS } from '~/resources'
import { type Theme } from '~/styles/theme'
import {
  type TransactionEntity,
  TransactionTypeEnum,
  type ColorCombination,
} from '~/types'
import {
  getColorCombinationByTransactionType,
  getIconByTransactionType,
  getTransactionBodyByTransactionType,
} from '~/utils'

export const TransactionCardBase = createBox<Theme>()

export type TransactionCardProps = {
  title: string
  amount: string
  transactionType: TransactionTypeEnum
} & ComponentProps<typeof TransactionCardBase>

export const TransactionCard = ({
  title,
  amount,
  transactionType,
  ...rest
}: TransactionCardProps) => {
  const colorCombination = getColorCombinationByTransactionType(transactionType)

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
        <TransactionCardIcon
          {...colorCombination}
          transactionType={transactionType}
        />
        <Box flex={1} marginLeft="md">
          <Text color="$cardTitle" marginBottom="xxs" variant="$body1">
            {title}
          </Text>
          <Text color="$cardBody" variant="$small">
            {getTransactionBodyByTransactionType(transactionType)}
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
  transactionType,
}: Pick<TransactionCardProps, 'transactionType'> & ColorCombination) => {
  return (
    <Box
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="md"
      justifyContent="center"
      padding="sm"
    >
      <Icon
        color={foregroundColor}
        icon={getIconByTransactionType(transactionType)}
      />
    </Box>
  )
}

export const TransactionCardErrorBoundary = ({
  children,
  onReset,
}: Omit<ErrorBoundaryProps, 'fallbackRender'> & { children: ReactNode }) => {
  return (
    <ErrorBoundary
      fallbackRender={(props) => {
        return (
          <Fallback
            {...props}
            body={STRINGS.TRANSACTION_CARD.FALLBACK.DEFAULT_BODY_ERROR}
          />
        )
      }}
      onReset={onReset}
    >
      {children}
    </ErrorBoundary>
  )
}

export const TransactionCardErrorBoundaryWithSuspense = ({
  children,
  onReset,
}: Omit<ErrorBoundaryProps, 'fallbackRender'> & { children: ReactNode }) => {
  return (
    <TransactionCardErrorBoundary onReset={onReset}>
      <Suspense fallback={<TransactionCardFallback />}>{children}</Suspense>
    </TransactionCardErrorBoundary>
  )
}

const TRANSACTIONS_MOCK = [
  {
    id: 1,
    title: 'Adobe',
    amount: '125,00',
    transactionType: TransactionTypeEnum.SUS,
    date: '2023-01-01',
  },
  {
    id: 2,
    title: 'Juan David',
    amount: '99,00',
    transactionType: TransactionTypeEnum.CASH_IN,
    date: '2022-12-30',
  },
  {
    id: 3,
    title: 'Jorge Cruz',
    amount: '10,00',
    transactionType: TransactionTypeEnum.CASH_OUT,
    date: '2022-12-29',
  },
] satisfies TransactionEntity[]

export const TransactionCardFallback = () => {
  return (
    <Box>
      <Box>
        {TRANSACTIONS_MOCK.map((transaction, index) => {
          return (
            <Box key={transaction.title} marginTop={index !== 0 ? 'xl' : '0'}>
              <Skeleton
                show
                colorMode="light" // TODO: use CURRENT_THEME
              >
                <TransactionCard {...transaction} />
              </Skeleton>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
