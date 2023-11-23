import React from "react";

const ReModal = props => {
    return (
        <div className="re-modal">
            <div className="re-modal-header"></div>
            <div className="re-modal-content"></div>
            <div className="re-modal-footer"></div>
        </div>
    )
}

export default class TestCombine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>测试组合</h1>
                <ReModal></ReModal>
            </div>
        )
    }
} 