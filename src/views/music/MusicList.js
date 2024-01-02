import React, { useState, useEffect } from "react";
import MusicRow from "./MusicRow";

import { observer, inject } from 'mobx-react';

const MusicList = props => {
    console.log('musicList props', props);
    const [list, setList] = useState([]);

    const changeMsg = () => {

    }

    useEffect(() => {
        const res = [
            { id: 1, name: '稻香' },
            { id: 2, name: '等你下课' },
            { id: 3, name: '一路向北' }
        ]
        setList(res)
        return undefined;
    }, [])
    return (
        <div>
            <h1>音乐列表</h1>
            {
                list.map(ele => (
                    <MusicRow key={ele.id} music={ele}/>
                ))
            }

            <h1>{props.store.msg}</h1>
            <button onClick={() => changeMsg()}>修改store中的msg， msg可以自动更新</button>
        </div>
    ) 
}

// inject('store')() 向组件中注入store数据
// observer() 把当前组件变成观察者，当store中的数据变化时，页面组件自动更新

export default inject('store')(observer(MusicList))