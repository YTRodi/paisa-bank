import RNToastMessage, {
  BaseToast,
  ErrorToast,
  InfoToast,
  type ToastProps,
} from 'react-native-toast-message'

import { useTheme } from '~/hooks'

// Override import
export { RNToastMessage as Toast }

export const CustomToast = (props: ToastProps) => {
  const theme = useTheme()
  const commonToastConfigParams = {
    text2NumberOfLines: 2,
    text1Style: {
      ...theme.textVariants.$body1,
      color: theme.colors.$cardTitle,
    },
    text2Style: {
      ...theme.textVariants.$small,
      color: theme.colors.$cardBody,
    },
  }
  const commonTouchableContainerPropStyle = {
    width: '90%',
    borderLeftWidth: theme.spacing.xs,
    marginTop: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadii.xs,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 16,

    backgroundColor: theme.colors.$mainBackground,
    borderLeftColor: theme.colors.black,
  }

  return (
    <RNToastMessage
      config={{
        success: ({ text1 = 'Success', ...rest }) => {
          return (
            <BaseToast
              text1={text1}
              {...rest}
              {...commonToastConfigParams}
              touchableContainerProps={{
                style: {
                  ...commonTouchableContainerPropStyle,
                  backgroundColor: theme.colors.greenLight,
                  borderLeftColor: theme.colors.greenPrimary,
                },
              }}
            />
          )
        },
        error: ({ text1 = 'Error', ...rest }) => {
          return (
            <ErrorToast
              text1={text1}
              {...rest}
              {...commonToastConfigParams}
              text1Style={{
                ...commonToastConfigParams.text1Style,
                color: theme.colors.black,
              }}
              text2Style={{
                ...commonToastConfigParams.text2Style,
                color: theme.colors.black,
              }}
              touchableContainerProps={{
                style: {
                  ...commonTouchableContainerPropStyle,
                  backgroundColor: theme.colors.redLight,
                  borderLeftColor: theme.colors.redPrimary,
                },
              }}
            />
          )
        },
        info: ({ text1 = 'Info', ...rest }) => {
          return (
            <InfoToast
              text1={text1}
              {...rest}
              {...commonToastConfigParams}
              text1Style={{
                ...commonToastConfigParams.text1Style,
                color: theme.colors.black,
              }}
              text2Style={{
                ...commonToastConfigParams.text2Style,
                color: theme.colors.black,
              }}
              touchableContainerProps={{
                style: {
                  ...commonTouchableContainerPropStyle,
                  backgroundColor: theme.colors.lightblueLight,
                  borderLeftColor: theme.colors.lightbluePrimary,
                },
              }}
            />
          )
        },
      }}
      {...props}
    />
  )
}
