import Vue from 'vue';
import VueRouter from 'vue-router';

// Use lazy loading.
const HomePageComponent = () => import('./../components/Pages/Home');
const BeamComponent = () => import('./../components/Pages/Beams/Beam');
const ColumnComponent = () => import('./../components/Pages/Columns/Column');
const SlabComponent = () => import('./../components/Pages/Slab/Slab');

Vue.use(VueRouter);

// Define al the routes here.
const routes = [
    // Structure:
    // name, path, Component.
    {
        name: 'home',
        path: '/',
        component: HomePageComponent
    },

    // Beams Page
     {
        name: 'beams',
        path: '/beams',
        component: BeamComponent
    },

    // Columns.
    {
        name: 'columns',
        path: '/columns',
        component: ColumnComponent
    },

    // Slab
    {
        name: 'slabs',
        path: '/slabs',
        component: SlabComponent
    }
];

export default new VueRouter({
    routes: routes,
    mode: 'history',
});


