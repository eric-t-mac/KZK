import React, { useState, useEffect } from "react";
import MusicRow from "./MusicRow";

import { observer, inject } from 'mobx-react';
import { fetchQqMusic } from "../../utils/api";

// inject('store')() 向组件中注入store数据
// observer() 把当前组件变成观察者，当store中的数据变化时，页面组件自动更新
export default inject('store')(observer(
    props => {
        console.log('musicList props', props);

        const { msg, secondsPassed, music } = props.store;
        const changeMsgs = () => {
            props.store.changeMsg('hello 修改成功')
        }
        const test = () => {
            props.store.increase()
        }

        // 分页功能因接口不生效，作代码演示
        let [page, setPage] = useState(1);

        // 开发原则：React中建议一切外部数据都从props进来
        useEffect(async () => {
            const str = `_=1704294660122&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=1&uin=596508302&g_tk_new_20200303=291690059&g_tk=291690059&hostUin=0&is_xml=0&key=%E5%91%A8%E6%9D%B0%E4%BC%A6`
            const params = {}
            str.split('&').map(ele => {
                let arr = ele.split('=');
                params[arr[0]] = arr[1];
            })
            // 正编码 encodeURL('张杰')
            // 反编码 
            params.key = decodeURI(params.key);
            params.p = 3

            // mobx action
            music.changeList(params);
            return undefined
        }, [page]) // 当page发生变化时，会自动执行当前副作用

        const changePage = flag => {
            if (flag === 'prev' && page <= 1) return alert('已经是第一页了')
            setPage(flag === 'next' ? ++page : --page)
        }
        return (
            <div>
                <h1>音乐列表</h1>
                {
                    music.list && music.list.map(ele => (
                        <MusicRow key={ele.id} music={ele} />
                    ))
                }
                <br />
                <p>当前页为{page}</p>
                <button onClick={() => changePage('prev')}>上一页</button>
                <button onClick={() => changePage('next')}>下一页</button>
                <br />
                <hr />
                <h1>{msg}</h1>
                <button onClick={() => changeMsgs()}>修改store中的msg， msg可以自动更新</button>
                <h1>{secondsPassed}</h1>
                <button onClick={() => test()}>修改store中的secondsPassed， secondsPassed可以自动更新</button>
            </div>
        )
    }
))

