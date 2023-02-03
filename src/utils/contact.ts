import { parseISO } from 'date-fns'

import { type ContactEntity } from '~/types'

/**
 * Returns an array of contacts that were added this month
 * @param contacts Array of contacts
 * @returns Contacts added this month
 */
export const getRecentContacts = (
  contacts: ContactEntity[]
): ContactEntity[] => {
  return contacts.filter(({ addedDate }) => {
    const parsedAddedDate = parseISO(addedDate)
    const currentMonth = new Date().getMonth()

    return parsedAddedDate.getMonth() === currentMonth
  })
}
