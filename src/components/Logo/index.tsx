import { createBox } from '@shopify/restyle'
import { type ComponentProps } from 'react'
import { type SvgProps } from 'react-native-svg'

import SvgLogo from '../../../assets/logo.svg'

import { type Theme } from '~/styles/theme'

export const LogoBase = createBox<Theme, SvgProps>(SvgLogo)

type LogoProps = ComponentProps<typeof LogoBase>

export const Logo = (props: LogoProps) => {
  return <LogoBase height={48} width={48} {...props} />
}
