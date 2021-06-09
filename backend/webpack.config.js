
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  optimization: {
    minimize: false, // Disable uglify since it can work only with ES5 modules
  },
  entry: {
    services: './index.ts',
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    http: 'empty',
  },
  watch: env !== 'production',
  /*
    Without this, webpack replaces nodejs built-in libraries with some random bullshits
    (like stream-http instead of http that does not provide ServerResponse at all...)
  */
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, "tsconfig.json"),
          // This means that ts-loader will not check for TS errors
          // and only transpile the code
          // TODO -Remove this when all TS errors are fixed....
          transpileOnly: true //['production', 'test'].indexOf(env) > -1,
        }
      },
      {
        test: /\.(mjs)$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      path.resolve('./src'), // an alias for src directory
      path.resolve('./node_modules')
    ],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};