const path = require('path');

module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@images': path.resolve(__dirname, './src/assets/images/'),
    },
  },

  entry: './src/index.tsx',

  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },

  module: {
    rules: [{
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /(stories)\.(js|jsx)$/],
        use: [{
          loader: "ts-loader"
        }]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            fallback: "file-loader",
            name: "[name][md5:hash].[ext]",
            outputPath: 'dist/assets/',
            publicPath: '/dist/assets/'
          }
        }]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ["file-loader"],
      },
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
};