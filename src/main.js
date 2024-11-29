import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importação do roteador
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');

createApp(App)
  .use(router) // Usando o roteador
  .mount('#app');
