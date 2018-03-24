const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dest"),
        filename:"bundle.js",
        publicPath:"dest/"
    },
    module:{
       rules:[
           {
               use:"babel-loader",
               test:/\.js$/
           },
           {
               loader: ExtractTextWebpackPlugin.extract({
                loader:"css-loader"
               }),
               test:/\.css/
           },
           {
               test:/\.(jpe?g|png|svg|gif)$/,
               use:[
                   {
                       loader:'url-loader',
                       options:{limit:40000}
                   },
                   'image-webpack-loader'
               ]
           }
       ] 
    },
    plugins:[
        new ExtractTextWebpackPlugin("style.css")
    ]
};

module.exports = config;