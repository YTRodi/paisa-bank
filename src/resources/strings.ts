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
  CONTACTS: {
    TITLE: 'Contactos',
    SEARCH_INPUT: {
      PLACEHOLDER: 'Ingresa un nombre o un número',
    },
    DIVIDER_BY: {
      RECENTS: 'Recientes',
      ALL: 'Todos',
    },
    NO_CONTACTS_BY_QUERY_TITLE: 'No se encontraron resultados',
    NO_CONTACTS_BY_QUERY_BODY: 'Intenta user otras palabras!',
    NO_CONTACTS_TITLE: 'No tienes contactos',
    NO_CONTACTS_BODY: 'Intenta agregar uno!',
    NO_CONTACTS_ACTION_LABEL: 'Agregar',
    NO_RECENT_CONTACTS: 'No hay contactos recientes',
    FALLBACK: {
      TITLE: 'No se pudieron cargar los contactos',
    },
  },

  // Components
  SKELETON: 'SKELETON',
  BANK_CARD: {
    BALANCE: 'Balance',
    EXPIRY_DATE: 'Exp. Date',
    FALLBACK: {
      DEFAULT_BODY_ERROR: 'No se pudieron cargar las tarjetas',
    },
  },
  TRANSACTION_CARD: {
    SUS: 'Pago de suscripción',
    CASH_IN: 'Pago recibido',
    CASH_OUT: 'Pago enviado',
    FALLBACK: {
      DEFAULT_BODY_ERROR: 'No se pudieron cargar las transacciones',
    },
  },
  TEXT_INPUT: {
    HINTS: {
      SHOW_PASSWORD: 'Mostrar contraseña',
    },
  },
  FALLBACK: {
    DEFAULT_TITLE: 'Ocurrió un error',
    TRY_AGAIN_LABEL: 'Intentar de nuevo',
  },
}
