
/* IMPORT */

const path = require ( 'path' );

/* CONFIG */

const config = {
  target: 'node',
  entry: './src/extension.ts',
  output: {
    path: path.resolve ( __dirname, 'out' ),
    // path: path.resolve( "/Users/comet/.vscode/extensions/fabiospampinato.vscode-highlight-1.6.0/", 'out' ),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
  },
  devtool: 'source-map',
  externals: {
    vscode: 'commonjs vscode'
  },
  resolve: {
    extensions: ['tsx', '.ts', '.jsx', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader'
        }
      ]
    }]
  }
}

/* EXPORT */

module.exports = config;
