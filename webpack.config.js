import webpack from 'webpack';
import path from 'path';
import qs from 'querystring';

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/app.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              context: __dirname,
              modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]-[local]'
            }
          },
        ],
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        use: [{
          loader: 'babel-loader',
          query: {
            "env": {
              "development": {
                "presets": ["react-hmre"],
                "plugins": [
                  ["react-transform", {
                    "transforms": [{
                      "transform": "react-transform-hmr",
                      "imports": ["react"],
                      "locals": ["module"]
                    }]
                  }]
                ]
              }
            }
          }
        }]
      }
    ]
  }
};
