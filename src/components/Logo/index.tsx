import { Box, type BoxProps } from '../Box'

export const Logo = (props: BoxProps) => {
  return (
    <Box
      backgroundColor="$brand"
      borderRadius="sm"
      height={48}
      width={48}
      {...props}
    />
  )
}
