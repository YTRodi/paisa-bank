import * as yup from 'yup'

import { STRINGS } from '~/resources'

const { EMAIL_INPUT_ERRORS, PASSWORD_INPUT_ERRORS } = STRINGS.LOGIN

const LOGIN_SCHEMA = yup
  .object()
  .shape({
    email: yup
      .string()
      .required(EMAIL_INPUT_ERRORS.REQUIRED)
      .email(EMAIL_INPUT_ERRORS.INVALID),
    password: yup.string().required(PASSWORD_INPUT_ERRORS.REQUIRED),
  })
  .required()

export { LOGIN_SCHEMA }
