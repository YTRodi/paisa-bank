import { type ColorCombination, TransactionTypeEnum } from '~/types'

export const getColorCombinationByTransactionType = (
  transactionType: TransactionTypeEnum
): ColorCombination => {
  const colorCombination: ColorCombination = {
    [TransactionTypeEnum.SUS]: {
      backgroundColor: 'purpleLight',
      foregroundColor: 'purplePrimary',
    },
    [TransactionTypeEnum.CASH_IN]: {
      backgroundColor: 'greenLight',
      foregroundColor: 'greenPrimary',
    },
    [TransactionTypeEnum.CASH_OUT]: {
      backgroundColor: 'orangeLight',
      foregroundColor: 'orangePrimary',
    },
  }[transactionType] as ColorCombination

  return colorCombination
}
