import { type TransactionEntity, type CardEntity } from '../entities'

export interface GetCardsResponse {
  success: boolean
  data: CardEntity[]
}

export interface GetTransactionsResponse {
  success: boolean
  data: TransactionEntity[]
}
