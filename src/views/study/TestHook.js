import React, { useState, useEffect } from "react";

// Hooks 一套API， 用于解决函数式组建中缺少类组件相关特性的问题

// 无状态组件，它只有一个好处——性能高
// 天然缺陷：没有this，没有state状态，没有生命周期，没有上下文、没有ref

const TestHooks = (props) => {
  // 使用useState定义一个声明式变量count，当count变化时视图自动更新
  // setCount() 是一个方法，它专门用于改变 count 的
  let [count, setCount] = useState(1000);

  let [list, setList] = useState([]);
  let timer = null;
  // 使用React的生命周期特性
  // 语法：uesEffect(fn, [])
//   在同一个函数式组件中，可以多次使用useEffect

  useEffect(() => {
    // 相当于是 componentDidMount()
    timer = setTimeout(() => {
      let res = [
        { id: 1, name: "zhangsan 1" },
        { id: 2, name: "zhangsan 2" },
        { id: 3, name: "zhangsan 3" },
        { id: 4, name: "zhangsan 4" },
      ];
      setList(res);
    }, 2000);
    // 第一个参数是函数，它必须给一个return
    // 相当于是 componentWillUnmount()
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // 相当于是 componentDidMount()
    // 可开启占内存的长连接
    return () => {
      // 相当于是 componentWillUnmount()
      // 当组件销毁时，会被调用
      // 为了应用程序的性能优化，要关闭这个长连接
    };
  }, []);
  // 第二个参数是数组
  // 相当于是 componentDidUpdate()
  return (
    <div>
      <h1>测试Hooks</h1>
      <hr />
      <h1>{count}</h1>
      <button onClick={() => setCount(++count)}>加</button>
      <button onClick={() => setCount(--count)}>减</button>
      {list.map((ele) => (
        <div key={ele.id}>{ele.name}</div>
      ))}
    </div>
  );
};

export default TestHooks;
