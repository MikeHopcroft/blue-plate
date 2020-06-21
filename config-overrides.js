/* config-overrides.js */

const rewireYAML = require('react-app-rewire-yaml');

module.exports = function override(config, env) {
    // ...
    // config = rewireYAML(config, env);
    // ...
    console.log(JSON.stringify(config, null, 4));

    c2 = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.ya?ml$/,
            type: 'json', // Required by Webpack v4
            use: 'yaml-loader'
          }
        ]
      }
    }
    return c2;
}
