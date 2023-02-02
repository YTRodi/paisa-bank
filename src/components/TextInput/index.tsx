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

import { Box, ShadowBox } from '../Box'
import { CheckboxBase } from '../Checkbox'
import { Text } from '../Text'

import { useTheme, useToggle } from '~/hooks'
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
  secureTextEntry = false,
  ...rest
}: TextInputProps<T>) => {
  const theme = useTheme()
  const [showInputText, toggle] = useToggle(secureTextEntry)
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
              secureTextEntry={showInputText}
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
      {secureTextEntry ? (
        <Box flexDirection="row" marginTop="md">
          <CheckboxBase value={!showInputText} onChange={toggle} />
          <Text marginLeft="xs">Mostrar contraseña</Text>
        </Box>
      ) : null}
    </ShadowBox>
  )
}
