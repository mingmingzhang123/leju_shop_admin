const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://leju.bufan.cloud/api',//跨域的域名
        changeOrigin:true//是否开启跨域
      }
    }
  }
})
