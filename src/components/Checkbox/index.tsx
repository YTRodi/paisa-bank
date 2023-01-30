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

export const CheckboxBase = createBox<Theme, ExpoCheckboxProps>(ExpoCheckbox)

type CheckboxProps<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> &
  ComponentProps<typeof CheckboxBase>

export const Checkbox = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: CheckboxProps<T>) => {
  const theme = useTheme()
  const controllerProps = {
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  }

  return (
    <Controller
      render={({ field: { value, onChange } }) => {
        return (
          <ExpoCheckbox
            style={{
              backgroundColor: theme.colors.$checkboxBackground,
              borderWidth: 0,
              borderRadius: theme.borderRadii.xxs,
            }}
            value={value}
            onValueChange={onChange}
            {...rest}
          />
        )
      }}
      {...controllerProps}
    />
  )
}
