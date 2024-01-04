// 在React环境中，如何实现“代码分割”？
// 也是性能优化的标准

// npm install @loadable/component -S
// 把所有路由匹配组件都写成 const Home = loadable(() => import('./Home.js'))
// 如果报了 动态import 语法错误，或者@babel/core在7.8.0以下的，请安装这个babel插件
// npm install --save-dev @babel/plugin-syntax-dynamic-import
// 在 babel.config.js 中添加一个plugins配置，重启项目即可
import React from 'react';
import loadable from '@loadable/component'
const TestJsx = loadable(() => import('./study/TestJsx'));
const TestProps = loadable(() => import('./study/TestProps'));
const TestEvent = loadable(() => import('./study/TestEvent'));
const TestState = loadable(() => import('./study/TestState'));
const TestCondition = loadable(() => import('./study/TestCondition'));
const TestList = loadable(() => import('./study/TestList'));
const TestForm = loadable(() => import('./study/TestForm'));
const TestLife = loadable(() => import('./study/TestLife'));
const TestLang = loadable(() => import('./study/TestLang'));
const TestLift = loadable(() => import('./study/TestLift'));
const TestCombine = loadable(() => import('./study/TestCombine'));
const TestContext = loadable(() => import('./study/TestContext'));
const TestHoc = loadable(() => import('./study/TestHoc'));
const TestTypes = loadable(() => import('./study/TestTypes'));
const TestHooks = loadable(() => import('./study/TestHook'));

const MusicList = loadable(() => import('./music/MusicList'));
const MusicDetail = loadable(() => import('./music/MusicDetail'));

const TodoList = loadable(() => import('./todo-mobx/TodoList.js'))

const TestAntd = loadable(() => import('./antd/TestAntd.js'))

import {
    AppstoreOutlined,   // React类
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

const routes = [
    {
        id: 10,
        text: '学习React',
        icon: <MenuFoldOutlined />,
        children: [
            {
                id: 1010,
                text: '学习JSX',
                path: '/',
                component: TestJsx
            },
            {
                id: 1011,
                text: '学习props',
                path: '/props',
                component: TestProps
            },
            {
                id: 1012,
                text: '事件绑定',
                path: '/event',
                component: TestEvent
            },
            {
                id: 1013,
                text: '学习State',
                path: '/state',
                component: TestState
            },
            {
                id: 1014,
                text: '条件渲染',
                path: '/condition',
                component: TestCondition
            },
            {
                id: 1015,
                text: '列表渲染',
                path: '/list',
                component: TestList
            },
            {
                id: 1016,
                text: '受控表单',
                path: '/form',
                component: TestForm
            },
            {
                id: 1017,
                text: '生命周期',
                path: '/life',
                component: TestLife
            },
            {
                id: 1018,
                text: '父子组件通信',
                path: '/lang',
                component: TestLang
            },
            {
                id: 1019,
                text: '状态提升',
                path: '/lift',
                component: TestLift
            },
            {
                id: 1020,
                text: '组合思想',
                path: '/combine',
                component: TestCombine
            },
            {
                id: 1021,
                text: '上下文',
                path: '/context',
                component: TestContext
            },
            {
                id: 1022,
                text: '高阶组件',
                path: '/hoc',
                component: TestHoc
            },
            {
                id: 1023,
                text: '类型检查',
                path: '/types',
                component: TestTypes
            },
            {
                id: 1024,
                text: '使用Hooks',
                path: '/hooks',
                component: TestHooks
            }
        ]
    },
    {
        id: 11,
        text: '音乐管理',
        icon: <ContainerOutlined />,
        children: [
            {
                id: 1110,
                text: 'Mobx音乐列表',
                path: '/music',
                component: MusicList,
                children: [
                    {
                        id: 111010,
                        path: '/music/detail/:id/:name',
                        component: MusicDetail
                    }
                ]
            },
            {
                id: 1126,
                text: 'TODOLIST',
                path: '/todo',
                component: TodoList
            }
        ]
    },
    {
        id: 12,
        text: 'Antd学习',
        icon: <DesktopOutlined />,
        children: [
            {
                id: 1210,
                text: '使用Antd',
                path: '/antd',
                component: TestAntd
            }
        ]
    }
]
export default routes;