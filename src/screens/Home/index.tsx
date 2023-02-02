import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Carousel from 'react-native-reanimated-carousel'

import {
  BankCard,
  Box,
  ScreenLayout,
  ScrollBox,
  Text,
  IconicButton,
  Icon,
  TransactionCard,
} from '~/components'
import { STRINGS } from '~/resources'
import {
  type BankCardType,
  IconEnum,
  TransactionTypeEnum,
  type HomeScreenProps,
  type TransactionType,
  type ServiceType,
} from '~/types'
import { width } from '~/utils'

const { GREETING, NAME, SECTIONS } = STRINGS.HOME
const { SERVICES, TRANSACTIONS } = SECTIONS
const CARDS_MOCK = [
  {
    id: 1,
    issuer: 'mastercard',
    name: 'Soy Paisanx',
    expDate: '2026-03-20',
    lastDigits: 1234,
    balance: '978,85',
    currency: 'USD',
  },
  {
    id: 2,
    issuer: 'visa',
    name: 'Soy Paisanx',
    expDate: '2027-03-20',
    lastDigits: 1234,
    balance: '1000,10',
    currency: 'USD',
  },
] satisfies BankCardType[]
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
const SERVICES_NUM_COLUMNS = SERVICES_LIST.length
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
  return (
    <ScreenLayout>
      <ScrollBox>
        <HomeHeader />
        <BankCardsCarousel />
        <Box marginTop="3xl" paddingHorizontal="md">
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

const BankCardsCarousel = () => {
  return (
    <GestureHandlerRootView>
      <Carousel
        loop
        data={CARDS_MOCK}
        height={width / 2}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: width / 4,
        }}
        renderItem={({ item }) => {
          return <BankCard {...item} />
        }}
        scrollAnimationDuration={250}
        width={width}
      />
    </GestureHandlerRootView>
  )
}

const Services = () => {
  return (
    <Box>
      <Text color="$screenSubtitle" marginBottom="xl" variant="$subheading">
        {SERVICES.TITLE}
      </Text>
      <Box flex={4} flexDirection="row">
        {SERVICES_LIST.map(({ name, ...rest }, index) => {
          return (
            <IconicButton
              key={name}
              flex={1}
              label={name}
              marginLeft={index % SERVICES_NUM_COLUMNS !== 0 ? 'xl' : '0'}
              size={24}
              onPress={() => {}}
              {...rest}
            />
          )
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
