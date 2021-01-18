const tsconfig = JSON.parse(require('fs').readFileSync(`${__dirname}/tsconfig.json`, 'utf8'));

const alias = {};
Object.entries(tsconfig.compilerOptions.paths).forEach(([key, [value]]) => {
  alias[key] = value;
});

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias,
      },
    ],
  ],
};
