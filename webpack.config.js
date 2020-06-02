const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    app: "./public/index.js",
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budgeting App",
      short_name: "Budget App",
      description: "An application to keep track of your expenses, on or offline!",
      background_color: "#eedff5",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [{
        src: "./public/icons/icon-192x192.png",
        sizes: "192x192"
    }, {
        src: "./public/icons/icon-512x512.png",
        sizes: "512x512"
    }
],
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;