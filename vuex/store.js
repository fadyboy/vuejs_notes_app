import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // add Vuex as a plugin

// create root initial state object

const state = {
    notes: [],
    activeNote: {}
}

// define possible mutations for state
const mutations = {

    ADD_NOTE(state){
        const newNote = {
            text: 'New Note',
            favorite: false
        }
        state.notes.push(newNote)
        state.activeNote = newNote
    },

    EDIT_NOTE(state, text){
        state.activeNote.text = text
    },

    DELETE_NOTE(state, index) {
        state.notes.splice(index, 1)
        state.activeNote = state.notes[0]
    },

    TOGGLE_FAVORITE(state){
        state.activeNote.favorite = !state.activeNote.favorite
    },

    SET_ACTIVE_NOTE(state, note){
        state.activeNote = note
    }
    
}

const getters = {
    activeNote: state => state.activeNote,
    notes: state => state.notes,
    activeNoteText: state => state.activeNote.text
}

const actions = {
    addNote: ({ commit })=>{
        commit('ADD_NOTE')
    },
    deleteNote: ({ commit })=>{
        commit('DELETE_NOTE')
    },
    editNote: ({ commit }, e)=>{
        commit('EDIT_NOTE', e.target.value)
    },
    updateActiveNote: ({ commit }, note)=>{
        commit('SET_ACTIVE_NOTE', note)
    },
    toggleFavorite: ({ commit })=>{
        commit('TOGGLE_FAVORITE')
    },
    filterNotes: ({ commit }, notesDisplayed)=>{
        commit('FILTER_NOTES')
    }
}

// create Vuex instance by combining state and mutations objects and export to Vuex store for use by components

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});