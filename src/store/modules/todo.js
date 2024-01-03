import {
    makeObservable,
    observable,
    action,
    computed,
    makeAutoObservable
} from 'mobx'

function TodoStore() {
    const todoStore = {
        list: [
            {id: 1, task: 'run'},
            {id: 2, task: 'swim'}
        ],
        addTask(payload) {
            this.list.push({id: Date.now(), task: payload})
        },
        delTask(payload) {
            this.list = this.list.filter(ele => ele.id !== payload)
        },
        // 一旦变成计算属性，则被当成变量来使用 todo.total，一般使用是两个或者两个以上变量发生变化产生的新结果
        // 这相当是Vuex中 getters
        get total() {
            return this.list.length
        }
    }
    makeObservable(todoStore, {
        list: observable,
        addTask: action,
        delTask: action,
        total: computed
    })
    return todoStore
}

export default TodoStore()

