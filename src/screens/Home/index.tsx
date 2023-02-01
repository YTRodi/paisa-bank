import { Dimensions } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Carousel from 'react-native-reanimated-carousel'

import {
  BankCard,
  type BankCardProps,
  Box,
  ScreenLayout,
  ScrollBox,
  Text,
  IconicButton,
  Icon,
  type IconicButtonProps,
  TransactionCard,
  type TransactionCardProps,
} from '~/components'
import { STRINGS } from '~/resources'
import { IconEnum, TransactionTypeEnum, type HomeScreenProps } from '~/types'

type Props = HomeScreenProps
type Service = Pick<IconicButtonProps, 'icon' | 'color' | 'label'>
type Transaction = Pick<TransactionCardProps, 'title' | 'amount' | 'type'>

const width = Dimensions.get('window').width
const { GREETING, NAME, SECTIONS } = STRINGS.HOME
const { SERVICES, TRANSACTIONS } = SECTIONS
const MOCK_DATA = [
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
] satisfies BankCardProps[]
const SERVICES_LIST: Service[] = [
  {
    label: SERVICES.ACTION_NAMES.FIRST,
    icon: IconEnum.WALLET,
    color: 'greenPrimary',
  },
  {
    label: SERVICES.ACTION_NAMES.SECOND,
    icon: IconEnum.TRANSFER,
    color: 'orangePrimary',
  },
  {
    label: SERVICES.ACTION_NAMES.THIRD,
    icon: IconEnum.PAY,
    color: 'purplePrimary',
  },
  {
    label: SERVICES.ACTION_NAMES.FOURTH,
    icon: IconEnum.RECHARGE,
    color: 'lightbluePrimary',
  },
]
const SERVICES_NUM_COLUMNS = SERVICES_LIST.length
const LATEST_TRANSACTIONS_LIST: Transaction[] = [
  {
    title: 'Adobe',
    amount: '125,00',
    type: TransactionTypeEnum.SUS,
  },
  {
    title: 'Juan David',
    amount: '95,00',
    type: TransactionTypeEnum.CASH_IN,
  },
  {
    title: 'Jorge Cruz',
    amount: '95,00',
    type: TransactionTypeEnum.CASH_OUT,
  },
]

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
        data={MOCK_DATA}
        height={width / 2}
        loop={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: width / 4,
        }}
        renderItem={({ item }) => {
          return <BankCard {...item} />
        }}
        scrollAnimationDuration={600}
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
        {SERVICES_LIST.map((service, index) => {
          return (
            <IconicButton
              key={service.label}
              flex={1}
              marginLeft={index % SERVICES_NUM_COLUMNS !== 0 ? 'xl' : '0'}
              size={24}
              onPress={() => {}}
              {...service}
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
