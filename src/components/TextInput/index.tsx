import { createBox } from '@shopify/restyle'
import { type ComponentProps } from 'react'
import {
  Controller,
  type FieldValues,
  type ControllerProps,
} from 'react-hook-form'
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from 'react-native'

import { ShadowBox } from '../Box'
import { Text } from '../Text'

import { useTheme } from '~/hooks'
import { type Theme } from '~/styles/theme'

export const TextInputBase = createBox<Theme, RNTextInputProps>(RNTextInput)

type TextInputProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  'render'
> &
  ComponentProps<typeof TextInputBase> & {
    hasError: boolean
    error?: string
  }

export const TextInput = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,

  hasError,
  error,

  autoCapitalize = 'none',
  secureTextEntry,
  ...rest
}: TextInputProps<T>) => {
  const theme = useTheme()
  const controllerProps = {
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  }

  return (
    <ShadowBox>
      <Controller
        render={({ field: { value, onBlur, onChange } }) => {
          return (
            <TextInputBase
              autoCapitalize={autoCapitalize}
              backgroundColor="$mainForeground"
              borderRadius="sm"
              padding="md"
              placeholderTextColor={theme.colors.$inputPlaceholder}
              secureTextEntry={secureTextEntry}
              selectionColor={theme.colors.$brand}
              style={theme.textVariants.$body2}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              {...rest}
            />
          )
        }}
        {...controllerProps}
      />
      {hasError ? (
        <Text color="$inputError" marginTop="xs" variant="$small">
          {error}
        </Text>
      ) : null}
    </ShadowBox>
  )
}
