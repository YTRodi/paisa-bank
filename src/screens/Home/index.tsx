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
} from '~/components'
import { cardKeys } from '~/constants'
import { useGetCardsQuery } from '~/hooks'
import { STRINGS } from '~/resources'
import {
  IconEnum,
  TransactionTypeEnum,
  type HomeScreenProps,
  type TransactionType,
  type ServiceType,
} from '~/types'

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

const LATEST_TRANSACTIONS_LIST = [
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
] satisfies TransactionType[]

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
              await queryClient.invalidateQueries({
                queryKey: cardKeys.lists(),
              })
              setIsRefreshing(false)
            }}
          />
        }
      >
        <HomeHeader />
        <BankCardsErrorBoundaryWithSuspense onReset={reset}>
          <BankCardsCarouselSection />
        </BankCardsErrorBoundaryWithSuspense>
        <Box marginTop="xl" paddingHorizontal="md">
          <Services />
          <LatestTransactions />
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

const BankCardsCarouselSection = () => {
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

const LatestTransactions = () => {
  return (
    <Box marginTop="3xl">
      <Text color="$screenSubtitle" marginBottom="xl" variant="$subheading">
        {TRANSACTIONS.TITLE}
      </Text>
      <Box>
        {LATEST_TRANSACTIONS_LIST.map((transaction, index) => {
          return (
            <TransactionCard
              key={transaction.title}
              marginTop={index !== 0 ? 'xl' : '0'}
              {...transaction}
            />
          )
        })}
      </Box>
    </Box>
  )
}
