const path = require('path');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');

console.log(dotenv);
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    watchOptions: {
        poll: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000,
        https: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules)/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react', 'stage-0']
                }

            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'

            },
            {
                test: /\.scss/,
                exclude: /(node_modules)/,
                loader: 'style-loader!css-loader!sass-loader'

            },
            {
                test: /\.(woff|woff2)$/i,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
};
