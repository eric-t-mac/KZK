import {
    makeObservable,
    observable,
    action,
    computed,
    makeAutoObservable
} from 'mobx'

function MusicStore() {
    return makeAutoObservable({
        reset() {
            this.secondsPassed = 0
        }
    })
}

export default MusicStore()