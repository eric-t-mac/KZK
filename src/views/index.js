// 在React环境中，如何实现“代码分割”？
// 也是性能优化的标准

// npm install @loadable/component -S
// 把所有路由匹配组件都写成 const Home = loadable(() => import('./Home.js'))
// 如果报了 动态import 语法错误，或者@babel/core在7.8.0以下的，请安装这个babel插件
// npm install --save-dev @babel/plugin-syntax-dynamic-import
// 在 babel.config.js 中添加一个plugins配置，重启项目即可
import loadable from '@loadable/component'
const TestJsx = loadable(() => import('./study/TestJsx'));

import TestProps from './study/TestProps';
import TestEvent from './study/TestEvent';
import TestState from './study/TestState';
import TestCondition from './study/TestCondition';
import TestList from './study/TestList';
import TestForm from './study/TestForm';
import TestLife from './study/TestLife';
import TestLang from './study/TestLang';
import TestLift from './study/TestLift';
import TestCombine from './study/TestCombine';
import TestContext from './study/TestContext';
import TestHoc from './study/TestHoc';
import TestTypes from './study/TestTypes';
import TestHooks from './study/TestHook';
import MusicList from './music/MusicList';
import MusicDetail from './music/MusicDetail';

const routes = [
    {
        id: 10,
        text: '学习JSX',
        path: '/',
        component: TestJsx
    },
    {
        id: 11,
        text: '学习props',
        path: '/props',
        component: TestProps
    },
    {
        id: 12,
        text: '事件绑定',
        path: '/event',
        component: TestEvent
    },
    {
        id: 13,
        text: '学习State',
        path: '/state',
        component: TestState
    },
    {
        id: 14,
        text: '条件渲染',
        path: '/condition',
        component: TestCondition
    },
    {
        id: 15,
        text: '列表渲染',
        path: '/list',
        component: TestList
    },
    {
        id: 16,
        text: '受控表单',
        path: '/form',
        component: TestForm
    },
    {
        id: 17,
        text: '生命周期',
        path: '/life',
        component: TestLife
    },
    {
        id: 18,
        text: '父子组件通信',
        path: '/lang',
        component: TestLang
    },
    {
        id: 19,
        text: '状态提升',
        path: '/lift',
        component: TestLift
    },
    {
        id: 20,
        text: '组合思想',
        path: '/combine',
        component: TestCombine
    },
    {
        id: 21,
        text: '上下文',
        path: '/context',
        component: TestContext
    },
    {
        id: 22,
        text: '高阶组件',
        path: '/hoc',
        component: TestHoc
    },
    {
        id: 23,
        text: '类型检查',
        path: '/types',
        component: TestTypes
    },
    {
        id: 24,
        text: '使用Hooks',
        path: '/hooks',
        component: TestHooks
    },
    {
        id: 25,
        text: '音乐列表',
        path: '/music',
        component: MusicList,
        children: [
            {
                id: 2501,
                path: '/music/detail/:id/:name',
                component: MusicDetail
            }
        ]
    }
]
export default routes;