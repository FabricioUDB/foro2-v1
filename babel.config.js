module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript'   // <-- lo añadimos aquí
  ],
  plugins: [
    ['module-resolver', {
      alias: { 'react-native$': 'react-native-web' }
    }]
  ]
};
