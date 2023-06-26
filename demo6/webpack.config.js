const path = require('path')
module.exports = {
    entry:{
        main1:'./src/main.jsx',
    },
    mode:'development',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./build')
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015', 'react']
                    }
                  }
            }
        ]  
    }

}