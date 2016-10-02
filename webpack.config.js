/**
 * Library name
 */
var name = "mr-funny";

/**
 * Quickly generate entries for webpack. Given array of target names
 * ["browser", "module"] and library name "zok" it will generate:
 *
 *   {
 *     browser: "./src/zok.browser.js",
 *     module: "./src/zok.module.js"
 *   }
 */
function generateEntries(array, name) {
  var types = array.slice();
  var entries = {};
  while(types.length > 0) {
    entries[types[0]] = "./src/" + name + "." + types[0] + ".js";
    types.shift();
  }
  return entries;
}

/**
 * Webpack config
 */
module.exports = {
  entry: generateEntries(["browser", "module", "tests"], name),
  output: {
    filename: name + ".[name].js",
  },
  module: {
    loaders: [{ test: /\.js$/, loader: "babel" }]
  },
  watch: true
};
