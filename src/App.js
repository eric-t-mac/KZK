import React from 'react'

// import TestJsx from './views/study/TestJsx'
// import TestProps from './views/study/TestProps'
// import TestEvent from './views/study/TestEvent'
// import TestState from './views/study/TestState'
// import TestCondition from './views/study/TestCondition'
// import TestList from './views/study/TestList'
// import TestForm from './views/study/TestForm'
// import TestLife from './views/study/TestLife'
// import TestLang from './views/study/TestLang'
// import TestLift from './views/study/TestLift'
// import TestCombine from './views/study/TestCombine'
// import TestContext from './views/study/TestContext'
// import TestHoc from './views/study/TestHoc'
// import TestTypes from './views/study/TestTypes'
// import TestHooks from './views/study/TestHook'
import { Layout } from './components';

import { ThemeCtx, themes } from './utils/theme'

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
      <Layout></Layout>
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
