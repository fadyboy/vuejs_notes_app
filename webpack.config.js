const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");



module.exports = {
    entry: "./main.js",
    output: {
        path:path.resolve(__dirname, "dist"),
        filename: "./build.js"
    },
    resolve: {
        extensions: [".js", ".vue", ".json"]
    },
    module: {
        rules:[
            {
                test:/\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}