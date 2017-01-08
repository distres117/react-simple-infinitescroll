var webpack = require('webpack'),
    path = require('path'),
    BrowserSync = require('browser-sync-webpack-plugin');

module.exports = {
    entry:[
        './src/app.jsx'
    ],
    plugins:[
        new BrowserSync({
            host: 'localhost',
            port: 3001,
            server:{
                baseDir:[__dirname + '/public']
            }
        }),
         new webpack.ProvidePlugin({
            '_':'lodash',
            '$': "jquery",
            'jQuery': "jquery"
        }) 
    ],
    output:{
        path:__dirname + '/public',
        filename: 'bundle.js'
    },
    resolve:{
        root: __dirname + '/app/client',
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};