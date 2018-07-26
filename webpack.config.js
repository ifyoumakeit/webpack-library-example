const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    foo: "./src/foo.js",
    bar: ["./src/bar.js", "./src/baz.js"],
    index: "./src/index.js"
  },
  mode: "development",
  output: {
    path: path.resolve("./public"),
    filename: "bundle-[name].js",
    library: ["Components", "[name]"],
  },
  plugins: [new HtmlWebpackPlugin()]
};
