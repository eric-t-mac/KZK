import React from "react";

import { NavLink } from "react-router-dom";
import routes from "../../views";
export default props => {
    // 用于生成菜单
    const createNavLink = () => {
        return routes.map(ele => (
            <div key={ele.id}>
                <NavLink
                    to={ele.path}
                    className={({ isActive }) => isActive ? 'on' : ''}
                >
                    {ele.text}
                </NavLink>
            </div>
        ))
    }

    return (
        <div className="re-sider">
            {createNavLink()}
        </div>
    )
}