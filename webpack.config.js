module.exports = {
  entry: './client.js',
  output: {
    path: "./deploy",
    filename: "app-client.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
};
