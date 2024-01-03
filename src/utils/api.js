import axios from "axios";

export function fetchQqMusic() {
    return axios({
        url: '/splcloud/fcgi-bin/smartbox_new.fcg',
        method: 'GET',
        params: {}
    })
}

export default {
    fetchQqMusic
}