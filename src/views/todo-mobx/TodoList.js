import React, { useState } from "react";
import {
    inject,
    observer
} from 'mobx-react'

// inject('store')() 是高阶函数，把Provider上下文中的store数据，添加到组件的props中
// observer() 基于ES6 Proxy 来实现数据劫持的，当store变化时，页面自动更新。
export default inject('store')(observer(
    props => {
        const { todo } = props.store;
        console.log('todo', todo);

        const [task, setTask] = useState('')

        const confirm = (e) => {
            // 监听enter事件
            // console.log('confirm e', e);
            if (e.keyCode === 13) {
                // 向store.todo 的 list中添加一条task任务
                todo.addTask(task)
                // 清空表单
                setTask('')
            }
        }

        const delConfirm = (e, row) => {
            e.preventDefault(); 
            todo.delTask(row.id)
        }
        return (
            <>
                <h1>我的TODOLIST</h1>
                <hr />
                <input
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    onKeyUp={(e) => confirm(e)}
                />
                {
                    todo.list.map(ele => (
                        <div key={ele.id}>
                            <span>{ele.id}</span>
                            <span>--</span>
                            <span>{ele.task}</span>
                            <span>--</span>
                            <a onClick={(e) => delConfirm(e,ele)} href="https://baidu.com">删除</a>
                        </div>
                    ))
                }
                <h2>目前总共有 {todo.total} 条待完成的任务</h2>
            </>
        )
    }
))

// 在类组件中，使用mobx
// @inject('store')
// @observer
// class TodoList extends React.Component {

// }