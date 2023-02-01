import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Contacts, Home, Login } from '~/screens'
import { useAuthStore } from '~/store'
import {
  type AuthenticatedBottomTabParamList,
  type RootStackParamList,
} from '~/types'

const RootStack = createNativeStackNavigator<RootStackParamList>()
export const RootStackNavigator = () => {
  const { isLoggedIn } = useAuthStore()

  return (
    <RootStack.Navigator initialRouteName="Login">
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
  return (
    <AuthenticatedBottomTab.Navigator>
      <AuthenticatedBottomTab.Screen component={Home} name="Home" />
      <AuthenticatedBottomTab.Screen component={Contacts} name="Contacts" />
    </AuthenticatedBottomTab.Navigator>
  )
}
