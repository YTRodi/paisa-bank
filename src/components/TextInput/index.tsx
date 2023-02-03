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
import { BaseButton } from '../Button'
import { CheckboxBase } from '../Checkbox'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { useTheme, useToggle } from '~/hooks'
import { STRINGS } from '~/resources'
import { type Theme } from '~/styles/theme'
import { type IconEnum } from '~/types'

const { HINTS } = STRINGS.TEXT_INPUT

export const RNTextInputBase = createBox<Theme, RNTextInputProps>(RNTextInput)
type RNTextInputBaseProps = ComponentProps<typeof RNTextInputBase>

type TextInputBaseProps = RNTextInputBaseProps & {
  hasError?: boolean
  error?: string
  leftIcon?: IconEnum
  rightIcon?: IconEnum
  onPressLeftIcon?: () => void
  onPressRightIcon?: () => void
}

export const TextInputBase = ({
  hasError,
  error,
  leftIcon,
  rightIcon,
  onPressLeftIcon,
  onPressRightIcon,

  autoCapitalize = 'none',
  secureTextEntry = false,
  ...rest
}: TextInputBaseProps) => {
  const theme = useTheme()
  const [showInputText, toggle] = useToggle(secureTextEntry)

  return (
    <Box>
      <ShadowBox
        alignItems="center"
        backgroundColor="$mainBackground"
        borderRadius="sm"
        flexDirection="row"
        paddingHorizontal="md"
      >
        {leftIcon ? (
          <BaseButton
            activeOpacity={0.7}
            disabled={!onPressLeftIcon}
            onPress={onPressLeftIcon}
          >
            <Icon color="$inputPlaceholder" icon={leftIcon} size={14} />
          </BaseButton>
        ) : null}
        <RNTextInputBase
          autoCapitalize={autoCapitalize}
          flex={1}
          paddingLeft={leftIcon ? 'md' : '0'}
          paddingRight={rightIcon ? 'md' : '0'}
          paddingVertical="md"
          placeholderTextColor={theme.colors.$inputPlaceholder}
          secureTextEntry={showInputText}
          selectionColor={theme.colors.blueLight}
          style={theme.textVariants.$body2}
          {...rest}
        />
        {rightIcon ? (
          <BaseButton
            activeOpacity={0.7}
            disabled={!onPressRightIcon}
            onPress={onPressRightIcon}
          >
            <Icon color="$inputPlaceholder" icon={rightIcon} size={14} />
          </BaseButton>
        ) : null}
      </ShadowBox>
      {hasError ? (
        <Text color="$inputError" marginTop="xs" variant="$small">
          {error}
        </Text>
      ) : null}
      {secureTextEntry ? (
        <Box alignItems="center" flexDirection="row" marginTop="md">
          <CheckboxBase value={!showInputText} onChange={toggle} />
          <Text color="$inputHint" marginLeft="xs">
            {HINTS.SHOW_PASSWORD}
          </Text>
        </Box>
      ) : null}
    </Box>
  )
}

type TextInputProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  'render'
> &
  TextInputBaseProps

export const TextInput = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,

  ...rest
}: TextInputProps<T>) => {
  const controllerProps = {
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  }

  return (
    <Controller
      render={({ field: { value, onBlur, onChange } }) => {
        return (
          <TextInputBase
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            {...rest}
          />
        )
      }}
      {...controllerProps}
    />
  )
}
