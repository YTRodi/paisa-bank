import { Box, type BoxProps, ShadowBox } from '../Box'
import { Button, type ButtonProps } from '../Button'
import { Text } from '../Text'

export type CardProps = {
  title?: string
  body?: string
  action?: Pick<ButtonProps, 'label' | 'onPress'>
} & BoxProps

export const Card = ({ title, body, action, ...rest }: CardProps) => {
  return (
    <ShadowBox
      alignItems="center"
      backgroundColor="$mainBackground"
      borderRadius="md"
      padding="md"
      {...rest}
    >
      <Box marginBottom={action ? 'md' : '0'}>
        {title ? (
          <Text
            color="$cardTitle"
            marginBottom={body ? 'xxs' : '0'}
            textAlign="center"
            variant="$subheading"
          >
            {title}
          </Text>
        ) : null}
        {body ? (
          <Text color="$cardBody" textAlign="center" variant="$body1">
            {body}
          </Text>
        ) : null}
      </Box>
      {action ? <Button {...action} /> : null}
    </ShadowBox>
  )
}
