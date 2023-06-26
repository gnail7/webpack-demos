const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin'); 
module.exports = {
    entry:{
        main1:'./src/main.js',
    },
    mode:'development',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./build')
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[MiniCssPlugin.loader,'css-loader',]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            // 配置TerserPlugin选项
            // 可以根据需要进行更多的定制
          })
        ]
    },
    plugins:[
        new MiniCssPlugin({
            filename:'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'index.html'
        }),
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:8080'
        // })
    ]

}