import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {EventBus} from "./EventBus";
import router from './Router';
import {Column} from "./Objects/Column";
import {Span} from "./Objects/Spans";
import Slab from "./components/Pages/Slab/Slab";

let Marker = require('markerjs');

Vue.use(Vuetify);

Object.defineProperty(Vue.prototype, 'Makerjs', { value: Marker});
// Column:
Object.defineProperty(Vue.prototype, 'COLUMN', { value: Column});
// Beam
Object.defineProperty(Vue.prototype, 'BEAM', {value: Span});

// Slab
Object.defineProperty(Vue.prototype, 'Slab', {value: Slab});

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, 'EventBus', {value: EventBus});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
