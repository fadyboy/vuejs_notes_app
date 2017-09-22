import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// create root initial state object

const state = {
    notes: [],
    activeNote: {}
}

// define possible mutations for state
const mutations = {

}

// create Vuex instance by combining state and mutations objects and export to Vuex store for use by components

export default new Vuex.Store({
    state,
    mutations
});