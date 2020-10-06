import Vue from 'vue'
import Vuex from 'vuex'
import { pokeData } from './pokeData'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pockets: [],
        modalData: { displayed: false },
        pokeDataList: pokeData
    },

    getters: {

    },

    mutations: {

    },

    actions: {

    }
})
