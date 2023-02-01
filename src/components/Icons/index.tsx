import { createBox } from '@shopify/restyle'
import { type ComponentProps } from 'react'
import { type SvgProps } from 'react-native-svg'

import Mastercard from '../../../assets/icons/mastercard.svg'
import Notification from '../../../assets/icons/notification.svg'
import Search from '../../../assets/icons/search.svg'
import Visa from '../../../assets/icons/visa.svg'

import { type Theme } from '~/styles/theme'

interface IconProps {
  size?: number
}

const SearchIconBase = createBox<Theme, SvgProps>(Search)
export const SearchIcon = ({
  size = 16,
  ...rest
}: IconProps & ComponentProps<typeof SearchIconBase>) => {
  return <SearchIconBase height={size} width={size} {...rest} />
}

const NotificationIconBase = createBox<Theme, SvgProps>(Notification)
export const NotificationIcon = ({
  size = 16,
  ...rest
}: IconProps & ComponentProps<typeof SearchIconBase>) => {
  return <NotificationIconBase height={size} width={size} {...rest} />
}

const MastercardIconBase = createBox<Theme, SvgProps>(Mastercard)
export const MastercardIcon = ({
  size = 16,
  ...rest
}: IconProps & ComponentProps<typeof SearchIconBase>) => {
  return <MastercardIconBase height={size} width={size} {...rest} />
}

const VisaIconBase = createBox<Theme, SvgProps>(Visa)
export const VisaIcon = ({
  size = 16,
  ...rest
}: IconProps & ComponentProps<typeof SearchIconBase>) => {
  return <VisaIconBase height={size} width={size} {...rest} />
}
