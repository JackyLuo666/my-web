const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/entry/index.js",
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
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.mp3$/,
                use: 'file-loader'
            },
            {
                test: /\.md$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                dependency: { not: ['url'] },
                loader: "url-loader",
                options: {
                    name: "[name].[hash:5].[ext]",
                    limit: 1024 * 8, // size <= 1kb
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
    devServer: {
        open: true,//自动打开浏览器
        port: 80,//在http协议中，如果端口号是80，可以省略。自己可以定义其他端口号
        host: '127.0.0.1'//指定运行时的主机
    },
    //用来设置引用模块
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development'
}