const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('assets/styles/[name].bundle.css');
const postCSSOptions  = require('./postcss.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const ASSET_PATH = process.env.ASSET_PATH || '../../'; //For all files expect html
const ASSET_PATH = process.env.ASSET_PATH || './'; //For HTML files only

// const HtmlCriticalPlugin = require("html-critical-webpack-plugin");

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
        filename: 'assets/js/[name].bundle.js',
        publicPath: ASSET_PATH
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
            // {
            //     test   : /\.scss$/,
            //     loaders: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
            // },


            
            // {
            //     test   : /\.css$/,
            //     loader: extractCSS.extract(
            //         {
            //             loader: 'style-loader',
            //         },
            //         {
            //             loader: 'css-loader',
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: postCSSOptions
            //         },
            //         // {
            //         //     loader: 'resolve-url-loader',
            //         // },
            //     ),
            // },
            {
                test: /\.scss$/,
                loader: extractCSS.extract([
                    
                    // {
                    //     loader: 'style-loader',
                    // },
                    {
                        loader: 'css-loader',
                        // options: {url: false}
                    },
                    {
                        loader: 'postcss-loader',
                        options: postCSSOptions
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {url: false}
                    },
                    {
                        loader: 'sass-loader',
                        // options: {url: false}
                    }
                ]),
            },

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
        }),
        // new HtmlCriticalPlugin({
        //     base: path.resolve(__dirname, 'dist'),
        //     src: 'index.html',
        //     dest: 'index.html',
        //     inline: true,
        //     minify: true,
        //     extract: true,
        //     width: 375,
        //     height: 565,
        //     penthouse: {
        //       blockJSRequests: false,
        //     }
        // })
        // new webpack.DefinePlugin({
        // 'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        // })
        
        // new BundleAnalyzerPlugin()
    ]
};

module.exports = config;
