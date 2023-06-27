const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        main1:'./src/main1.jsx',
        main2:'./src/main2.jsx'
    },
    mode:'development',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'./build')
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]  
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'index.html'
        })
    ],
    optimization:{
        splitChunks:{
            chunks:'all',
            name:'commons'
        }
    }

}