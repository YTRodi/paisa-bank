import { type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ShadowBox } from '../Box'
import { BaseButton } from '../Button'
import { Icon } from '../Icon'

import { useTheme } from '~/hooks'
import { getTabBarIconByRouteName } from '~/utils'

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const theme = useTheme()

  return (
    <ShadowBox
      backgroundColor="$mainBackground"
      borderTopEndRadius="lg"
      borderTopStartRadius="lg"
      flexDirection="row"
    >
      <SafeAreaView
        edges={['bottom']}
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: theme.colors.$tabBarBackground,
          borderTopStartRadius: theme.borderRadii.lg,
          borderTopEndRadius: theme.borderRadii.lg,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name
          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true })
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <BaseButton
              key={label}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              activeOpacity={0.7}
              alignItems="center"
              flex={1}
              paddingVertical="2xl"
              testID={options.tabBarTestID}
              onLongPress={onLongPress}
              onPress={onPress}
            >
              <Icon
                color={isFocused ? '$tabIsSelected' : '$tabIsNotSelected'}
                icon={getTabBarIconByRouteName(route.name)}
                size={24}
              />
            </BaseButton>
          )
        })}
      </SafeAreaView>
    </ShadowBox>
  )
}
