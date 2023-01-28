module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~/components': './src/components',
            '~/config': './src/config',
            '~/context': './src/context',
            '~/hooks': './src/hooks',
            '~/screens': './src/screens',
            '~/styles': './src/styles',
            '~/types': './src/types',
            '~/utils': './src/utils',
          },
        },
      ],
    ],
  };
};
