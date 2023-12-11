import React from "react";

import Sider from "./Sider";
import Header from "./Header";
import Main from "./Main";

export default props => {
    return (
        <div className="re-layout">
            <Sider />
            <Header />
            <Main />
        </div>
    )
}