const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-export-namespace-from'],
    ['macros'],
    ['inline-dotenv'],
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          'app.json': path.join(__dirname, 'app.json'),
          'package.json': path.join(__dirname, 'package.json'),
          src: path.resolve(__dirname, 'src'),
          assets: path.resolve(__dirname, 'assets'),
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__decode'],
      },
    ],
  ],
};
