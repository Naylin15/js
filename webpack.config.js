const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html"
        })
    ]
}


// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.html$/,
//                 use: [
//                     {
//                         loader: "html-loader",
//                         options: { minimize: true }
//                     }
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./index.html",
//             filename: "./index.html"
//         })
//     ]
// }