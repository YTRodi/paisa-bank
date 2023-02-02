import {
  BaseButton,
  Box,
  ContactCard,
  Icon,
  ScreenLayout,
  ScrollBox,
  Text,
  TextInputBase,
} from '~/components'
import { useTheme } from '~/hooks'
import { STRINGS } from '~/resources'
import { type ContactType, IconEnum, type ContactsScreenProps } from '~/types'

const { TITLE, SEARCH_INPUT, DIVIDER_BY } = STRINGS.CONTACTS
const RECENT_CONTACTS_MOCK = [
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
const ALL_CONTACTS_MOCK = [
  {
    id: 1,
    name: 'Ronaldo',
    lastName: 'Martins',
    phone: '+541133556531',
    addedDate: '2022-12-07',
  },
  {
    id: 2,
    name: 'Lidia',
    lastName: 'Roldan',
    phone: '+541133556532',
    addedDate: '2022-12-08',
  },
  {
    id: 3,
    name: 'Carlos',
    lastName: 'Gutierrez',
    phone: '+541133556533',
    addedDate: '2022-12-09',
  },
  {
    id: 4,
    name: 'Josefina Miranda',
    lastName: 'Torres',
    phone: '+541133556534',
    addedDate: '2022-12-10',
  },
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

type Props = ContactsScreenProps

export const Contacts = (props: Props) => {
  const theme = useTheme()
  const commonSpacing = theme.spacing.md

  return (
    <ScreenLayout>
      <ScrollBox contentContainerStyle={{ paddingHorizontal: commonSpacing }}>
        <ContactsHeader {...props} />

        <Box marginTop="3xl">
          <TextInputBase
            leftIcon={IconEnum.SEARCH}
            placeholder={SEARCH_INPUT.PLACEHOLDER}
          />
        </Box>

        <ContactsDivider
          commonSpacing={commonSpacing}
          label={DIVIDER_BY.RECENTS}
        />
        {RECENT_CONTACTS_MOCK.map((contact) => {
          return <ContactCard key={contact.id} marginTop="xl" {...contact} />
        })}

        <ContactsDivider commonSpacing={commonSpacing} label={DIVIDER_BY.ALL} />
        {ALL_CONTACTS_MOCK.map((contact) => {
          return <ContactCard key={contact.id} marginTop="xl" {...contact} />
        })}
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

const ContactsDivider = ({
  commonSpacing,
  label,
}: {
  commonSpacing: number
  label: string
}) => {
  return (
    <Box marginTop="3xl" style={{ marginHorizontal: -commonSpacing }}>
      <Text
        color="$divider"
        style={{ marginLeft: commonSpacing }}
        variant="$body1"
      >
        {label}
      </Text>
      <Box borderColor="$divider" borderWidth={0.5} marginTop="md" />
    </Box>
  )
}
