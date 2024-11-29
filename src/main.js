import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importação do roteador
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import { createPinia } from 'pinia';


createApp(App)
  .use(router)
  .use(createPinia())
  .use(mdiVue, {icons: mdijs})
  .mount('#app');
