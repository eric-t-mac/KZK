// 使用 mobx 这个库，定义并创建一个 store
// mobx-react 这个库，用于把 mobx 和 react组件连接起来

// mobx 5+  mobx-react 6+
// mobx 6+  mobx-react 7+

import {
    observable,
    makeObservable,
    action,
    makeAutoObservable // 可被观察的
} from 'mobx';

// 分modules
import TodoStore from './modules/todo'
import MusicStore from './modules/music'

/**
 * makeAutoObservable
 */
// function store() {
//     return makeAutoObservable({
//         msg: 'hello mobx',
//         secondsPassed: 0,
        
//         changeMsg(payload) {
//             console.log('payload', payload);
//             this.msg = payload; // 使用 this.msg 来引用 msg 属性
//         },
//         increase() {
//             this.secondsPassed += 1
//         },
//         reset() {
//             this.secondsPassed = 0
//         }
//     })
// }

/**
 * makeObservable
 */
function store1() {
    const storeInstance = {
        msg: 'hello mobx1',
        secondsPassed: 0,
        todo: TodoStore,
        music: MusicStore,
        changeMsg(payload) {
            console.log('payload', payload);
            this.msg = payload; // 使用 this.msg 来引用 msg 属性
        },
        increase() {
            this.secondsPassed += 1
        },
        reset() {
            this.secondsPassed = 0
        }
    };

    // 使用 makeObservable 添加观察者
    makeObservable(storeInstance, {
        msg: observable,
        secondsPassed: observable,
        changeMsg: action,
        increase: action,
        reset: action
    })

    return storeInstance
}

export default store1();

// mobx5 的写法
// 在mobx5中,是没有 makeObservable/makeAutoObservable这些api
// class Store {
//     constructor() {
//         this.todo = new TodoStore()
//     }
//     @observable msg = 'hello msg'
//     @action 
//     changeMsg() {

//     }
//     @computed
//     get total() {
//         return this.msg.length
//     }
// }