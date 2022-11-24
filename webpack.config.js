const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./index.js",
    mode: "development",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    target: "web",
    devServer: {
        port: "3000",
        static: {
            directory: path.join(__dirname, "public"),
        },
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    //can be changed or remove for production
    //devtool: "cheap-module-eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};
