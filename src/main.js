import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');
