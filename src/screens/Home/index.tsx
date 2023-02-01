import { Dimensions } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Carousel from 'react-native-reanimated-carousel'

import {
  BankCard,
  type BankCardProps,
  Box,
  NotificationIcon,
  ScreenLayout,
  ScrollBox,
  SearchIcon,
  Text,
} from '~/components'
import { STRINGS } from '~/resources'
import { type HomeScreenProps } from '~/types'

type Props = HomeScreenProps

const width = Dimensions.get('window').width
const { GREETING, NAME } = STRINGS.HOME
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

export const Home = (props: Props) => {
  return (
    <ScreenLayout>
      <ScrollBox paddingTop="4xl">
        <HomeHeader />
        <BankCardsCarousel />
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
        <Text variant="$body1">{GREETING}</Text>
        <Text fontFamily="Poppins_600SemiBold" variant="$heading">
          {NAME}
        </Text>
      </Box>
      <Box flexDirection="row">
        <SearchIcon marginRight="xl" />
        <NotificationIcon />
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
