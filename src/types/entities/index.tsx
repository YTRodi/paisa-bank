import { type TransactionTypeEnum } from '../operations'

export interface CardEntity {
  id: number
  issuer: string
  name: string
  expDate: string
  lastDigits: number
  balance: string
  currency: string
}

export interface TransactionEntity {
  id: number
  title: string
  amount: string
  transactionType: TransactionTypeEnum
  date: string
}
