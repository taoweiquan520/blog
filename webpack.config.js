const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {   // 入口文件
        'index': ['babel-polyfill', __dirname + '/app/main.js'],
        // 依赖的第三方库
        vendor: ['react', 'redux', 'react-dom', 'react-redux']
    },

    output: {
        path: __dirname + '/build',    // 打包后存放的地方
        filename: 'js/[name]-[hash].js',   // 打包后输出的文件名
        publicPath: '/'
    },
    devtool: '#source-map',         // 用于打包后调试代码

    devServer: {
        contentBase: './public',    // 本地服务器所加载的页面所在的目录
        historyApiFallback: true,   // 不跳转
        inline: true,    //实时刷新,
        port: 8889,

        // 使用proxy代理后端服务url
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true    // 允许跨域
            }
        }
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
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            modules: false,   //指定启动css modules,
                            // url: false
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                require('autoprefixer')
                            }
                        }
                    }
                ]
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
        new webpack.BannerPlugin('版权所有，翻版必究 --taoweiquan'),
        new webpack.SourceMapDevToolPlugin(),  // 调试插件
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),    // 热加载插件
        new CleanWebpackPlugin('build/*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
};