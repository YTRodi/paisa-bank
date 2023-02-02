import { Box, ShadowBox } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { STRINGS } from '~/resources'
import { type ColorProps } from '~/styles/theme'
import { IconEnum } from '~/types'

export interface BankCardProps {
  issuer: string
  currency: string
  balance: string
  name: string
  lastDigits: number
  expDate: string
}

const bankCardTextColor: ColorProps = {
  color: '$bankCardText',
}
const { BALANCE, EXPIRY_DATE } = STRINGS.BANK_CARD

export const BankCard = ({
  issuer,
  currency,
  balance,
  name,
  lastDigits,
  expDate,
}: BankCardProps) => {
  return (
    <ShadowBox
      backgroundColor={
        issuer === 'mastercard'
          ? '$primaryBankCardBackground'
          : '$secondaryBankCardBackground'
      }
      borderRadius="lg"
      paddingHorizontal="xl"
      paddingVertical="md"
    >
      <BankCardHeader balance={balance} currency={currency} issuer={issuer} />
      <BankCardBody lastDigits={lastDigits} />
      <BankCardFooter expDate={expDate} name={name} />
    </ShadowBox>
  )
}

const BankCardHeader = ({
  issuer,
  currency,
  balance,
}: Pick<BankCardProps, 'issuer' | 'currency' | 'balance'>) => {
  return (
    <Box
      alignItems="flex-start"
      flexDirection="row"
      justifyContent="space-between"
      marginBottom="xl"
    >
      <Balance balance={balance} currency={currency} issuer={issuer} />
      <Issuer issuer={issuer} />
    </Box>
  )
}

const Balance = ({
  issuer,
  currency,
  balance,
}: Pick<BankCardProps, 'issuer' | 'currency' | 'balance'>) => {
  return (
    <Box flex={1}>
      <Text {...bankCardTextColor} marginBottom="xs" variant="$body2">
        {BALANCE}
      </Text>
      <Box alignItems="center" flexDirection="row">
        <CurrencyBox currency={currency} issuer={issuer} />
        <Box flex={1}>
          <Text {...bankCardTextColor} marginLeft="xs" variant="$heading">
            {balance}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

const Issuer = ({ issuer }: Pick<BankCardProps, 'issuer'>) => {
  return (
    <Box>
      {
        {
          mastercard: <Icon icon={IconEnum.MASTERCARD} size={34} />,
          visa: <Icon icon={IconEnum.VISA} size={42} />,
        }[issuer]
      }
    </Box>
  )
}

const CurrencyBox = ({
  issuer,
  currency,
}: Pick<BankCardProps, 'issuer' | 'currency'>) => {
  return (
    <Box
      backgroundColor={
        issuer === 'mastercard'
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
  name,
  expDate,
}: Pick<BankCardProps, 'name' | 'expDate'>) => {
  return (
    <Box alignItems="center" flexDirection="row">
      <Box flex={1}>
        <Text
          {...bankCardTextColor}
          fontFamily="Poppins_400Regular"
          variant="$body1"
        >
          {name}
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
          {/* TODO: format this date! */}
          {expDate}
        </Text>
      </Box>
    </Box>
  )
}
