import React from "react";
import PropTypes from 'prop-types';
// cnpm i prop-types -S
// 给类组件添加props类型校验
class Child1 extends React.Component {
    render() {
        let { list, msg, onChange } = this.props
        return (
            <div>
                <h2>我是 child1 子组件</h2>
                {
                    list.map(ele => (
                        <div key={ele}>{ele}</div>
                    ))
                }
                <h2 onClick={()=>onChange()}>{msg}</h2>
            </div>
        )
    }
}
Child1.propTypes = {
    list: PropTypes.array.isRequired,
    msg: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    // 枚举值
    gender: PropTypes.oneOf(['男', '女']).isRequired
}

// 给函数式组件添加props类型校验
const Child2 = props => (
    <div>
        <h2>我是 Child2 子组件</h2>
        <h2>{props.age}</h2>
    </div>
)

Child2.propTypes = {
    age: PropTypes.number.isRequired
}

export default class TestTypes extends React.Component {
  constructor(props) {
    super(props)
  } 

  render() {
    return (
        <>
            <h1>验证Props数据类型</h1>
            <hr />
            
            <Child1 
                list={[1,2,3,4,5]} 
                msg="hello child1"
                onChange={()=>console.log('test on change')}
                gender='男'
            />

            <Child2 age={10000} />
        </>
    )
  }
}
