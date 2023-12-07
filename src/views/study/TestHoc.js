import React from "react";

// 高阶组件
// 作用：它是React中业务逻辑复用的一种解决方案
// 高阶组件是基于React组合特性而得来的一种设计模式、软件开发经验
// 高阶组件，也被称之为高阶函数、纯函数、容器组件

// 纯函数：唯一的输入等于唯一的输出
// npm i @babel/plugin-proposal-class-properties -D
// npm i @babel/plugin-proposal-decorators -D
import { comment, roleHoc } from '../../utils/hoc';
// 装饰器，是ES6中新增的特性
// 装饰器有两个作用，其一用于修饰一个类，其二可以修饰类的方法

// 第一种写法
// @comment
// @roleHoc
class TestHoc extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('props', this.props);
        const { list, userinfo } = this.props;
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
                            
                            {
                                userinfo.role === 1 && [<span key="1">----</span>,<span key="2">删除</span>]
                            }
                        </div>
                    ))
                }
            </>
        )
    }
}

// 第二种写法
export default roleHoc(comment(TestHoc))
// export default TestHoc