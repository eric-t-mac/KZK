import React from "react";

// 高阶组件
// 作用：它是React中业务逻辑复用的一种解决方案
// 高阶组件是基于React组合特性而得来的一种设计模式、软件开发经验
// 高阶组件，也被称之为高阶函数、纯函数、容器组件

// 纯函数：唯一的输入等于唯一的输出
// npm i @babel/plugin-proposal-class-properties -D
// npm i @babel/plugin-proposal-decorators -D
import comment from "../../utils/comment";
// 第一种写法
// @comment
class TestHoc extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('props', this.props);
        const { list } = this.props;
        return (
            <>
                <h1>高阶组件测试</h1>
                <hr />
                {
                    list.map(ele => (
                        <div key={ele.id}>
                            <span>{ele.user}</span>
                            <span>----</span>
                            <span>{ele.content}</span>
                        </div>
                    ))
                }
            </>
        )
    }
}

// 第二种写法
export default comment(TestHoc)
// export default TestHoc