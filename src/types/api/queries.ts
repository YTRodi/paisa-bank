import { type CardEntity } from '../entities'

export interface GetCardsResponse {
  success: boolean
  data: CardEntity[]
}
