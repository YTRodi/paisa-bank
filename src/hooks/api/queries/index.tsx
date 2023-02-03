import { useQuery } from '@tanstack/react-query'

import { getCards } from '~/api'
import { cardKeys } from '~/constants'

export const useGetCardsQuery = () => {
  return useQuery({
    queryKey: cardKeys.lists(),
    queryFn: getCards,
    suspense: true,
  })
}
