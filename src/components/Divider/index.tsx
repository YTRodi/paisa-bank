import { Skeleton } from 'moti/skeleton'

import { Box, type BoxProps } from '../Box'
import { Text } from '../Text'

export type DividerProps = BoxProps & {
  label?: string
}

export const Divider = ({ label, ...rest }: DividerProps) => {
  return (
    <Box {...rest}>
      {label ? (
        <Skeleton
          colorMode="light" // TODO: use CURRENT_THEME
          width="30%"
        >
          <Text color="$divider" variant="$body1">
            {label}
          </Text>
        </Skeleton>
      ) : null}
      <Box
        borderColor="$divider"
        borderWidth={0.5}
        marginTop={label ? 'md' : '0'}
      />
    </Box>
  )
}
