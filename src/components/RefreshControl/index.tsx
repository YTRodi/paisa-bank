import {
  RefreshControl as RNARefreshControl,
  type RefreshControlProps,
} from 'react-native'

import { useTheme } from '~/hooks'

export const RefreshControl = (props: RefreshControlProps) => {
  const theme = useTheme()

  return (
    <RNARefreshControl
      colors={[theme.colors.blueLight, theme.colors.bluePrimary]}
      progressBackgroundColor={theme.colors.$mainBackground}
      tintColor={theme.colors.blueLight}
      titleColor={theme.colors.bluePrimary}
      {...props}
    />
  )
}
