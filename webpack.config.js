const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globule = require('globule')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const FixStyleOnlyEntries = require("webpack-fix-style-only-entries");
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const {
  HtmlWebpackSkipAssetsPlugin
} = require('html-webpack-skip-assets-plugin');
const app = {
  mode: 'production',
  // devtool: 'eval-source-map',
  entry: {
    script: './src/js/index.js',
    'style.css': './src/scss/style.scss',
    'header-footer.css': './src/scss/header-footer.scss',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/js/[name].js',
  },
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer"),
              ],
            },
          },
          'sass-loader',
          'import-glob-loader',
        ],
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              root: path.resolve(__dirname, 'src/pug'),
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new FixStyleOnlyEntries(),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name]",
    })
  ],
  devServer: {
    open: true,
    inline: true,
    contentBase: path.join(__dirname, './dist'),
    publicPath: '/',
    watchContentBase: true,
    //port: 8080
  },
  externals: {
    jquery: 'jQuery',
    swiper: 'Swiper'
  }
};

const templates = globule.find(
  './src/pug/**/*.pug', {
    ignore: [
      './src/pug/**/_*.pug'
    ]
  }
)

templates.forEach((template) => {
  const fileName = template.replace('./src/pug/', '').replace('.pug', '.html')
  app.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${fileName}`,
      template: template,
      adjustIndent: true,
      minify: false,
    }),
    new HtmlWebpackSkipAssetsPlugin({
      excludeAssets: [/header-footer.css/, /style.css/, /script.js/]
    })
  )
})

module.exports = app