module.exports = {
  webpack: function (config) {
    // https://github.com/vercel/next.js/issues/3141
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
    );

    // https://github.com/3rd-Eden/useragent/pull/117
    config.node = {
      fs: "empty",
    };

    return config;
  },
};
