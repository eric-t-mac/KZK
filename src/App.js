import React from 'react'

// import TestJsx from './views/study/TestJsx'

import { Layout } from './components';

import { ThemeCtx, themes } from './utils/theme';

// mobx-react的使用，用于把mobx store 和 react 组件组装起来
import { Provider } from 'mobx-react';
import store from './store';

// const ele = <h1>Hello React 2009</h1>

// 类组件，组件定义
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       theme: themes.light
//     }
//   }

//   toggleTheme() {
//     this.setState(state => ({ theme: Math.random() > 0.5 ? themes.light : themes.dark }))
//   }

//   render() {
//     let { theme } = this.state
//     return (
//       <TestHooks />
//       // <ThemeCtx.Provider value={theme}>
//       //   <TestContext />
//       //   <button onClick={() => this.toggleTheme()}>切换主题色</button>
//       // </ThemeCtx.Provider>
//     )
//   }
// }

// 路由
import { HashRouter, BrowserRouter } from 'react-router-dom';

// 函数式组件，组件定义
function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        {console.log('>>store', store)}
        <Layout></Layout>
      </Provider>
      {/*
        <TestProps
          msg2='hello msg'
          hello='hello child'
          bol={true}
          arr={[1,2,3,4]}
          user={{name:'小明', age:20}}
          ele={<div>react child ele</div>}
        />
      */}
      {/*<TestEvent msg='hello set state' />*/}
      {/* <TestHooks /> */}
    </HashRouter>
  )
}

export default App
