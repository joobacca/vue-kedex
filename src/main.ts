import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import FontAwesomeIcon from '@/plugins/fontawesome';
import App from './App.vue';
import router from './router';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);

// Vue-Router config
app.use(router);

// PrimeVue and components
app.use(PrimeVue);
app.component('Menubar', Menubar);
app.component('Card', Card);

// FontAwesome
app.component('fa', FontAwesomeIcon);

app.mount('#app');
