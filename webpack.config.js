const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js",
    },
    devServer: {
        static: [
            {
                directory: `${__dirname}/public`,
            },
            {
                directory: `${__dirname}/dist`,
            }
        ],
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.js', '.vue'],
    },
    plugins: [
        new webpack.DefinePlugin({
            "__VUE_OPTIONS_API__": true,
            "__VUE_PROD_DEVTOOLS__": false
        }),
        new VueLoaderPlugin()
    ],
    target: ["web", "es5"]
}