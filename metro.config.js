/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig('.');
  return {
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
      sourceExts: [...sourceExts, 'css', 'sass', 'scss', 'svg'],
      assetExts: assetExts.filter(ext => !ext.match(/(svg|sass|scss|css)$/)),
    },
  };
})();
