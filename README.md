# 技术栈

- Webpack
- Babel
- ESlint
- React + React-Router-Dom
- Sass
- Axios
- Antd
- Mobx
- ES6

- Webpack

作用：是当下前端工程化环境中使用最为广泛的构建工具，它的作用是把比较新的前端技术和文件模块，编译打包成浏览器能够识别、并且能够尽可能兼容主流浏览器的代码（HTML、CSS、ES5），它就是一个打包器。

## 1、安装 webpack

- webpack 是核心库，它提供了很多 API，可以用于编程
- webpack-cli 是命令行工具，它提供了一些很好用的命令行

cnpm install webpack -g
cnpm install webpack-cli -g
cnpm install webpack -D
cnpm install webpack-cli -D

- 使用配置文件
  webpack 运行或打包时，默认使用 webpack.config.js 这个文件。

- webpack-dev-server
  它是使用 express 来编写的用于创建本地 node 服务器的第三方包
  ```
  webpack serve --config react.config.js
  ```

入口
出口 S
loaders
plugins

## react-router-dom

- 官网： https://v5.reactrouter.com/web/api/BrowserRouter
- 安装：npm install react-router-dom -S
- 常用组件：HashRouter/BrowserRouter，Router，NavLink/Link，Redirect，Switch
- 高阶组件：withRouter
- 编程式路由跳转、路由动态传递

### 三个问题：

1. url 如何跳转，如何改变 url
2. 一一对应的匹配规则如何定义
3. 椅子放在哪里

## 状态管理

状态，就是数据。状态管理工具，是用来对应用程序中的数据流进行科学地管理。
最早出现状态管理思想的是 Flux（FaceBook 推出的一套设计模式，解决了数据管理的问题），Flux 只是一套数据流管理的指导思想、设计模式。

mobx + mobx-react 小项目经常用
- mobx 只是用于定义 store
- mobx-react 是帮助我们在 React 组件中使用 store，借助了 React 上下文和高阶组件
- Provider组件， inject('store')() observer()

redux + react-redux 大项目经常用
- redux 只是定义 store
- react-redux 是帮助我们在 React 组件中使用 store，借助了 React 上下文和高阶组件

1、如何安装 mobx？

- cnpm i mobx -S
- 在 src 中新建 store/index.js，代码如下：

```
import { makeAutoObservable } from 'mobx'
function store() {
    return makeAutoObservable({
        msg: 'hello mobx',
        changeMsg(payload) {
            this.msg = payload; // 使用 this.msg 来引用 msg 属性
        },
    })
}
export default store()
```

- cnpm i mobx-react -S
- 在 App.js 中，代码如下

```
import { Provider } from 'mobx-react'
import store from './store/index.js'

export default function App() {
  return(
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
```

- 在页面组件中代码如下：

```
import { inject, observer } from 'mobx-react'
export default inject('store')(observer(props=>()))
```

- 在页面中，使用 props.store 来访问 共享的数据 和 action 方法。
