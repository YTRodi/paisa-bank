import { Box } from '../Box'
import { MastercardIcon, VisaIcon } from '../Icons'
import { Text } from '../Text'

import { STRINGS } from '~/resources'
import { type ColorProps } from '~/styles/theme'

interface BankCardProps {
  brand: 'mastercard' | 'visa'
  currency: string
  balance: string
  holderName: string
  lastDigits: number
  expDate: string
}

const bankCardTextColor: ColorProps = {
  color: '$bankCardText',
}
const { BALANCE, EXPIRY_DATE } = STRINGS.BANK_CARD

export const BankCard = ({
  brand,
  currency,
  balance,
  holderName,
  lastDigits,
  expDate,
}: BankCardProps) => {
  return (
    <Box
      backgroundColor={
        brand === 'mastercard'
          ? '$primaryBankCardBackground'
          : '$secondaryBankCardBackground'
      }
      borderRadius="lg"
      paddingHorizontal="xl"
      paddingVertical="md"
    >
      <BankCardHeader balance={balance} brand={brand} currency={currency} />
      <BankCardBody lastDigits={lastDigits} />
      <BankCardFooter expDate={expDate} holderName={holderName} />
    </Box>
  )
}

const BankCardHeader = ({
  brand,
  currency,
  balance,
}: Pick<BankCardProps, 'brand' | 'currency' | 'balance'>) => {
  return (
    <Box
      alignItems="flex-start"
      flexDirection="row"
      justifyContent="space-between"
      marginBottom="xl"
    >
      <Balance balance={balance} brand={brand} currency={currency} />
      <Brand brand={brand} />
    </Box>
  )
}

const Balance = ({
  brand,
  currency,
  balance,
}: Pick<BankCardProps, 'brand' | 'currency' | 'balance'>) => {
  return (
    <Box flex={1}>
      <Text {...bankCardTextColor} marginBottom="xs" variant="$body2">
        {BALANCE}
      </Text>
      <Box alignItems="center" flexDirection="row">
        <CurrencyBox brand={brand} currency={currency} />
        <Box flex={1}>
          <Text {...bankCardTextColor} marginLeft="xs" variant="$heading">
            {balance}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

const Brand = ({ brand }: Pick<BankCardProps, 'brand'>) => {
  return (
    <Box>
      {
        {
          mastercard: <MastercardIcon />,
          visa: <VisaIcon />,
        }[brand]
      }
    </Box>
  )
}

const CurrencyBox = ({
  brand,
  currency,
}: Pick<BankCardProps, 'brand' | 'currency'>) => {
  return (
    <Box
      backgroundColor={
        brand === 'mastercard'
          ? '$primaryBankCardCurrencyBackground'
          : '$secondaryBankCardCurrencyBackground'
      }
      borderRadius="xxs"
      paddingHorizontal="xs"
      paddingVertical="xxs"
    >
      <Text
        {...bankCardTextColor}
        fontFamily="Poppins_500Medium"
        variant="$body2"
      >
        {currency}
      </Text>
    </Box>
  )
}

const BankCardBody = ({ lastDigits }: Pick<BankCardProps, 'lastDigits'>) => {
  return (
    <Box flexDirection="row" marginBottom="xl">
      <FirstDigits />
      <Text {...bankCardTextColor} variant="$heading">
        {lastDigits}
      </Text>
    </Box>
  )
}

const FirstDigits = () => {
  return (
    <>
      {[1, 2, 3].map((num) => (
        <Box key={num} marginRight="xs">
          <Text {...bankCardTextColor} variant="$heading">
            ****
          </Text>
        </Box>
      ))}
    </>
  )
}

const BankCardFooter = ({
  holderName,
  expDate,
}: Pick<BankCardProps, 'holderName' | 'expDate'>) => {
  return (
    <Box alignItems="center" flex={1} flexDirection="row">
      <Box flex={1}>
        <Text
          {...bankCardTextColor}
          fontFamily="Poppins_400Regular"
          variant="$body1"
        >
          {holderName}
        </Text>
      </Box>
      <Box alignItems="center">
        <Text
          {...bankCardTextColor}
          fontFamily="Poppins_500Medium"
          marginBottom="xxs"
          variant="$small"
        >
          {EXPIRY_DATE}
        </Text>
        <Text
          {...bankCardTextColor}
          fontFamily="Poppins_500Medium"
          variant="$small"
        >
          {expDate}
        </Text>
      </Box>
    </Box>
  )
}
