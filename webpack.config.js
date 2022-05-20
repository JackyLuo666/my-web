const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-react", "@babel/preset-env"],
                        "plugins": ["@babel/plugin-transform-runtime"]
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.mp3$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                dependency: { not: ['url'] },
                loader: "url-loader",
                options: {
                    name: "[name].[hash:5].[ext]",
                    limit: 1024 * 8, // size <= 1kib
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './dist/index.html')
        })
    ],
    //用来设置引用模块
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development'
}