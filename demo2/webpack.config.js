const path = require('path')
module.exports = {
    entry:{
        main1:'./src/main1.js',
        main2:'./src/main2.js'
    },
    mode:'development',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'./build')
    }
}