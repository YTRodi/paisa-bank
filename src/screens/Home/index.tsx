import {
  BankCard,
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

const { GREETING, NAME } = STRINGS.HOME

export const Home = (props: Props) => {
  return (
    <ScreenLayout>
      <ScrollBox borderWidth={1} paddingHorizontal="md">
        <HomeHeader />
        <BankCards />
      </ScrollBox>
    </ScreenLayout>
  )
}

const HomeHeader = () => {
  return (
    <Box alignItems="center" flexDirection="row" justifyContent="space-between">
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

const BankCards = () => {
  // TODO: horizontal cards (find lib to show only one bankCard in screen) "Carousel"

  return (
    <Box marginTop="3xl">
      <BankCard
        balance="978.85"
        brand="mastercard"
        currency="USD"
        expDate="02/30"
        holderName="Soy Paisanx"
        lastDigits={1234}
      />
    </Box>
  )
}
