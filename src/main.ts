import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(router).use(PrimeVue).mount('#app');
