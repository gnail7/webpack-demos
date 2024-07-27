# Webpack-practice-demos studed from ruanyf sensei!!!


## Webpack Common command
- `$ webpack -p` means to tell webpack to build using the production environment build pattern
- `$ webpack ` buid in development environment
- `$ webpack --color` make building output pretty


## Webpack Configuration item
- `mode` Configure the application packaging environment(use the `common command to set it ` or configure it in `webpack.config.js`)
- `entry` the entry of the application 
- `output` the result of the construction
- `optimization` 

## Each demo dow what
- `demo1` how to wirte the basic configuration
- `demo2` multiple entry
- `demo3` Bable Loader
- `demo4` Loader of css&image (`css-loader,style-loader,file-loader`)
- `demo5` Plugin (`terser-webpack-plugin` which can minify output,(`UglifyJS` alerady stop update.))

  ### How to set multiple entry
  - `Array`:`entry:['./main1.js','./main2.js']`
  - `Obejct`:`entry:{main1:'./main1.js',main2:'./main2.js'}`
  
## detail of some demo
### demo4
- `css-loader` complete the convertion of the `css` module to `js` module
- `style-loader` write the style into the dom

### demo5
`plugin` can divided into custom and optimize plugin.We also put the optimize plugin in the optimization cofiguration item.
custom plugin as fllow:
- `mini-css-extract-plugin` if we want to extract the css file.replace the `style-loader`
`$ npm intstall mini-css-eatract-plugin`
- `html-webpack-plugin` Automatically updates resource references to html files
- `open-browser-webpack-plugin`Automatically open the browser after constructing webpack project
```
const MiniCssPlugin = require('mini-css-extract-plugin')
module.exports = {
    .....
    plugins:[
        new MiniCssPlugin({
            //the output filename
            filename:'css/[name].css'
        })
    ]
}
```