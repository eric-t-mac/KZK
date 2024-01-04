import {
    makeObservable,
    observable,
    action,
    computed,
    makeAutoObservable
} from 'mobx'

import {
    fetchQqMusic
} from '../../utils/api'

function MusicStore() {
    return makeAutoObservable({
        list: [],
        async changeList(payload) {
            const res = await fetchQqMusic(payload);
            this.list = res.song.itemlist
        }
    })
}

export default MusicStore()