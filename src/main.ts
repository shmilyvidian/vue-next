import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import antd from 'ant-design-vue';
import 'ant-design-vue/components/style.js';
import './index.css'

createApp(App)
    .use(antd)
    .use(router)
    .use(store)
    .mount('#app')
