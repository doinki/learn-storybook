const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
module.exports = {
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: { postcssLoaderOptions: { implementation: require('postcss') } },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'storybook-addon-next-router',
    'storybook-dark-mode',
  ],
  core: { builder: '@storybook/builder-webpack5' },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.@(j|t)s?(x)'],
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins ?? [];
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
