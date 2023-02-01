import { STRINGS } from '~/resources'
import { TransactionTypeEnum } from '~/types'

export const getTransactionBodyByTransactionType = (
  transactionType: TransactionTypeEnum
): string => {
  const body = {
    [TransactionTypeEnum.SUS]: STRINGS.TRANSACTION_CARD.SUS,
    [TransactionTypeEnum.CASH_IN]: STRINGS.TRANSACTION_CARD.CASH_IN,
    [TransactionTypeEnum.CASH_OUT]: STRINGS.TRANSACTION_CARD.CASH_OUT,
  }[transactionType]

  return body
}
