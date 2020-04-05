const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(),

        new NodemonPlugin({
            watch: path.resolve(__dirname, "./dist"),
        }),
    ],
});
