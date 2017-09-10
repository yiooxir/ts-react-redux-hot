import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  entry: [
    "react-hot-loader/patch",
    "./src/index.tsx",
    "./src/styles.scss",
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    alias: {
      utils: path.resolve(__dirname, 'src/utils/'),
      components: path.resolve(__dirname, 'src/components/'),
      interfaces: path.resolve(__dirname, 'src/interfaces/'),
      actions: path.resolve(__dirname, 'src/actions/'),
    }
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'react-hot-ts',
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, './src/index.ejs')
    }),
  ],

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        loaders: [
          "react-hot-loader/webpack",
          "awesome-typescript-loader",

        ],
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            },
          },
          "sass-loader"
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
    ]
  },

  devServer: {
    hot: true
  }

};

export default config;
