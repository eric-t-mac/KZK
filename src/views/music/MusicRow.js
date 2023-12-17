import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";

const MusicRow = props => {
    const { music } = props;
    const navigate = useNavigate();
    const skipToDetail = () => {
        console.log('musicRow props', props);
        // 编程式路由跳转
        navigate(`/music/detail/${music.id}/${music.name}`)
    }
    return (
        <div>
            <span>{music.id}</span>
            <span>---</span>
            <span>{music.name}</span>
            <span>---</span>
            <span onClick={skipToDetail} >跳转</span>
        </div>
    )
}

// 给无状态组件添加props数据类型校验
MusicRow.propTypes = {
    music: PropTypes.object.isRequired
}

export default MusicRow;