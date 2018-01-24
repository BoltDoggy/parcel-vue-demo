import Vue from 'vue';
// import Index from './index.vue';

const IndexImporter = import('./index.vue');

IndexImporter.then((Index) => {
    const app = new Vue({ render: h => h(Index) });

    app.$mount('#app');
});
