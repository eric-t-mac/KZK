import React from "react";

import Sider from "./Sider";
import Header from "./Header";
import Main from "./Main";
import './style.scss';

export default props => {
  console.log('---test layout props', props);

    return (
        <div className="re-layout">
            <Sider />
            <Header />
            <Main />
        </div>
    )
}