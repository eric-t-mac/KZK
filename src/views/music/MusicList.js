import React, { useState, useEffect } from "react";
import MusicRow from "./MusicRow";

export default props => {
    const [list, setList] = useState([]);
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
        </div>
    )
}