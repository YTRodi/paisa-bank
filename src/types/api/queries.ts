import {
  type TransactionEntity,
  type CardEntity,
  type ContactEntity,
} from '../entities'

export interface GetCardsResponse {
  success: boolean
  data: CardEntity[]
}

export interface GetTransactionsResponse {
  success: boolean
  data: TransactionEntity[]
}

export interface GetContactsResponse {
  success: boolean
  data: ContactEntity[]
}
