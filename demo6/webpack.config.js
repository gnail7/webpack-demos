const path = require('path')
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
                use:['style-loader','css-loader',]     
            }
        ]  
    }
    

}