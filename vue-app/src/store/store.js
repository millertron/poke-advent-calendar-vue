import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SET_GREETING_MESSAGE_MUTATION, SET_POCKETS_MUTATION, SET_URL_KEY_MUTATION, SET_MODAL_DATA_MUTATION, SET_LANG_MUTATION } from './mutations'
import { CLOSE_MODAL_ACTION } from './actions'
import { OPEN_POCKET_MODAL_TITLE} from '../components/Modal'
import { ENGLISH } from '../helpers/lang'
import { serverUrl, totalPocketNum } from '../helpers/utils'

Vue.use(Vuex)
const OPEN_COMPLETION_MODAL_ACTION = 'openCompletionModal'

export default new Vuex.Store({
    state: {
        pockets: [],
        modalData: { displayed: false },
        urlKey: null,
        greetingMessage: null,
        lang: null
    },

    actions: {
        fetchUserPocketData({ dispatch, commit }, key) {
            axios.get(`${serverUrl}/pockets/${ key }`)
                .then((response) => {
                    const data = response.data
                    commit(SET_GREETING_MESSAGE_MUTATION,
                        `Season's greetings, ${data.user}!`)
                    
                    commit(SET_LANG_MUTATION, data.lang || ENGLISH)

                    const pockets = data.pockets
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
                    commit(SET_MODAL_DATA_MUTATION, { displayed: true, title: OPEN_POCKET_MODAL_TITLE[state.lang], pokeId: pokeId })
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

        async switchLang({ commit, state }, lang) {            
            commit(SET_LANG_MUTATION, lang)
            axios.patch(`${serverUrl}/users/`, { urlKey: state.urlKey, lang: lang })
                .catch(error => {
                    console.log('Failed to update language preference.', error)
                })
        }
    },

    mutations: {
        [SET_GREETING_MESSAGE_MUTATION]: (state, greetingMessage) => {
            state.greetingMessage = greetingMessage
        },
        [SET_URL_KEY_MUTATION]: (state, urlKey) => { state.urlKey = urlKey },
        [SET_POCKETS_MUTATION]: (state, pockets) => { state.pockets = pockets },
        [SET_MODAL_DATA_MUTATION]: (state, modalData) => { state.modalData = modalData },
        [SET_LANG_MUTATION]: (state, lang) => { state.lang = lang }
    },

})
