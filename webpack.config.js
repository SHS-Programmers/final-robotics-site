const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {

    plugins: [
        new NodePolyfillPlugin(),
    ],
    resolve: {
        fallback: {
            timers: require.resolve("timers-browserify"), // Map 'timers' to browser-compatible polyfill
            fs: false, // This is to ignore any `fs` module (not compatible in the browser)
        },
    },
};
