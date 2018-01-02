const webpack = require('webpack');
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch', // Ativar o HMR para o React (Hot Module Replacement)
        'webpack-dev-server/client?http://localhost:8080', // Informa onde o bundle vai ficar disponível
        'webpack/hot/only-dev-server', // Fazer o reload apenas de bundles bem sucedidos
        './src/index.jsx' //Arquivo de entrada para os componentes do React
    ],
    output: {
        path: __dirname + './public', // Pasta de saída dos arquivos transpilados
        filename: 'bundle.js' // Arquivo javascript transpilado
    },
    devtool: 'source-map', // Mapeamento para facilitar a busca de problemas no código
    resolve: {
        extensions: ['*', '.js', '.jsx'], // Extensões buscadas pelo webpack
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/jquery/dist/jquery.min.js',
            bootstrap: 'modules/bootstrap/dist/js/bootstrap.min.js',
            tether: 'modules/tether/dist/js/tether.min.js'
        }
    },
    stats: { // Opções de saída do webpack
        colors: true,
        reasons: true
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [
                    "babel-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'public/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'Tether': 'tether'
        }),
        new ExtractTextPlugin('app.css')
    ]
};