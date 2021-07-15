var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js'
    },
    devServer: {
        contentBase: "./build",
      },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                loader: 'babel-loader',
                options: {
                    plugins: [
                      ['import', { libraryName: "antd", style: true }]
                    ]
                  }, 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: "less-loader",   
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                           }
                        }
                    }
                  ]
            }
        ]
    },
    mode: 'development',
    plugins: [

        new HtmlWebpackPlugin({
            template: 'src/client/index.html'
        })
    ]
}