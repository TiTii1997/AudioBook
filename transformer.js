// For React Native version 0.59 or later
var upstreamTransformer = require('metro-react-native-babel-transformer');

// For React Native version 0.56-0.58
// var upstreamTransformer = require("metro/src/reactNativeTransformer");

// For React Native version 0.52-0.55
// var upstreamTransformer = require("metro/src/transformer");

// For React Native version 0.47-0.51
// var upstreamTransformer = require("metro-bundler/src/transformer");

// For React Native version 0.46
// var upstreamTransformer = require("metro-bundler/build/transformer");

var sassTransformer = require('react-native-sass-transformer');

module.exports.transform = function ({src, filename, options}) {
  if (filename.endsWith('.scss') || filename.endsWith('.sass')) {
    var opts = Object.assign(options, {
      sassOptions: {
        functions: {
          'rem($px)': px => {
            px.setValue(px.getValue() / 16);
            px.setUnit('rem');
            return px;
          },
        },
      },
    });
    return sassTransformer.transform({src, filename, options: opts});
  } else {
    return upstreamTransformer.transform({src, filename, options});
  }
};
