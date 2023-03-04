const { resolve } = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: resolve(__dirname, "src/preload.js"),
    },
  },
});
