/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  useQueryClient,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query'
import { MotiView } from 'moti'
import { useState } from 'react'
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
  RefreshControl,
} from '~/components'
import { cardKeys, transactionKeys } from '~/constants'
import { useFadeIn, useGetCardsQuery, useGetTransactions } from '~/hooks'
import { STRINGS } from '~/resources'
import { useAuthStore } from '~/store'
import { IconEnum, type HomeScreenProps, type ServiceType } from '~/types'
import { width } from '~/utils'

const { GREETING, SECTIONS } = STRINGS.HOME
const { SERVICES, TRANSACTIONS } = SECTIONS

const DEFAULT_DELAY = 150
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
  const authStore = useAuthStore()
  const fadeInState = useFadeIn()

  return (
    <MotiView state={fadeInState} transition={{ delay: DEFAULT_DELAY }}>
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
            {authStore.userName}
          </Text>
        </Box>
        <Box flexDirection="row">
          <Icon icon={IconEnum.SEARCH} marginRight="xl" />
          <Icon icon={IconEnum.NOTIFICATION} />
        </Box>
      </Box>
    </MotiView>
  )
}

const BankCardsSection = () => {
  const getCardQuery = useGetCardsQuery()

  return (
    <GestureHandlerRootView>
      <BankCardsCarousel data={getCardQuery.data?.data ?? []} />
    </GestureHandlerRootView>
  )
}

const Services = () => {
  const fadeInState = useFadeIn()

  return (
    <Box>
      <Text color="$screenSubtitle" marginBottom="xl" variant="$subheading">
        {SERVICES.TITLE}
      </Text>
      <Box flexDirection="row" justifyContent="space-between">
        {SERVICES_LIST.map(({ name, ...rest }, index) => {
          return (
            <MotiView
              key={name}
              state={fadeInState}
              transition={{ delay: index * DEFAULT_DELAY }}
            >
              <IconicButton label={name} size={24} {...rest} />
            </MotiView>
          )
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
  const getTransactionsQuery = useGetTransactions()

  if (!getTransactionsQuery.data) {
    return null
  }

  const transactionsOrderedByMostRecent = [
    ...getTransactionsQuery.data.data,
  ].sort((a, b) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf()
  })

  return (
    <Box>
      {transactionsOrderedByMostRecent.map((transaction, index) => {
        return (
          <MotiView
            key={transaction.title}
            animate={{ translateX: 0, scale: 1 }}
            from={{ translateX: -width, scale: 0.5 }}
            transition={{ delay: index * DEFAULT_DELAY }}
          >
            <TransactionCard
              marginTop={index !== 0 ? 'xl' : '0'}
              {...transaction}
            />
          </MotiView>
        )
      })}
    </Box>
  )
}
