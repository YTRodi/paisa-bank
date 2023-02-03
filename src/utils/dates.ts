import { format, parseISO } from 'date-fns'

import { DATES_FORMATS } from '~/constants'

export const formatExpiryDate = (expiryDate: string): string => {
  return format(parseISO(expiryDate), DATES_FORMATS[0])
}
