import Vue from 'vue'
import App from './App'
import {myRequest} from "./utils/api.js"
import {loading} from './components/loading/loading.vue'

Vue.prototype.$myRequest = myRequest;
Vue.config.productionTip = false
Vue.component('loading',loading)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
