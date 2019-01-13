const path = require("path");

module.exports = [
    // Config for regular blocks
    {
        entry: "./assets/src/index.js",
        output: {
            path: path.resolve(__dirname, "./assets/dist"),
            filename: "build.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        },
        stats: {
            colors: true
        },
        externals: {
            react: "React"
        }
    },
];
