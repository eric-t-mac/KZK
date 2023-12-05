import React, { createContext } from "react";

// 创建一个用于主题色的上下文
export const ThemeCtx = createContext();

export const themes = {
    light: {
        color: '#000',
        background: '#eee'
    },
    dark: {
        color:'#fff',
        background:'#222'
    }
}