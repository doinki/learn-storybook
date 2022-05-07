const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: { postcssLoaderOptions: { implementation: require('postcss') } },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-dark-mode',
  ],
  core: { builder: '@storybook/builder-webpack5' },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(j|t)s?(x)'],
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins ?? [];
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
