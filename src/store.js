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
            console.log('ipis today ', data)
        }
    },
    actions: {
        async addData({ commit}) {
            let data = await Vue.prototype.$auth.getUser();
            commit('setIppis', data.ippis)
             console.log('data ', data.ippis)
        }
    },
    getters: {
        getIppis(state) {
            return state.ippis;
        }
    }
})

export default store;