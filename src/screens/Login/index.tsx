import { yupResolver } from '@hookform/resolvers/yup'
import { Audio } from 'expo-av'
import { MotiView } from 'moti'
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
import { useFadeIn, useLoginMutation } from '~/hooks'
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
  const { fadeInState } = useFadeIn()
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LOGIN_SCHEMA),
  })

  const authStore = useAuthStore()
  const loginMutation = useLoginMutation()

  const onSubmit = async ({ email, password, remindMe }: LoginFormValues) => {
    if (!isValid) {
      return
    }

    const { sound } = await Audio.Sound.createAsync(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('../../../assets/sounds/login.mp3')
    )
    await sound.playAsync()

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (response) => {
          authStore.login({
            userName: response.data.name,
            shouldPersist: remindMe,
          })
        },
      }
    )
  }

  return (
    <MotiView state={fadeInState} style={{ flex: 1 }}>
      <Box flex={1} paddingHorizontal="md">
        <Box flex={1} justifyContent="center">
          <LoginHeader />
          <LoginFormFields control={control} errors={errors} />
        </Box>
        <LoginFormFooter
          isLoading={loginMutation.isLoading}
          onSubmit={handleSubmit(onSubmit)}
          // onSubmit={async () => {
          //   const { sound } = await Audio.Sound.createAsync(
          //     require('../../../assets/sounds/login.mp3')
          //   )
          //   await sound.playAsync()

          //   handleSubmit(onSubmit)
          // }}
        />
      </Box>
    </MotiView>
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

const LoginFormFooter = ({
  isLoading,
  onSubmit,
}: {
  isLoading: boolean
  onSubmit: () => void
}) => {
  return (
    <Box>
      <LoginSignUpSection marginBottom="2xl" />
      <Button isLoading={isLoading} label={LOGIN_BUTTON} onPress={onSubmit} />
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
