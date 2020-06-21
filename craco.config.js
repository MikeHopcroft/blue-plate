/* craco.config.js */
 
module.exports = {
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        type: 'json', // Required by Webpack v4
        use: 'yaml-loader'
      }
    ]
  }
}
