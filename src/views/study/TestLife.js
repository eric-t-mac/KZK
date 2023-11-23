import React from 'react'

// 三个阶段：装载阶段（3）、更新阶段（2）、销毁阶段（1）

// 当React组件初始化时，JSX的DOM结构会在内存里创建成虚拟DOM，就是一个JSON文件，JSON文件会详细的描述这些节点
// 当setState的时候，同样会在内存中生成一个新的虚拟DOM，会触发Diff运算，将初始的虚拟DOM和当前新的虚拟DOM进行比对，
// 找出最小差异，并将最小差异相关的节点（也就是脏节点）进行真实DOM更新
export default class TestLife extends React.Component {
    /* 装载阶段（3） */ 
    // 执行顺序：constructor / render / componentDidMount

    // 构造器
    // super必须是第一个行代码，声明式变量定义在 this.state 中
    // 在构造器中，props 和 state 不要交叉赋值，它俩没有任何关系
    // 在构造器中，不要执行 this.setState()
    // 在构造器中，不要开启异步任务，比如掉接口、定时器等
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('---------constructor');
    }

    // 相当于Vue中mounted()
    // 它标识DDM初始化完成，所有虚拟DOM都已经被渲染成真实的DOM了
    // 一般在这里，可以掉接口、定时器、DOM操作
    componentDidMount() {
        console.log('---------componentDidMount');
    }

    /* 更新阶段（2） */
    // 这是一个开关，用于控制是否更新
    // 询问React，我该更新界面？
    // 这个生命周期，用于性能优化，我们可以精确地控制某些state变量发生变化时不更新视图
    // 实际工作中很少用，一般函数式组件（PureComponent）作为替代解决
    shouldComponentUpdate(nextProps, nextState) {
        console.log('---------shouldComponentUpdate');
        console.log('开关打开state', nextState);

        if(nextState.count > 10) {
            return false
        } else {
            return true
        }
    }
    // 相当于Vue中的updated()
    // 表示DOM已经更新完成
    // 在该生命周期中，同样不要使用this.setState()
    componentDidUpdate() {
        console.log('---------componentDidUpdate');
    }
   
    /* 销毁阶段（1） */
    // 相当于Vue中的beforeDistory()
    // 关闭长连接、定时器、清缓存
    componentWillUnmount() {
        console.log('---------componentWillUnmount');
    }

    // render() 非常特殊
    // 它是React类组件中唯一的一个必须的声明周期
    // 它在装载阶段和更新阶段都会运行
    // 当state发生变化时，render执行二次渲染，是根据Diff运算的脏节点来更新界面，不是全部更新
    // 在render的return之前可以进行业务逻辑操作
    // 在render()或者自定义的渲染函数中，不能使用 this.setState()  
    // reason:this.setState() 的调用会触发组件的更新，并最终导致 render() 方法被调用。如果在 render() 中再次调用 this.setState()，会导致无限循环更新。
    render() {
        console.log('---------render');

        const { count } = this.state;
        return (
            <div>
                <h1>测试声明周期</h1>
                <hr />
                <h1>{count}</h1>
                <button onClick={() => this.setState({count: count+1})}>改变count</button>
            </div>
        )
    }
}