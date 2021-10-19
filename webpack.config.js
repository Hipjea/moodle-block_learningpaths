const path = require("path");
const webpack = require("webpack");
const isProduction = process.env.NODE_ENV == 'production';

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
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
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
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
