var webpack = require('webpack'),
    path = require('path'),
    BrowserSync = require('browser-sync-webpack-plugin');

module.exports = {
    entry:[
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!bootstrap/dist/js/bootstrap.min.js',
        'style-loader!css-loader!less-loader!./src/styles/bootswatch.less',
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
            '$': "jquery"
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
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};