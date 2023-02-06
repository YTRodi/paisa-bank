/* eslint-disable no-console */
import axios from 'axios'
import { useEffect } from 'react'
import { type FallbackProps as ReactErrorBoundaryFallbackProps } from 'react-error-boundary'

import { Card, type CardProps } from '../Card'

import { STRINGS } from '~/resources'
import { type ApiErrorResponse } from '~/types'

export type FallbackProps = ReactErrorBoundaryFallbackProps & CardProps

const { DEFAULT_TITLE, TRY_AGAIN_LABEL } = STRINGS.FALLBACK

export const Fallback = ({
  error,
  resetErrorBoundary,

  action = { label: TRY_AGAIN_LABEL, onPress: resetErrorBoundary },
  title = DEFAULT_TITLE,
  ...rest
}: FallbackProps) => {
  useEffect(() => {
    // Report to error tracking service
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      console.log(error.response)

      return
    }

    console.log(error)
  }, [error])

  return <Card action={action} title={title} {...rest} />
}
