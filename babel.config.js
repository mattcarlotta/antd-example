const { readdirSync, statSync } = require('fs');
const { resolve } = require('path');

const readDirectory = path =>
  readdirSync(path).reduce((acc, folder) => {
    const dirPath = `${path}${folder}`;
    if (statSync(resolve(dirPath)).isDirectory()) {
      acc[`~${folder.replace(/[^\w\s]/gi, '')}`] = dirPath;
    }

    return acc;
  }, {});

const alias = {
  ...readDirectory('./src/'),
};

module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      [
        'module-resolver',
        {
          alias,
        },
      ],
      '@babel/plugin-transform-runtime',

      // Stage 2 https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',

      // Stage 3
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-json-strings',

      [
        'import',
        { libraryName: 'antd', libraryDirectory: 'lib', style: 'css' },
        'ant',
      ],
    ],
  };
};
