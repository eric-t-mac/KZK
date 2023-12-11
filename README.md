# 技术栈

* Webpack
* Babel
* ESlint
* React + React-Router-Dom
* Sass
* Axios
* Antd
* Mobx
* ES6

* Webpack

作用：是当下前端工程化环境中使用最为广泛的构建工具，它的作用是把比较新的前端技术和文件模块，编译打包成浏览器能够识别、并且能够尽可能兼容主流浏览器的代码（HTML、CSS、ES5），它就是一个打包器。

## 1、安装webpack

* webpack 是核心库，它提供了很多 API，可以用于编程
* webpack-cli 是命令行工具，它提供了一些很好用的命令行

cnpm install webpack -g
cnpm install webpack-cli -g
cnpm install webpack -D
cnpm install webpack-cli -D

* 使用配置文件
  webpack运行或打包时，默认使用 webpack.config.js这个文件。


* webpack-dev-server
  它是使用express来编写的用于创建本地node服务器的第三方包
  ```
  webpack serve --config react.config.js
  ```

入口
出口
loaders
plugins

## react-router-dom

* 官网： https://v5.reactrouter.com/web/api/BrowserRouter
* 安装：npm install react-router-dom -S
* 常用组件：HashRouter/BrowserRouter，Router，NavLink/Link，Redirect，Switch
* 高阶组件：withRouter
* 编程式路由跳转、路由动态传递