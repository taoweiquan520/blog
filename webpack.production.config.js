const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/main.js',  // 入口文件

    output: {
        path: __dirname + '/build',    // 打包后存放的地方
        filename: 'js/bundle-[hash].js'   // 打包后输出的文件名
    },
    devtool: 'null',         // 用于打包后调试代码

    devServer: {
        contentBase: './public',    // 本地服务器所加载的页面所在的目录
        historyApiFallback: true,   // 不跳转
        inline: true,    //实时刷新
        hot: true
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                        fallback: ['style-loader'],
                        use: 'css-loader'
                    })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name: 'images/[name].[ext]'
                    }
                  }
                ]
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),   // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.UglifyJsPlugin(),  // 压缩JS代码
        new CleanWebpackPlugin('build/*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin('css/style.css')
    ]
};