import React, { useContext } from "react";
import { ThemeCtx } from "../../utils/theme";
// 上下文
// 在根组件上注入数据，然后所有组件树种的组件节点都可以访问
// 应用实践：状态管理就是借助了上下文实现数据传递的

export default class TestContext extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <ThemeCtx.Consumer>
                {
                    (value) => {
                        <div style={{color: value.color, background: value.background}}> 
                            <h1>测试上下文</h1>
                        </div>
                    }
                }
            </ThemeCtx.Consumer>
        )
    }
}