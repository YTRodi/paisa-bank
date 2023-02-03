/* eslint-disable no-console */
import axios from 'axios'
import { useEffect } from 'react'
import { type FallbackProps as ReactErrorBoundaryFallbackProps } from 'react-error-boundary'

import { Box, ShadowBox } from '../Box'
import { Button } from '../Button'
import { Text } from '../Text'

import { STRINGS } from '~/resources'
import { type ApiErrorResponse } from '~/types'

export type FallbackProps = ReactErrorBoundaryFallbackProps & {
  title?: string
  body?: string
}

const { DEFAULT_TITLE, TRY_AGAIN_LABEL } = STRINGS.FALLBACK

export const Fallback = ({
  error,
  resetErrorBoundary,
  title = DEFAULT_TITLE,
  body,
}: FallbackProps) => {
  useEffect(() => {
    // Report to error tracking service
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      console.log(error.response)

      return
    }

    console.log(error)
  }, [error])

  return (
    <Box marginTop="3xl" paddingHorizontal="md">
      <ShadowBox
        alignItems="center"
        backgroundColor="$mainBackground"
        borderRadius="md"
        padding="md"
      >
        <Box marginBottom="sm">
          <Text
            color="$cardTitle"
            marginBottom={body ? 'xxs' : '0'}
            textAlign="center"
            variant="$subheading"
          >
            {title}
          </Text>
          {body ? (
            <Text color="$cardBody" textAlign="center" variant="$body1">
              {body}
            </Text>
          ) : null}
        </Box>
        <Button label={TRY_AGAIN_LABEL} onPress={resetErrorBoundary} />
      </ShadowBox>
    </Box>
  )
}
