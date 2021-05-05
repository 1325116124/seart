import Vue from 'vue'
import App from './App'
import {myRequest} from "./utils/api.js"
import {loading} from './components/loading/loading.vue'

// Api函数polyfill（目前为实验版本，如不需要，可删除！）';
import Polyfill from './polyfill/polyfill';
Polyfill.init();

// 全局mixins，用于实现setData等功能';
import Mixin from './polyfill/mixins';
Vue.mixin(Mixin);

Vue.prototype.$myRequest = myRequest;
Vue.config.productionTip = false
Vue.component('loading',loading)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
