const path = require("path");


module.export = {
    entry: './src/index.ts',
    output: {
        // path: __dirname + '/dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [ 
            {
                // test: /\.m?js$/,
                // exclude: /(node_modules|bower_components)/,
                // use: {
                //     loader: 'babel-loader',
                // }
                test: /\.tsx?/,
                exclude: /node_modules/,
                use: { 
                    loader: 'ts-loader',
                }
            }
        ]
    }
}

