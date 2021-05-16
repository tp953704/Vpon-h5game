const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: "umd"
  },
  module:{
    rules:[
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
      {
        test: /\.jpg/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        generator: {
          filename: 'assets/css/[hash][ext]',
        },
      },
      {
        test: /\.m?js$/,
        // 排除 node_modules 與 bower_components 底下資料 (第二步)
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 配置 Babel 解析器 (第三步)
            presets: ['@babel/preset-env'],
          },
        },
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
};
