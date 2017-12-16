const webpack = require('webpack');
const { resolve } = require('path');

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
        extensions: ['*', '.js', '.jsx'] // Extensões buscadas pelo webpack
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIndentName: '[name]__[local]__[hash:base64:5]',
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [require('autoprefixer')];
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 2,
                            localIndentName: '[name]__[local]__[hash:base64:5]',
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
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
        new webpack.NamedModulesPlugin()
    ]
};