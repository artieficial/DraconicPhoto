const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js', 
    chunkFilename: '[name].chunk.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: ["style-loader", "css-loader"], // Use css-loader then style-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match common image file types
        type: "asset/resource", // Tells Webpack to emit the file and return the URL
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json"
      }),
    ]
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "assets/images", to: "assets/images" }, // Copy all files from src/assets to dist/assets
      ],
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    //   reportFilename: path.resolve(__dirname, "reports/report.html"),
    //   generateStatsFile: true,
    //   statsFilename: path.resolve(__dirname, "reports/stats.json"),
    // }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map'
};
