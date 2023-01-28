import { createTheme } from '@shopify/restyle'

const palette = {
  grayLightest: '#F9FAFC',
  grayLigher: '#AAAAAA',
  grayPrimary: '#717E95',
  grayDarker: '#616E7C',
  grayDarkest: '#334154',

  blueLight: '#6C8FF8',
  bluePrimary: '#005CEE',

  greenLight: '#E4FFF0',
  greenPrimary: '#74CC9B',

  orangeLight: '#FEEAD4',
  orangePrimary: '#EF9C55',

  purpleLight: '#EEE3FF',
  purplePrimary: '#B946FF',

  lightblueLight: '#CAF0FF',
  lightbluePrimary: '#68C6E5',

  redLight: '#F9B7B7',
  redPrimary: '#E9231A',

  white: '#FFFFFF',
  black: '#000000',
}

const theme = createTheme({
  colors: {
    blueLight: palette.blueLight,
    bluePrimary: palette.bluePrimary,

    greenLight: palette.greenLight,
    greenPrimary: palette.greenPrimary,

    orangeLight: palette.orangeLight,
    orangePrimary: palette.orangePrimary,

    purpleLight: palette.purpleLight,
    purplePrimary: palette.purplePrimary,

    lightblueLight: palette.lightblueLight,
    lightbluePrimary: palette.lightbluePrimary,

    redLight: palette.redLight,
    redPrimary: palette.redPrimary,

    white: palette.white,
    black: palette.black,

    // Tokens
    $mainBackground: palette.grayLightest,
    $mainForeground: palette.white,
    $brand: palette.bluePrimary,

    $primaryBankCardBackground: palette.bluePrimary,
    $primaryBankCardText: palette.white,

    $secondaryBankCardBackground: palette.redLight,
    $secondaryBankCardText: palette.white,

    $primaryButtonBackground: palette.bluePrimary,
    $primaryButtonText: palette.white,

    $secondaryButtonBackground: palette.greenLight,
    $secondaryButtonText: palette.greenPrimary,

    $tertiaryButtonBackground: palette.orangeLight,
    $tertiaryButtonText: palette.orangePrimary,

    $quaternaryButtonBackground: palette.purpleLight,
    $quaternaryButtonText: palette.purplePrimary,

    $quinaryButtonBackground: palette.lightblueLight,
    $quinaryButtonText: palette.lightbluePrimary,

    $primaryIconBackground: palette.purpleLight,
    $primaryIcon: palette.purplePrimary,

    $secondaryIconBackground: palette.greenLight,
    $secondaryIcon: palette.greenPrimary,

    $tertiaryIconBackground: palette.orangeLight,
    $tertiaryIcon: palette.orangePrimary,

    $quaternaryIconBackground: palette.lightblueLight,
    $quaternaryIcon: palette.lightbluePrimary,

    $inputLabel: palette.black, // Email, contraseña
    $inputPlaceholder: palette.black, // Ingresa tu email, ingresa tu contraseña
    $signUpText: palette.grayDarker,
    $greetingText: palette.grayDarker,
    $screenTitle: palette.grayDarkest, // Contactos
    $screenSubtitle: palette.grayDarkest, // Servicios, últimas transacciones
    $cardTitle: palette.grayDarker, // Billetera, Transferir, Adobe, Juan David
    $cardBody: palette.grayLigher, // Pago de suscripción, +8643307899
    $divider: palette.grayLigher, // Recents, All, HR
  },
  textVariants: {
    // Email, contraseña, Hola Paisanx, Adobe
    defaults: {
      fontFamily: 'Poppins_400Regular',
    },
    $brand: {
      fontFamily: 'Poppins_500Medium',
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 60,
      letterSpacing: -1.5,
      color: '$brand',
    },
    // Contactos
    $heading: {
      fontFamily: 'Poppins_500Medium',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 28,
    },
    // Servicios, Últimas transacciones
    $subheading: {
      fontFamily: 'Poppins_500Medium',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 26,
    },
    // Email
    $body: {
      fontFamily: 'Poppins_500Medium',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 22,
    },
    // Placeholder, recordarme (bold)
    $small: {
      fontFamily: 'Poppins_400Regular',
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 18,
    },
  },
  spacing: {
    '0': 0,
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
})

export type Theme = typeof theme
export default theme
