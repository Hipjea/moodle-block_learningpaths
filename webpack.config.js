const path = require("path");
const webpack = require("webpack");

const config = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        library: 'index',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'amd/src'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
				test: /\.ts(x)?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			}
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        alias: {
            react: path.resolve('./node_modules/react')
        }
    }
};

module.exports = () => {
    config.mode = 'production';
    return config;
};
