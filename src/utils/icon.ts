import {
  type AuthenticatedBottomTabParamList,
  IconEnum,
  TransactionTypeEnum,
} from '~/types'

export const getIconByTransactionType = (
  transactionType: TransactionTypeEnum
): IconEnum => {
  const icon: IconEnum = {
    [TransactionTypeEnum.SUS]: IconEnum.SUS,
    [TransactionTypeEnum.CASH_IN]: IconEnum.CASH_IN,
    [TransactionTypeEnum.CASH_OUT]: IconEnum.CASH_OUT,
  }[transactionType]

  return icon
}

export const getTabBarIconByRouteName = (
  routeName: keyof AuthenticatedBottomTabParamList
): IconEnum => {
  const icon = {
    Home: IconEnum.HOME,
    Contacts: IconEnum.CONTACTS,
    Logout: IconEnum.LOGOUT,
  }[routeName]

  return icon
}
