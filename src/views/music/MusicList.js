import React, { useState, useEffect } from "react";
import MusicRow from "./MusicRow";

import { observer, inject } from 'mobx-react';
import { fetchQqMusic } from "../../utils/api";

const MusicList = props => {
    console.log('musicList props', props);
    const [list, setList] = useState([]);

    const { msg, secondsPassed,  } = props.store;
    const changeMsgs = () => {
        props.store.changeMsg('hello 修改成功')
    }
    const test = () => {
        props.store.increase()
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

    useEffect(() => {
        const str = `_=1704294660122&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=1&uin=596508302&g_tk_new_20200303=291690059&g_tk=291690059&hostUin=0&is_xml=0&key=%E5%91%A8%E6%9D%B0%E4%BC%A6`
        str.split('&').map(ele => {
            console.log('ele', ele);
        })
        fetchQqMusic({}).then(res => {
            console.log('音乐列表', res);
        }) 
        return undefined
    }, [])
    return (
        <div>
            <h1>音乐列表</h1>
            {
                list.map(ele => (
                    <MusicRow key={ele.id} music={ele} />
                ))
            }

            <h1>{msg}</h1>
            <button onClick={() => changeMsgs()}>修改store中的msg， msg可以自动更新</button>
            <h1>{secondsPassed}</h1>
            <button onClick={() => test()}>修改store中的secondsPassed， secondsPassed可以自动更新</button>
        </div>
    )
}

// inject('store')() 向组件中注入store数据
// observer() 把当前组件变成观察者，当store中的数据变化时，页面组件自动更新

export default inject('store')(observer(MusicList))