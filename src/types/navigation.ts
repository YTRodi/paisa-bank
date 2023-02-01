/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { type CompositeScreenProps } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Login: undefined
  AuthenticatedBottomTabNavigator: undefined
}

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>

export type AuthenticatedBottomTabParamList = {
  Home: undefined
  Contacts: undefined
  Logout: undefined
}

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<AuthenticatedBottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>

export type ContactsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<AuthenticatedBottomTabParamList, 'Contacts'>,
  NativeStackScreenProps<RootStackParamList>
>

export type LogoutScreenProps = CompositeScreenProps<
  BottomTabScreenProps<AuthenticatedBottomTabParamList, 'Logout'>,
  NativeStackScreenProps<RootStackParamList>
>
