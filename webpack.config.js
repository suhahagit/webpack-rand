var webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
]
};