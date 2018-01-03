import Vue from 'vue';
import Index from './index.vue';

const app = new Vue({ render: h => h(Index) });

app.$mount('#app');
