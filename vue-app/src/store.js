import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { serverUrl } from './helpers/utils'

Vue.use(Vuex)

export const SET_GREETING_MESSAGE_MUTATION = 'SET_GREETING_MESSAGE'
export const SET_POCKETS_MUTATION = 'SET_POCKETS'
export const SET_URL_KEY_MUTATION = 'SET_URL_KEY'
export const FETCH_USER_POCKET_DATA_ACTION = 'fetchUserPocketData'

export default new Vuex.Store({
    state: {
        pockets: [],
        modalData: { displayed: false },
        urlKey: null,
        greetingMessage: null
    },

    getters: {

    },

    actions: {
        fetchUserPocketData({ commit }, key) {
            axios.get(`${serverUrl}/pockets/${ key }`)
                .then((response) => {
                    commit(SET_GREETING_MESSAGE_MUTATION,
                        `Season's greetings, ${response.data.user}`)
                
                    const pockets = response.data.pockets
                    const urlKey = key
                    for (let i = 0; i < 25; i++) {
                        const pocketOfDay = pockets.find((pocket) => pocket.dayNum === i + 1)
                        if (!pocketOfDay) {
                            pockets.push({ urlKey: urlKey, dayNum: (i + 1), pokeId: null })
                        }
                    }
                    pockets.sort((p1, p2) => p1.dayNum - p2.dayNum)
                    commit(SET_POCKETS_MUTATION, pockets)
                }).catch((error) => {
                    if (error.response) {
                        console.log(error.response.status)
                        console.log(error.response.message)
                        commit(SET_GREETING_MESSAGE_MUTATION,
                            'Please access this site using a valid URL key')
                    } else {
                        commit(SET_GREETING_MESSAGE_MUTATION, 'Network Connection Unavailable')
                    }
                })
        }
    },

    mutations: {
        SET_GREETING_MESSAGE: (state, greetingMessage) => {
            state.greetingMessage = greetingMessage
        },
        SET_URL_KEY: (state, urlKey) => { state.urlKey = urlKey },
        SET_POCKETS: (state, pockets) => { state.pockets = pockets }
    },

})
