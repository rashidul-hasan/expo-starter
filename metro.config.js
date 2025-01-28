/* eslint-env node */

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const nodeLibs = require('node-libs-react-native');

const config = getDefaultConfig(__dirname);

// Add `.sql` support for Drizzle migrations
config.resolver.sourceExts = [...config.resolver.sourceExts, 'sql'];

config.resolver.extraNodeModules = {
  ...nodeLibs,
};

config.resolver.blockList = [/node_modules\/.*\/node_modules\/react-native\/.*/];

module.exports = withNativeWind(config, { input: './global.css' });
