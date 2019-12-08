
const path = require('path');

// const verdorModules = [
//   'react', 'react-dom', 'react-easy-state', 'axios', '@babel/polyfill', '@loadable/component'
// ];

module.exports = {
  // Tell webpack to run babel on every file it runs through
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // test: /[\\/]node_modules[\\/](react|react-dom|@babel\/polyfill|@loadable\/component|axios)[\\/]/,
          test(module, chunks) {
            let modulePath = module.context.replace(/\\/g, '/');
            if (modulePath.indexOf('/node_modules/') < 0) {
              return false;
            }
            let isMatch = /[\\/]node_modules[\\/](react|react-dom|@loadable\/component|axios)[\\/]/.test(modulePath);
            return isMatch;
          },
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'client/dist'),
  },
};
