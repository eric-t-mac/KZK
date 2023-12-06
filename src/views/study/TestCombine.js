import React from "react";

// 组合：复用UI

const ReModal = (props) => {
  const ConfirmBtn = () => (
    <span onClick={() => props.onOk && props.onOk()} className="info">确定</span>
  )
  const CancelBtn = () => (
    <span onClick={() => props.onCancel && props.onCancel()} className="info">取消</span>
  )
  const DeleteBtn = () => (
    <span onClick={() => props.onDelete && props.onDelete()} className="info">删除</span>
  )
  // 动态渲染btns按钮值
  function renderBtns() {
    switch (props.type) {
      case 'confirm':
        return (
          <div>
            <ConfirmBtn />
            <CancelBtn />
          </div>
        )
        break;
      case 'delete':
        return (
          <div>
            <CancelBtn />
            <DeleteBtn />
          </div>
        )
        break;
      default:
        return (
          <div>
            <ConfirmBtn />
          </div>
        )
    }
  }

  return (
    <div className="re-modal" style={{ width: props.tip ? '500px' : '410px' }}>
      {
        props.tip && <div className="re-modal-header">
          <span>{props.tip}</span>
          <span>X</span>
        </div>
      }
      <div className="re-modal-content">
        {props.children}
      </div>
      <div className="re-modal-footer">
        {renderBtns()}
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

  okHandle() {
    console.log('你点击了 确定 按钮');
  }
  cancelHandle() {
    console.log('你点击了 确定 按钮');
  }
  deleteHandle() {
    console.log('你点击了 删除 按钮');
  }

  render() {
    return (
      <div>
        <h1>测试组合</h1>
        <hr />
        {/* 确认框 */}
        <ReModal
          tip="编辑"
          type="confirm"
          onOk={() => this.okHandle()}
          onCancel={() => this.cancelHandle()}
        >
          <div>
            <span>用户名：</span>
            <input type="text" />
          </div>
          <div>
            <span>密码：</span>
            <input type="text" />
          </div>
        </ReModal>

        {/* 用于删除的弹框 */}
        <ReModal
          tip="删除"
          type="delete"
          onCancel={() => this.cancelHandle()}
          onDelete={() => this.deleteHandle()}
        >
          <div>
            你确定要删除吗？
          </div>
        </ReModal>

        <ReModal tip="删除">
          <div>
            你确定要删除吗？
          </div>
        </ReModal>

        {/* 无header */}
        <ReModal type="delete">
          <div>
            你确定要删除吗？
          </div>
        </ReModal> 


      </div>
    );
  }
}
