import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { type EventArg } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Alert } from 'react-native'

import { STRINGS } from '~/resources'
import { Contacts, Home, Login, Logout } from '~/screens'
import { useAuthStore } from '~/store'
import {
  type AuthenticatedBottomTabParamList,
  type RootStackParamList,
} from '~/types'

const { LOGOUT } = STRINGS
const { TITLE, MESSAGE, FIRST_ACTION, SECOND_ACTION } = LOGOUT.ALERT

const RootStack = createNativeStackNavigator<RootStackParamList>()
export const RootStackNavigator = () => {
  const { isLoggedIn } = useAuthStore()

  return (
    <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isLoggedIn ? (
        <RootStack.Group>
          <RootStack.Screen component={Login} name="Login" />
        </RootStack.Group>
      ) : (
        <RootStack.Screen
          component={AuthenticatedBottomTabNavigator}
          name="AuthenticatedBottomTabNavigator"
        />
      )}
    </RootStack.Navigator>
  )
}

const AuthenticatedBottomTab =
  createBottomTabNavigator<AuthenticatedBottomTabParamList>()
const AuthenticatedBottomTabNavigator = () => {
  const { logout } = useAuthStore()

  const onLogoutTabPress = (ev: EventArg<'tabPress', true, undefined>) => {
    ev.preventDefault()
    Alert.alert(
      TITLE,
      MESSAGE,
      [
        { text: FIRST_ACTION, style: 'destructive', onPress: logout },
        { text: SECOND_ACTION, style: 'cancel' },
      ],
      { cancelable: true }
    )
  }

  return (
    <AuthenticatedBottomTab.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticatedBottomTab.Screen component={Home} name="Home" />
      <AuthenticatedBottomTab.Screen component={Contacts} name="Contacts" />
      <AuthenticatedBottomTab.Screen
        component={Logout}
        listeners={{
          tabPress: onLogoutTabPress,
        }}
        name="Logout"
      />
    </AuthenticatedBottomTab.Navigator>
  )
}
