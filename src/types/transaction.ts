import { type TransactionTypeEnum } from './operations'

export interface TransactionType {
  id: number
  title: string
  amount: string
  transactionType: TransactionTypeEnum
  date: string
}
