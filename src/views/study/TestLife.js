import React from 'react'

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
    // 它标识DDM初始化完成，
    componentDidMount() {
        console.log('---------componentDidMount');
    }
    // 这是一个开关，用于控制是否更新
    // 询问React，我该更新界面？
    shouldComponentUpdate() {
        console.log('---------shouldComponentUpdate');
        return true
    }

    // 相当于Vue中的updated()
    componentDidUpdate() {
        console.log('---------componentDidUpdate');
    }
   
    // 相当于Vue中的beforeDistory()
    componentWillUnmount() {
        console.log('---------componentWillUnmount');
    }

    render() {
        console.log('---------render');

        const { count } = this.state;
        return (
            <div>
                <h1>测试声明周期</h1>
                <hr />
                <h1>{count}</h1>
                <button>改变count</button>
            </div>
        )
    }
}