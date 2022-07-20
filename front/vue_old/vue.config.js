const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,  
  devServer: {
    proxy: {
      '/api' : {
      target: 'http://192.168.0.81:8081',
      changeOrigin: true
      }
    }
    }
  }
)