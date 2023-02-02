import { BRAND_NAME } from '~/constants'

export const STRINGS = {
  // Screens
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
  HOME: {
    GREETING: 'Hola',
    NAME: 'Paisanx', // TODO: should come from the authenticated user
    SECTIONS: {
      SERVICES: {
        TITLE: 'Servicios',
        ACTION_NAMES: {
          FIRST: 'Billetera',
          SECOND: 'Transferir',
          THIRD: 'Pagar',
          FOURTH: 'Recargar',
        },
      },
      TRANSACTIONS: {
        TITLE: 'Últimas transacciones',
      },
    },
  },
  LOGOUT: {
    ALERT: {
      TITLE: 'Cerrar sesión',
      MESSAGE: 'Estas seguro que quieres cerrar sesión?',
      FIRST_ACTION: 'Si, cerrar sesión',
      SECOND_ACTION: 'Cancelar',
    },
  },

  // Components
  BANK_CARD: {
    BALANCE: 'Balance',
    EXPIRY_DATE: 'Exp. Date',
  },
  TRANSACTION_CARD: {
    SUS: 'Pago de suscripción',
    CASH_IN: 'Pago recibido',
    CASH_OUT: 'Pago enviado',
  },
}
