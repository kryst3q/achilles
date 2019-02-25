const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
    devtool: "inline-source-map",
    entry: APP_DIR + "/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test   : /\.(ttf|eot|gif|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use : "file-loader"
            }
        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/templates/index.html"),
            filename: "index.html"
        })
    ]
};

module.exports = config;
