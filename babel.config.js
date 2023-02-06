module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          alias: {
            '~/api': './src/api',
            '~/components': './src/components',
            '~/config': './src/config',
            '~/constants': './src/constants',
            '~/context': './src/context',
            '~/hooks': './src/hooks',
            '~/navigation': './src/navigation',
            '~/resources': './src/resources',
            '~/schemas': './src/schemas',
            '~/screens': './src/screens',
            '~/store': './src/store',
            '~/styles': './src/styles',
            '~/types': './src/types',
            '~/utils': './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
