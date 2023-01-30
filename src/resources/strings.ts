import { BRAND_NAME } from '~/constants'

export const STRINGS = {
  LOGIN: {
    BRAND_NAME,
    BRAND_TEXT: 'Comienza a manejar tu vida financiera',
    EMAIL_INPUT_LABEL: 'Email',
    EMAIL_INPUT_PLACEHOLDER: 'Ingresa  tu email',
    EMAIL_INPUT_ERRORS: {
      REQUIRED: 'El email es requerido',
      INVALID: 'El email es inválido',
    },
    PASSWORD_INPUT_LABEL: 'Contraseña',
    PASSWORD_INPUT_PLACEHOLDER: 'Ingresa tu contraseña',
    PASSWORD_INPUT_ERRORS: {
      REQUIRED: 'La contraseña es requerida',
      // INVALID: 'La contraseña es inválida', // TODO: add regex pattern
    },
    REMIND_ME: 'Recordarme',
    DONT_HAVE_AN_ACCOUNT: 'No tienes cuenta?',
    REGISTER_HERE: 'Regístrate',
    LOGIN_BUTTON: 'Ingresar',
  },
}
