const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('assets/styles/[name].bundle.css');
const postCSSOptions  = require('./postcss.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'assets/js/commons.js'
});

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js',
        about: './about.js',
        eventsExhibitions: './eventsExhibitions.js',
        singleEvent: './singleEvent.js',
        coursesEducation: './coursesEducation.js',
        singleCourse: './singleCourse.js',
        projects: './projects.js',
        singleProject: './singleProject.js',
        404: './404.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].bundle.js'
    },
    // devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', { modules: false }]
                        ]
                    }
                }]
            },
            {
                test   : /\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader']
            },
            {
                test   : /\.scss$/,
                // loader: extractCSS.extract(
                //     {
                //         loader: 'resolve-url-loader',
                //     },
                    
                //     {
                //         loader: 'css-loader',
                //     },
                //     {
                //         loader: 'postcss-loader',
                //         options: postCSSOptions
                //     },
                //     {
                //         loader: 'resolve-url-loader',
                //     },
                //     {
                //         loader: 'sass-loader',
                //     }
                // ),
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
            },
            // {
            //     test: /\.scss$/,
            //     loader: extractCSS.extract([
            //         {
            //             loader: 'resolve-url-loader',
            //         },
                    
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },

            //         {
            //             loader: 'postcss-loader',
            //             options: postCSSOptions
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }
            //     ]),
            // },

            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'file-loader?name=assets/images/[name].[ext]'
                }]
            },
            {
                test: /(^-partial)?\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            interpolate: true,
                            attrs: ['img:src']
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000&name=./assets/fonts/[hash].[ext]'
            },
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        extractCSS,
        extractCommons,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
        
        // new BundleAnalyzerPlugin()
    ]
};

module.exports = config;