const path = require("path");

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dest"),
        filename:"bundle.js"
    }
};

module.exports = config;