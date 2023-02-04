import {
  useQueryClient,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query'
import { Skeleton } from 'moti/skeleton'
import { Suspense, useEffect, useState } from 'react'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'

import {
  BaseButton,
  Box,
  Card,
  ContactCard,
  Divider,
  type DividerProps,
  Icon,
  ScreenLayout,
  ScrollBox,
  Text,
  TextInputBase,
  Fallback,
  RefreshControl,
} from '~/components'
import { contactKeys } from '~/constants'
import { useDebounce, useGetContacts, useTheme } from '~/hooks'
import { STRINGS } from '~/resources'
import {
  type ContactType,
  IconEnum,
  type ContactsScreenProps,
  type ContactEntity,
} from '~/types'
import { getContactsByQuery, getRecentContacts } from '~/utils'

const { CONTACTS, SKELETON } = STRINGS
const {
  TITLE,
  SEARCH_INPUT,
  DIVIDER_BY,
  NO_CONTACTS_BY_QUERY_TITLE,
  NO_CONTACTS_BY_QUERY_BODY,
  NO_CONTACTS_TITLE,
  NO_CONTACTS_BODY,
  NO_CONTACTS_ACTION_LABEL,
  NO_RECENT_CONTACTS,
} = CONTACTS

type Props = ContactsScreenProps

export const Contacts = (props: Props) => {
  const theme = useTheme()
  const queryClient = useQueryClient()
  const { reset } = useQueryErrorResetBoundary()
  const [isRefreshing, setIsRefreshing] = useState(false)

  return (
    <ScreenLayout>
      <ScrollBox
        contentContainerStyle={{ paddingHorizontal: theme.spacing.md }}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={async () => {
              setIsRefreshing(true)
              await queryClient.invalidateQueries({
                queryKey: contactKeys.lists(),
                exact: true,
              })
              setIsRefreshing(false)
            }}
          />
        }
      >
        <ContactsHeader {...props} />
        <ErrorBoundary FallbackComponent={ContactsFallback} onReset={reset}>
          <Suspense fallback={<ContactsSkeleton />}>
            <ContactsSection />
          </Suspense>
        </ErrorBoundary>
      </ScrollBox>
    </ScreenLayout>
  )
}

const ContactsHeader = ({ navigation }: Props) => {
  return (
    <BaseButton activeOpacity={0.7} onPress={navigation.goBack}>
      <Box alignItems="center" flexDirection="row" justifyContent="flex-start">
        <Icon icon={IconEnum.LEFT_ARROW} size={16} />
        <Text marginLeft="xl" variant="$heading">
          {TITLE}
        </Text>
      </Box>
    </BaseButton>
  )
}

const ContactsSection = () => {
  const getContactsQuery = useGetContacts()
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query)
  const FILTERED_CONTACTS_INITIAL_VALUE = getContactsQuery.data?.data ?? []
  const [filteredContacts, setFilteredContacts] = useState(
    FILTERED_CONTACTS_INITIAL_VALUE
  )

  useEffect(() => {
    if (!debouncedQuery) {
      setFilteredContacts(FILTERED_CONTACTS_INITIAL_VALUE)
      return
    }

    setFilteredContacts(
      getContactsByQuery(FILTERED_CONTACTS_INITIAL_VALUE, debouncedQuery)
    )
  }, [debouncedQuery])

  const contacts = filteredContacts
  const recentContacts = getRecentContacts(contacts)

  return (
    <Box marginTop="3xl">
      <TextInputBase
        leftIcon={IconEnum.SEARCH}
        placeholder={SEARCH_INPUT.PLACEHOLDER}
        value={query}
        onChangeText={setQuery}
      />
      <Box>
        {contacts.length === 0 ? (
          <Box marginTop="xl">
            <EmptyCard debouncedQuery={debouncedQuery} />
          </Box>
        ) : (
          <>
            <ContactsDivider label={DIVIDER_BY.RECENTS} />
            <Box marginTop="xl">
              {recentContacts.length === 0 ? (
                <Card body={NO_RECENT_CONTACTS} />
              ) : (
                <ContactsList contacts={recentContacts} />
              )}
            </Box>

            <ContactsDivider label={DIVIDER_BY.ALL} />
            <ContactsList contacts={contacts} />
          </>
        )}
      </Box>
    </Box>
  )
}

const EmptyCard = ({ debouncedQuery }: { debouncedQuery: string }) => {
  if (debouncedQuery) {
    return (
      <Card
        body={NO_CONTACTS_BY_QUERY_BODY}
        title={NO_CONTACTS_BY_QUERY_TITLE}
      />
    )
  }

  return (
    <Card
      action={{ label: NO_CONTACTS_ACTION_LABEL }}
      body={NO_CONTACTS_BODY}
      title={NO_CONTACTS_TITLE}
    />
  )
}

const ContactsList = ({ contacts }: { contacts: ContactEntity[] }) => {
  return (
    <Box>
      {contacts.map((contact) => {
        return (
          <Box key={contact.id}>
            <Box marginTop="xl" />
            <ContactCard {...contact} />
          </Box>
        )
      })}
    </Box>
  )
}

const ContactsDivider = (props: DividerProps) => {
  return (
    <Box marginTop="3xl">
      <Divider {...props} />
    </Box>
  )
}

const ContactsFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box marginTop="3xl">
      <Fallback
        error={error}
        resetErrorBoundary={resetErrorBoundary}
        title={STRINGS.CONTACTS.FALLBACK.TITLE}
      />
    </Box>
  )
}

const CONTACTS_MOCK = [
  {
    id: 5,
    name: 'Belen',
    lastName: 'Salvador',
    phone: '+541133556535',
    addedDate: '2023-01-09',
  },
  {
    id: 6,
    name: 'Jorge',
    lastName: 'Cruz',
    phone: '+541133556536',
    addedDate: '2023-01-10',
  },
] satisfies ContactType[]

const ContactsSkeleton = () => {
  return (
    <Skeleton.Group show>
      <Box marginTop="3xl">
        <TextInputBase />
      </Box>
      <Box>
        <ContactsDivider label={SKELETON} />
        <ContactsList contacts={CONTACTS_MOCK} />
      </Box>
      <Box>
        <ContactsDivider label={SKELETON} />
        <ContactsList contacts={CONTACTS_MOCK} />
      </Box>
    </Skeleton.Group>
  )
}
