import Vue from 'vue';
import Vuex from  'vuex';

import Column from './Modules/Column'
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: { Column, }
})
