import { createText } from '@shopify/restyle'
import { type ComponentProps } from 'react'
import { Svg, type SvgProps } from 'react-native-svg'

import CashIn from '../../../assets/icons/cash-in.svg'
import CashOut from '../../../assets/icons/cash-out.svg'
import Mastercard from '../../../assets/icons/mastercard.svg'
import Notification from '../../../assets/icons/notification.svg'
import Pay from '../../../assets/icons/pay.svg'
import Recharge from '../../../assets/icons/recharge.svg'
import Search from '../../../assets/icons/search.svg'
import Sus from '../../../assets/icons/sus.svg'
import Transfer from '../../../assets/icons/transfer.svg'
import Visa from '../../../assets/icons/visa.svg'
import Wallet from '../../../assets/icons/wallet.svg'

import { type Theme } from '~/styles/theme'

export enum IconEnum {
  SEARCH,
  NOTIFICATION,
  MASTERCARD,
  VISA,
  WALLET,
  TRANSFER,
  PAY,
  RECHARGE,
  SUS,
  CASH_IN,
  CASH_OUT,
}

const BaseIconLala = createText<Theme, SvgProps>(Svg)
export type IconProps = {
  icon: IconEnum
  size?: number
} & ComponentProps<typeof BaseIconLala>

export const Icon = ({
  icon,
  size = 20,
  color = '$defaultIconColor',
  ...rest
}: IconProps) => {
  const IconComponent = {
    [IconEnum.SEARCH]: Search,
    [IconEnum.NOTIFICATION]: Notification,
    [IconEnum.MASTERCARD]: Mastercard,
    [IconEnum.VISA]: Visa,
    [IconEnum.WALLET]: Wallet,
    [IconEnum.TRANSFER]: Transfer,
    [IconEnum.PAY]: Pay,
    [IconEnum.RECHARGE]: Recharge,
    [IconEnum.SUS]: Sus,
    [IconEnum.CASH_IN]: CashIn,
    [IconEnum.CASH_OUT]: CashOut,
  }[icon]
  const BaseIcon = createText<Theme, SvgProps>(IconComponent)

  return <BaseIcon color={color} height={size} width={size} {...rest} />
}
