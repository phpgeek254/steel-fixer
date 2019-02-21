import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {EventBus} from "./EventBus";
import router from './Router';
import {Column} from "./Objects/Column";
import {OCCUPANCY_TYPE_LOADS} from "./Objects/BuildingType";
import {STEEL_BARS} from "./Objects/SteelBars";
import {CONCRETE} from "./Objects/Concrete";
import {SLAB} from "./Objects/Slab";
import {BEAM} from "./Objects/Beam";

let Marker = require('markerjs');

Vue.use(Vuetify);

Object.defineProperty(Vue.prototype, 'Makerjs', { value: Marker});
// Column:
Object.defineProperty(Vue.prototype, 'COLUMN', { value: Column});
// Steel Bars
Object.defineProperty(Vue.prototype, 'STEEL_BARS', { value: STEEL_BARS});
// Concrete
Object.defineProperty(Vue.prototype, 'CONCRETE', { value: CONCRETE});
// Beam
Object.defineProperty(Vue.prototype, 'BEAM', {value: BEAM});

// Slab
Object.defineProperty(Vue.prototype, 'SLAB', {value: SLAB});

// Live loads  on occupancy types
Object.defineProperty(Vue.prototype, 'OCCUPANCY_TYPE_LOADS', {value: OCCUPANCY_TYPE_LOADS});


Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, 'EventBus', {value: EventBus});

import store from './Store'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
