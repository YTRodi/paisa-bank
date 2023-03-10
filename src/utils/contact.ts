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

/**
 * Returns an array of contacts sorted by name and lastName in desc order
 * @param contacts Array of contacts
 * @returns Contacts added this month
 */
export const sortRecentContacts = (
  contacts: ContactEntity[]
): ContactEntity[] => {
  return contacts.sort((a, b) => {
    if (a.name < b.name && a.lastName < b.lastName) {
      return -1
    }

    if (a.name > b.name && a.lastName < b.lastName) {
      return 1
    }

    return 0
  })
}

/**
 * Returns a filtered array by query
 * @param contacts Array of contacts
 * @param query A string input to compare
 * @returns Filtered contacts
 */
export const getContactsByQuery = (
  contacts: ContactEntity[],
  query: string
): ContactEntity[] => {
  return contacts.filter((contact) => {
    const lowerCaseDebounceQuery = query.toLowerCase()

    return (
      contact.name.toLowerCase().includes(lowerCaseDebounceQuery) ||
      contact.lastName.toLowerCase().includes(lowerCaseDebounceQuery) ||
      contact.phone.toLowerCase().includes(lowerCaseDebounceQuery)
    )
  })
}
