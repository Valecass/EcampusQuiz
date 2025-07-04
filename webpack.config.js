const path = require('path');

module.exports = {
    entry: './src/assets/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
        open: true,
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    mode: 'development',
};