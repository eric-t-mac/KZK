// 使用 mobx 这个库，定义并创建一个 store
// mobx-react 这个库，用于把 mobx 和 react组件连接起来

// mobx 5+  mobx-react 6+
// mobx 6+  mobx-react 7+

import {
    observable,
    action,
    makeAutoObservable // 可被观察的
} from 'mobx';

function store() {
    return makeAutoObservable({
        msg: 'hello mobx',
        changeMsg(payload) {
            this.msg = payload;
        }
    })
}
class Store {
    // 将 makeAutoObservable 放在属性声明之前
    constructor() {
        makeAutoObservable(this);
    }

    // 使用 observable 装饰器声明属性
    // @observable msg = 'hello 2009';
}

// export default new Store();
export default store();