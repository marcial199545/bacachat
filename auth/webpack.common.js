const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./src/server.js",
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "server.js",
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
    externals: [nodeExternals()],
};
