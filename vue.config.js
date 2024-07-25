const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://www.itstudio.club',
        target: 'https://itstudio.bai3401.eu.org/api',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
