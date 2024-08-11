// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })
module.exports = {
  devServer: {//正式部署要改
    proxy: {
      '/api': {
        // target: 'https://itstudio.bai3401.eu.org/api',
        target: 'https://www.itstudio.club/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  assetsDir: 'static'
};
