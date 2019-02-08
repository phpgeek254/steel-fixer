import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {EventBus} from "./EventBus";
import router from './Router';

Vue.use(Vuetify);

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, 'EventBus', {value: EventBus});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
