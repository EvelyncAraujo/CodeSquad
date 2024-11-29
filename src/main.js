import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importação do roteador
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App);
app.use(createPinia());
app.mount('#app');

createApp(App)
  .use(router)
  .use(mdiVue, {icons: mdijs})
  .mount('#app');
