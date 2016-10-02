module.exports = {
  entry: {
    "browser": "./src/mr-funny.browser.js",
    "browser.tests": "./src/mr-funny.browser.tests.js",
    "node": "./src/mr-funny.node.js",
  },
  output: {
    filename: "mr-funny.[name].js",
    path: __dirname + "/.tmp/"
  },
  module: {
    loaders: [{ test: /\.js$/, loader: "babel" }]
  }
};
