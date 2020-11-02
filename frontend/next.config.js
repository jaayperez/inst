const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

const nextConfiguration = {
  webpack: (config) => {
    config.externals = config.externals || {};
    config.externals['styletron-server'] = 'styletron-server';
    return config;
  },
};

module.exports = withPlugins(
  [withOptimizedImages, withFonts],
  nextConfiguration
);
