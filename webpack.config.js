const path = require('path');

const BUILD_DIR = path.join(__dirname, 'public');
const APP_DIR = path.join(__dirname, 'src', 'frontend');

const config = {
    devServer: {
        contentBase: BUILD_DIR,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
    },
    devtool: "eval-source-map",
    entry: {
        app: path.join(APP_DIR, "index.jsx")
    },
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
    mode: "development"
};

module.exports = config;
