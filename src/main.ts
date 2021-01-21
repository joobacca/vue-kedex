import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import FontAwesomeIcon from '@/plugins/fontawesome';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import App from './App.vue';
import router from './router';
import store from './store';

if ('serviceWorker' in navigator) {
  runtime.register();
}

const app = createApp(App).use(store);

// Vue-Router config
app.use(router);

// Vuex store config
app.use(store);

// PrimeVue and components
app.use(PrimeVue);
app.component('Menubar', Menubar);
app.component('Card', Card);

// FontAwesome
app.component('Fa', FontAwesomeIcon);

app.mount('#app');
