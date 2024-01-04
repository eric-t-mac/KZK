import React from "react";
import { Button } from 'antd';

export default props => {
    return (<>
        <h1>测试antd</h1>
        <hr />
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </>)
}