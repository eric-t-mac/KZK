import React from "react";

import routes from "../../views";
import { Route, Routes, Navigate } from 'react-router-dom';
export default props => {
    // 生成路由匹配规则，当url和Route.path匹配成功时，显示当前配对成功的Route.component
    // v6版本前，凡是被 Route 组件直接包裹的React组件中，其props上都有路由相关的API
    // v6版本前，Switch => Route 
    // Switch作用：用于把 Route 数组组件包裹起来，当Url变化时，从上到下进行匹配，匹配成功即终止
    // <Switch>
    //     <Route path="/a"></Route>
    //     <Route path="/a/"></Route>
    // </Switch>
    // v6版本，Routes => Route，且Route移除了exact，exact在v5是作为精准匹配，在Navlink中也有添加

    const createRoutes = () => {
        return (
            <Routes>
                {/* 
                    在生成 Route 数组时，其外层不能包裹任何HTML节点，它的直接父组件只能是 Routes
                */}
                {
                    routes.map(ele => (
                        /* 传递函数或者类 */
                        <Route
                            key={ele.id}
                            path={ele.path}
                            Component={ele.component}
                        />
                        /* 传递组件作为React元素 */
                        // <Route key={ele.id} path={ele.path} element={ele.component} />
                    ))
                }
                {/* 初始渲染时重定向 */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }
    return (
        <div className="re-main">
            {createRoutes()}
        </div>
    )
}