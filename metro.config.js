const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('./transformer.config.js'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: [...sourceExts, 'css', 'sass', 'scss', 'svg', 'json', 'md'],
    assetExts: assetExts.filter(
      ext => !ext.match(/(svg|sass|scss|css|json|md)$/),
    ),
  },
};

module.exports = mergeConfig(getDefaultConfig(defaultConfig), config);
