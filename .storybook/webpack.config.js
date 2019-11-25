const path = require('path');

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          transpileOnly: true
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      },
    ],
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      {loader: "style-loader"},
      {loader: "css-loader", options: {modules: true}},
      {loader: "postcss-loader"},
      {loader: "sass-loader"}
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
