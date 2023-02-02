import { createBox } from '@shopify/restyle'
import ExpoCheckbox, {
  type CheckboxProps as ExpoCheckboxProps,
} from 'expo-checkbox'
import { type ComponentProps } from 'react'
import {
  Controller,
  type ControllerProps,
  type FieldValues,
} from 'react-hook-form'

import { useTheme } from '~/hooks'
import { type Theme } from '~/styles/theme'

export const ExpoCheckboxBase = createBox<Theme, ExpoCheckboxProps>(
  ExpoCheckbox
)
type ExpoCheckboxBaseProps = ComponentProps<typeof ExpoCheckboxBase>

export const CheckboxBase = ({
  value,
  onChange,
  ...rest
}: ExpoCheckboxBaseProps) => {
  const theme = useTheme()

  return (
    <ExpoCheckboxBase
      backgroundColor="$checkboxBackground"
      borderRadius="xxs"
      borderWidth={0}
      color={value ? theme.colors.$checkboxChecked : undefined}
      value={value}
      onValueChange={onChange}
      {...rest}
    />
  )
}

type CheckboxProps<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> &
  ExpoCheckboxBaseProps

export const Checkbox = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: CheckboxProps<T>) => {
  const controllerProps = {
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  }

  return (
    <Controller
      render={({ field }) => {
        const checkboxProps = {
          value: field.value,
          onChange: field.onChange,
        }

        return <CheckboxBase {...checkboxProps} />
      }}
      {...controllerProps}
    />
  )
}
