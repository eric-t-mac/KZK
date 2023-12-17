import React from "react";
import { useParams } from "react-router";

export default props => {
    const { id, name } = useParams();

    console.log('musicDetail params', id);
    return (
        <div>
            <h1>音乐详情</h1>
            <h1>{id}</h1>
            <h1>{name}</h1>
        </div>
    )
}