import Vue from "vue";
import Vuex from 'vuex'


Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        ippis: ''
    },
    mutations: {
        setIppis(state, data) {
            state.ippis = data
            console.log('ippis today ', data)
        }
    },

    getters: {
        getIppis(state) {
            return state.ippis;
        }
    }
})

export default store;