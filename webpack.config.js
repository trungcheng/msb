const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, './src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                    //'style-loader', // include style tag to head html section, for development
                    MiniCssExtractPlugin.loader, // for production
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                outputStyle: 'compressed'
                            }
                        }
                    }
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true, // Fix can not get route error
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.[hash].css',
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
    ],
    optimization: {
        minimize: true, // for development
        minimizer: [ // for production
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules\/(?!antd\/).*/,
                    name: "vendors",
                    chunks: "all",
                },
                antd: {
                    test: /node_modules\/(antd\/).*/,
                    name: "antd",
                    chunks: "all",
                },
            },
        },
        runtimeChunk: {
            name: "manifest",
        },
    }
};