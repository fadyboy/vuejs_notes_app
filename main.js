import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
    store, // inject the store to all components
    el: '#app',
    components: { App }
})