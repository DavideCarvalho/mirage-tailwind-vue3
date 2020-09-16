import { createApp } from 'vue';
import App from './App.vue';
import server from './server';
import './registerServiceWorker';
import './assets/css/tailwind.css';

server();

createApp(App).mount('#app');
