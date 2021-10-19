"use strict";

const webpackConfig = require('./webpack.config.js');
const path = require('path');

var babelRename = function(destPath, srcPath) {
    destPath = srcPath.replace('src', 'build');
    destPath = destPath.replace('.js', '.min.js');
    return destPath;
};

module.exports = function (grunt) {

    // We need to include the core Moodle grunt file too, otherwise we can't run tasks like "amd".
    require("grunt-load-gruntfile")(grunt);
    grunt.loadGruntfile("../../Gruntfile.js");

    // Load all grunt tasks.
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.initConfig({
        watch: {
            // If any .less file changes in directory "less" then run the "less" task.
            files: "src/*.tsx",
            tasks: ["webpack"]
        },
        amd: {
            files: "src/*.tsx",
            tasks: ["webpack --mode=production --node-env=production"]
        },
        eslint: {
            options: {
                quiet: (!grunt.option('show-lint-warnings')) && (typeof grunt.option('max-lint-warnings') === 'undefined'),
                maxWarnings: 0
            },
            amd: {src: [path.resolve(__dirname, "amd/src/*.js")]}
        },
        babel: {
            options: {
                sourceMaps: false,
                comments: false,
                plugins: [
                    'transform-es2015-modules-amd-lazy',
                    'system-import-transformer'
                ],
                presets: [
                    ['minify', {
                        // This minification plugin needs to be disabled because it breaks the
                        // source map generation and causes invalid source maps to be output.
                        simplify: false,
                        builtIns: false
                    }],
                    ['@babel/preset-env', {
                        targets: {
                            browsers: [
                                ">0.25%",
                                "last 2 versions",
                                "not ie <= 10",
                                "not op_mini all",
                                "not Opera > 0",
                                "not dead"
                            ]
                        },
                        modules: false,
                        useBuiltIns: false
                    }]
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    src: path.resolve(__dirname, "amd/build/index.js"),
                    rename: babelRename
                }]
            }
        },
        webpack: {
            wConfig: webpackConfig,
        }
    });
    // The default task (running "grunt" in console).
    grunt.registerTask("default", ["less"]);
    grunt.loadNpmTasks('grunt-webpack');
};
