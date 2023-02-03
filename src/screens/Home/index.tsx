/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  useQueryClient,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query'
import { useState } from 'react'
import { RefreshControl } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  Box,
  ScreenLayout,
  ScrollBox,
  Text,
  IconicButton,
  Icon,
  TransactionCard,
  BankCardsCarousel,
  BankCardsErrorBoundaryWithSuspense,
  TransactionCardErrorBoundaryWithSuspense,
} from '~/components'
import { cardKeys, transactionKeys } from '~/constants'
import { useGetCardsQuery, useGetTransactions } from '~/hooks'
import { STRINGS } from '~/resources'
import { IconEnum, type HomeScreenProps, type ServiceType } from '~/types'

const { GREETING, NAME, SECTIONS } = STRINGS.HOME
const { SERVICES, TRANSACTIONS } = SECTIONS

const SERVICES_LIST: ServiceType[] = [
  {
    name: SERVICES.ACTION_NAMES.FIRST,
    icon: IconEnum.WALLET,
    color: 'greenPrimary',
  },
  {
    name: SERVICES.ACTION_NAMES.SECOND,
    icon: IconEnum.TRANSFER,
    color: 'orangePrimary',
  },
  {
    name: SERVICES.ACTION_NAMES.THIRD,
    icon: IconEnum.PAY,
    color: 'purplePrimary',
  },
  {
    name: SERVICES.ACTION_NAMES.FOURTH,
    icon: IconEnum.RECHARGE,
    color: 'lightbluePrimary',
  },
]

type Props = HomeScreenProps

export const Home = (props: Props) => {
  const { reset } = useQueryErrorResetBoundary()
  const queryClient = useQueryClient()
  const [isRefreshing, setIsRefreshing] = useState(false)

  return (
    <ScreenLayout>
      <ScrollBox
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={async () => {
              setIsRefreshing(true)
              queryClient.invalidateQueries({
                queryKey: cardKeys.lists(),
                exact: true,
              })
              queryClient.invalidateQueries({
                queryKey: transactionKeys.lists(),
                exact: true,
              })
              setIsRefreshing(false)
            }}
          />
        }
      >
        <HomeHeader />
        <BankCardsErrorBoundaryWithSuspense onReset={reset}>
          <BankCardsSection />
        </BankCardsErrorBoundaryWithSuspense>
        <Box marginTop="xl" paddingHorizontal="md">
          <Services />
          <TransactionCardErrorBoundaryWithSuspense onReset={reset}>
            <LatestTransactionsSection />
          </TransactionCardErrorBoundaryWithSuspense>
        </Box>
      </ScrollBox>
    </ScreenLayout>
  )
}

const HomeHeader = () => {
  return (
    <Box
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="md"
    >
      <Box>
        <Text fontFamily="Poppins_400Regular" variant="$body1">
          {GREETING}
        </Text>
        <Text fontFamily="Poppins_600SemiBold" variant="$heading">
          {NAME}
        </Text>
      </Box>
      <Box flexDirection="row">
        <Icon icon={IconEnum.SEARCH} marginRight="xl" />
        <Icon icon={IconEnum.NOTIFICATION} />
      </Box>
    </Box>
  )
}

const BankCardsSection = () => {
  const { data } = useGetCardsQuery()

  return (
    <GestureHandlerRootView>
      <BankCardsCarousel data={data?.data ?? []} />
    </GestureHandlerRootView>
  )
}

const Services = () => {
  return (
    <Box>
      <Text color="$screenSubtitle" marginBottom="xl" variant="$subheading">
        {SERVICES.TITLE}
      </Text>
      <Box flexDirection="row" justifyContent="space-between">
        {SERVICES_LIST.map(({ name, ...rest }) => {
          return <IconicButton key={name} label={name} size={24} {...rest} />
        })}
      </Box>
    </Box>
  )
}

const LatestTransactionsSection = () => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <Box marginTop="3xl">
      <Text color="$screenSubtitle" marginBottom="xl" variant="$subheading">
        {TRANSACTIONS.TITLE}
      </Text>
      <TransactionCardErrorBoundaryWithSuspense onReset={reset}>
        <LastestTransactiosList />
      </TransactionCardErrorBoundaryWithSuspense>
    </Box>
  )
}

const LastestTransactiosList = () => {
  const { data } = useGetTransactions()

  return (
    <Box>
      {data?.data.map((transaction, index) => {
        return (
          <TransactionCard
            key={transaction.title}
            marginTop={index !== 0 ? 'xl' : '0'}
            {...transaction}
          />
        )
      })}
    </Box>
  )
}
