import { createBox } from '@shopify/restyle'
import { type ComponentProps } from 'react'
import { Controller, type ControllerProps } from 'react-hook-form'
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from 'react-native'

import { Box } from '../Box'

import { useTheme } from '~/hooks'
import { type Theme } from '~/styles/theme'

export const TextInputBase = createBox<Theme, RNTextInputProps>(RNTextInput)

type TextInputProps = Omit<ControllerProps, 'render'> &
  ComponentProps<typeof TextInputBase>

export const TextInput = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: TextInputProps) => {
  const theme = useTheme()
  const controllerProps = {
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  }

  return (
    <Box>
      <Controller
        render={({ field: { value, onBlur, onChange } }) => {
          return (
            <TextInputBase
              backgroundColor="$mainForeground"
              borderRadius="sm"
              padding="md"
              placeholderTextColor={theme.colors.$inputPlaceholder}
              selectionColor={theme.colors.$brand}
              style={theme.textVariants.$input}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              {...rest}
            />
          )
        }}
        {...controllerProps}
      />
      {/* TODO: {hasError && <Text>{error}</Text>} */}
    </Box>
  )
}
