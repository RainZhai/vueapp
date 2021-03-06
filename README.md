# Vue 版移动端APP 

## 开发

```
$ git clone https://github.com/RainZhai/vueapp.git
$ cd vueapp
$ npm install
$ gulp serve
```
在浏览器中自动打开 http://localhost:3000

## 调试
- 默认开启 vue-devtools [chrome浏览器扩展](https://github.com/vuejs/vue-devtools), 生产环境自动关闭, 手动开启方式:

```
添加 Vue.config.devtools = true
```

### 目录结构

```
.
├── README.md           
├── dist                     // 项目build目录
├── logs                     // 生产环境日志目录
├── src                      // 生产目录
│   ├── api                  // API 请求
│   ├── assets               // css 和图片资源
│   ├── components           // 组件
│   ├── utils                // 工具函数
│   └── vuex            		 // vuex相关文件, store,action
│   └── config.js            // api url, cookie domain等配置文件
│   └── index.html           // 主页html
│   └── routes.js            // 路由配置
│   └── index.js             // 入口文件
├── .babelrc                 // babel配置
├── .eslintrc.json           // eslint配置
├── gulpfile.babel.js        // gulp配置, 使用gulp做为任务管理
├── History.md               // 更新日志
├── process.json             // pm2配置文件
├── server.js                // 生产环境启动server
├── webpack.config.dev.js    // 开发环境Webpack配置文件
├── webpack.config.js        // Webpack 配置文件
├── webpack-config.prod.js   // 生产环境Webpack 配置文件
.
```

## 生产环境构建  
 
```
$ gulp build 或 gulp serve:dist
```

## 线上布署
```
$ pm2 start process.json
```

## License
MIT
