const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const config = {
        entry: path.join(__dirname, 'src', 'index.tsx'),
        mode: options.mode,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.[hash].js',
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
        module: {
            rules: [
                {
                    test: /\.?(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
                    use: ['file-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html'),
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.ProvidePlugin({
                React: 'react',
            }),
        ],
        devServer: {
            hot: true,
            host: 'localhost',
            port: 3000,
            open: true,
            historyApiFallback: true,
        },
    };
    return config;
};
