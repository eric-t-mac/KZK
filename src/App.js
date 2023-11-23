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
import TestLift from './views/study/TestLift'

// const ele = <h1>Hello React 2009</h1>

// 类组件，组件定义
class App extends React.Component {
  render() {
    return <TestLift />
  }
}


// 函数式组件，组件定义
// function App() {
//   return (
//     <div>
//       {/*
//         <TestProps
//           msg2='hello msg'
//           hello='hello child'
//           bol={true}
//           arr={[1,2,3,4]}
//           user={{name:'小明', age:20}}
//           ele={<div>react child ele</div>}
//         />
//       */}
//       {/*<TestEvent msg='hello set state' />*/}
//       <TestForm />
//     </div>
//   )
// }

export default App
