const path = require('path');
const Html = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = function (env) {
    const isDev = env && env.dev ? true : false;
    console.log('isDev?', isDev);

    const config = {
        devtool: 'source-map',      //!!!!!!!!! :D
        entry: './src/app.jsx',
        output: {
            filename: 'out.js',
            path: path.resolve(__dirname, 'docs')
        },
        mode: isDev ? 'development' : 'production',
        // devServer: { inline: true },
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                          presets: ["@babel/env", "@babel/react"]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [isDev ? 'style-loader' : MiniCss.loader, 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: [
                        isDev ? 'style-loader' : MiniCss.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')({
                                        'browsers': ['> 1%', 'last 2 versions']
                                    })
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                },
            ]
        },
        plugins: [
            new Html({
                filename: 'index.html',
                template: './index.html'
            }),
            new MiniCss({
                filename: 'style.css'
            })
        ]
    }

    return config;
};
