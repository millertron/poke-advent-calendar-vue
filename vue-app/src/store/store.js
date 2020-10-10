import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { serverUrl } from '../helpers/utils'
import { SET_GREETING_MESSAGE_MUTATION, SET_POCKETS_MUTATION, SET_URL_KEY_MUTATION, SET_MODAL_DATA_MUTATION } from './mutations'
import { CLOSE_MODAL_ACTION } from './actions'
import { OPEN_POCKET_MODAL_TITLE} from '../components/Modal'

Vue.use(Vuex)
const totalPocketNum = 3
const OPEN_COMPLETION_MODAL_ACTION = 'openCompletionModal'

export default new Vuex.Store({
    state: {
        pockets: [],
        modalData: { displayed: false },
        urlKey: null,
        greetingMessage: null
    },

    actions: {
        fetchUserPocketData({ dispatch, commit }, key) {
            axios.get(`${serverUrl}/pockets/${ key }`)
                .then((response) => {
                    commit(SET_GREETING_MESSAGE_MUTATION,
                        `Season's greetings, ${response.data.user}`)
                    
                    const pockets = response.data.pockets
                    console.log(pockets.length)
                    const fullPockets = pockets.length >= totalPocketNum
                    const urlKey = key
                    commit(SET_URL_KEY_MUTATION, urlKey)

                    for (let i = 0; i < 25; i++) {
                        const pocketOfDay = pockets.find((pocket) => pocket.dayNum === i + 1)
                        if (!pocketOfDay) {
                            pockets.push({ urlKey: urlKey, dayNum: (i + 1), pokeId: null })
                        }
                    }
                    pockets.sort((p1, p2) => p1.dayNum - p2.dayNum)
                    commit(SET_POCKETS_MUTATION, pockets)

                    if (fullPockets) {
                        dispatch(OPEN_COMPLETION_MODAL_ACTION)
                    }
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
        },

        sendOpenPocketRequest({ state }, dayNum) {
           return axios.post(`${serverUrl}/pockets/create`, { key: state.urlKey, dayNum: dayNum })
        },

        async requestOpenPocket({ dispatch, commit, state }, dayNum) {
            await dispatch('sendOpenPocketRequest', dayNum)
                .then(response => {
                    const pokeId = response.data.pokeId
                    const newPockets = state.pockets.map((pocket) => {
                        if (pocket.dayNum === response.data.dayNum) {
                            return { 
                                urlKey: pocket.urlKey,
                                dayNum: pocket.dayNum,
                                pokeId: pokeId
                            }
                        } else return pocket
                    })
                    commit(SET_POCKETS_MUTATION, newPockets)
                    commit(SET_MODAL_DATA_MUTATION, { displayed: true, title: OPEN_POCKET_MODAL_TITLE, pokeId: pokeId })
                }).catch(error => {
                    console.log('Failed to open pocket!', error)
                })
        },

        closePocketModal({ dispatch, state }) {
            if (state.pockets.filter((pocket) => pocket.pokeId !== null).length >= totalPocketNum) {
                dispatch(OPEN_COMPLETION_MODAL_ACTION)
            } else {
                dispatch(CLOSE_MODAL_ACTION)
            }
        },

        openCompletionModal({ commit }) {
            commit(SET_MODAL_DATA_MUTATION, { displayed: true, title: 'Merry Christmas!', message: 'complete'})
        },

        closeModal({ commit }) {
            commit(SET_MODAL_DATA_MUTATION, { displayed: false })
        },
    },

    mutations: {
        [SET_GREETING_MESSAGE_MUTATION]: (state, greetingMessage) => {
            state.greetingMessage = greetingMessage
        },
        [SET_URL_KEY_MUTATION]: (state, urlKey) => { state.urlKey = urlKey },
        [SET_POCKETS_MUTATION]: (state, pockets) => { state.pockets = pockets },
        [SET_MODAL_DATA_MUTATION]: (state, modalData) => { state.modalData = modalData },
    },

})
