import { SafeAreaView, TextInput } from 'react-native'

import {
  Box,
  type BoxProps,
  Logo,
  Text,
  FormElement,
  Button,
} from '~/components'
import { useTheme } from '~/hooks'
import { STRINGS } from '~/resources'

const {
  BRAND_NAME,
  BRAND_TEXT,
  EMAIL_INPUT_LABEL,
  EMAIL_INPUT_PLACEHOLDER,
  PASSWORD_INPUT_LABEL,
  PASSWORD_INPUT_PLACEHOLDER,
  REMIND_ME,
  DONT_HAVE_AN_ACCOUNT,
  REGISTER_HERE,
  LOGIN_BUTTON,
} = STRINGS.LOGIN

export const Login = () => {
  const theme = useTheme()

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.$mainBackground }}
    >
      {/* TODO: create <Form /> */}
      <Box flex={1} paddingHorizontal="md">
        <Box flex={1} justifyContent="center">
          <LoginHeader />
          <LoginFormFields />
        </Box>
        <LoginFooter />
      </Box>
    </SafeAreaView>
  )
}

const LoginHeader = () => {
  return (
    <Box alignItems="center" marginBottom="5xl">
      <Logo marginBottom="sm" />
      <Text marginBottom="sm" variant="$brand">
        {BRAND_NAME}
      </Text>
      <Text variant="$brandText">{BRAND_TEXT}</Text>
    </Box>
  )
}

const LoginFormFields = () => {
  return (
    <Box>
      <FormElement label={EMAIL_INPUT_LABEL} marginBottom="xl">
        {/* TODO: create custom <TextInput /> */}
        <TextInput
          placeholder={EMAIL_INPUT_PLACEHOLDER}
          style={{
            backgroundColor: 'white',
            // TODO: boxShadow, placeholder, placeholderColor
          }}
        />
      </FormElement>
      <FormElement label={PASSWORD_INPUT_LABEL} marginBottom="md">
        <TextInput
          placeholder={PASSWORD_INPUT_PLACEHOLDER}
          style={{ backgroundColor: 'white' }}
        />
      </FormElement>
      <Box flexDirection="row">
        {/* TODO: implement checkbox */}
        <Text color="$remindMeText">[_]</Text>
        <Text color="$remindMeText" marginLeft="xs">
          {REMIND_ME}
        </Text>
      </Box>
    </Box>
  )
}

const LoginFooter = () => {
  return (
    <Box>
      <LoginSignUpSection marginBottom="2xl" />
      <Button label={LOGIN_BUTTON} onPress={() => {}} />
    </Box>
  )
}

const LoginSignUpSection = ({ ...props }: BoxProps) => {
  return (
    <Box alignItems="center" {...props}>
      <Text color="$loginSignUpText">
        {DONT_HAVE_AN_ACCOUNT} <Text color="$brand">{REGISTER_HERE}</Text>
      </Text>
    </Box>
  )
}

/**
 * - RHF
 * - Zod
 * - RHF SmartComponents
 */
