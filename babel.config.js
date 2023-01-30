module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~/components': './src/components',
            '~/config': './src/config',
            '~/constants': './src/constants',
            '~/context': './src/context',
            '~/hooks': './src/hooks',
            '~/resources': './src/resources',
            '~/schemas': './src/schemas',
            '~/screens': './src/screens',
            '~/styles': './src/styles',
            '~/types': './src/types',
            '~/utils': './src/utils',
          },
        },
      ],
    ],
  }
}
