import React from "react";

const ReModal = (props) => {
  return (
    <div className="re-modal">
      <div className="re-modal-header">
        <span>{props.tip}</span>
        <span>X</span>
      </div>
      <div className="re-modal-content">
        <h4>你确定要删除吗？</h4>
        {props.children}
      </div>
      <div className="re-modal-footer">
        <span className="delete">删除</span>
        <span>取消</span>
        <span className="info">确定</span>
      </div>
    </div>
  );
};
// children 不用单一根节点包起来
export default class TestCombine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 动态渲染btns按钮值
    function renderBtns() {
        switch(props.type) {
            case 'confirm':
                return (<></>
                    // <span>取消</span>
                    // <span className="info">确定</span>
                )
                break;
        }
    }

    return (
      <div>
        <h1>测试组合</h1>
        <ReModal tip="编辑">
          <div>
            <span>用户名：</span>
            <input type="text" />
          </div>
          <div>
            <span>密码：</span>
            <input type="text" />
          </div>
        </ReModal>
      </div>
    );
  }
}
