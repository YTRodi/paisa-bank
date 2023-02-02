import { yupResolver } from '@hookform/resolvers/yup'
import { type Control, useForm, type FormState } from 'react-hook-form'

import {
  Box,
  type BoxProps,
  Logo,
  Text,
  FormElement,
  Button,
  TextInput,
  Checkbox,
  ScreenLayout,
} from '~/components'
import { STRINGS } from '~/resources'
import { LOGIN_SCHEMA } from '~/schemas'
import { useAuthStore } from '~/store'
import { type LoginScreenProps } from '~/types'

export interface LoginFormValues {
  email: string
  password: string
  remindMe: boolean
}

type Props = LoginScreenProps

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

export const Login = (props: Props) => {
  return (
    <ScreenLayout>
      <LoginForm />
    </ScreenLayout>
  )
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LOGIN_SCHEMA),
  })
  const { login } = useAuthStore()

  const onSubmit = (data: LoginFormValues) => {
    if (!isValid) {
      return
    }

    login('<real-token>', data.remindMe)
  }

  return (
    <Box flex={1} paddingHorizontal="md">
      <Box flex={1} justifyContent="center">
        <LoginHeader />
        <LoginFormFields control={control} errors={errors} />
      </Box>
      <LoginFormFooter onSubmit={handleSubmit(onSubmit)} />
    </Box>
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

const LoginFormFields = ({
  errors,
  control,
}: {
  errors: FormState<LoginFormValues>['errors']
  control: Control<LoginFormValues, any>
}) => {
  return (
    <Box>
      <FormElement label={EMAIL_INPUT_LABEL} marginBottom="xl">
        <TextInput
          control={control}
          error={errors.email?.message}
          hasError={Boolean(errors.email)}
          keyboardType="email-address"
          name="email"
          placeholder={EMAIL_INPUT_PLACEHOLDER}
        />
      </FormElement>
      <FormElement label={PASSWORD_INPUT_LABEL} marginBottom="md">
        <TextInput
          secureTextEntry
          control={control}
          error={errors.password?.message}
          hasError={Boolean(errors.password)}
          name="password"
          placeholder={PASSWORD_INPUT_PLACEHOLDER}
        />
      </FormElement>
      <Box flexDirection="row">
        <Checkbox control={control} name="remindMe" />
        <Text color="$inputHint" marginLeft="xs">
          {REMIND_ME}
        </Text>
      </Box>
    </Box>
  )
}

const LoginFormFooter = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <Box>
      <LoginSignUpSection marginBottom="2xl" />
      <Button label={LOGIN_BUTTON} onPress={onSubmit} />
    </Box>
  )
}

const LoginSignUpSection = ({ ...props }: BoxProps) => {
  return (
    <Box alignItems="center" {...props}>
      <Text color="$loginSignUpText" variant="$body1">
        {DONT_HAVE_AN_ACCOUNT} <Text color="$brand">{REGISTER_HERE}</Text>
      </Text>
    </Box>
  )
}
