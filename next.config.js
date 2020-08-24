const debug = process.env.NODE_ENV !== "production";

module.exports = {
  webpack: function (config) {
    // https://github.com/vercel/next.js/issues/3141
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      }
    );

    // https://github.com/3rd-Eden/useragent/pull/117
    config.node = {
      "better-ajv-errors": "empty",
      fs: "empty",
      repl: "empty",
    };

    return config;
  },
  assetPrefix: !debug ? '/blue-plate' : '',
};
