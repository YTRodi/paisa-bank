import { type IconEnum } from './icon'

import { type ColorProps } from '~/styles/theme'

export interface ServiceType {
  name: string
  icon: IconEnum
  color: ColorProps['color']
}
