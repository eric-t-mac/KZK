import React from "react";
import PropTypes from 'prop-types';

const MusicRow = props => {
    const { music } = props;
    return (
        <div>
            <span>{music.id}</span>
            <span>---</span>
            <span>{music.name}</span>
            <span>---</span>
            <span>跳转</span>
        </div>
    )
}

// 给无状态组件添加props数据类型校验
MusicRow.propTypes = {
    music: PropTypes.object.isRequired
}

export default MusicRow;