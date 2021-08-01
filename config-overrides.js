const { alias } = require("react-app-rewire-alias");

module.exports = {
  webpack: (config, env) => {
    alias({
      // define these based on your needs
      "@components": "./src/components",
      "@assets": "./src/assets",
      "@pages": "./src/pages",
      "@styles": "./src/styles",
      "@utils": "./src/base/utils",
      "@settings": "./src/base/settings",
      "@layout": "./src/components/_layout",
      "@common": "./src/components/_common",
      "@context": "./src/base/context",
      "@mocks": "./src/mocks",
    })(config);

    return config;
  },

  // ...
};
