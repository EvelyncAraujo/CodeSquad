import { createRouter, createWebHistory } from 'vue-router';
import loginPageView from '@/views/loginPageView.vue';
import EsqueceuSenhaView from '@/views/EsqueceuSenhaView.vue';
import codigoVerificacaoView from '@/views/codigoVerificacaoView.vue';
import novaSenhaView from '@/views/novaSenhaView.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import FullLayout from '@/layouts/FullLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blankLayout',
      component: BlankLayout,
      children: [
      ]
    },
    {
      path: '/',
      name: 'fullLayout',
      component: FullLayout,
      children: [
        {
          path: '/login', 
          name: 'Login',
          component: loginPageView,
        },
        {
          path: '/esquecer', 
          name: 'EsqueceuSenha',
          component: EsqueceuSenhaView
        },
        {
          path: '/verificacao', 
          name: 'CodVerificação',
          component: codigoVerificacaoView
        },
        {
          path: '/recuperacao', 
          name: 'Nova Senha',
          component: novaSenhaView
        },
        {
          path: '/gerenciamento', 
          name: 'Gerenciamento',
          component: geren
        },
      ]
    },
  ],
});

export default router;
