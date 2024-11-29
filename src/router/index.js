import { createRouter, createWebHistory } from 'vue-router';
import loginPageView from '@/views/loginPageView.vue';
import EsqueceuSenhaView from '@/views/EsqueceuSenhaView.vue';
import codigoVerificacaoView from '@/views/codigoVerificacaoView.vue';
import novaSenhaView from '@/views/novaSenhaView.vue';
import HomeView from '@/views/HomeView.vue';
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
      path: '/home', // Corrigido: adicionada a barra no início
      name: 'Página principal',
      component: HomeView
    },

    {
      path: '/',
      name: 'fullLayout',
      component: FullLayout,
      children: [
      
        {
          path: '/login', // Corrigido: adicionada a barra no início
          name: 'Login',
          component: loginPageView,
        },
        {
          path: '/esquecer', // Corrigido: adicionada a barra no início
          name: 'EsqueceuSenha',
          component: EsqueceuSenhaView
        },
        {
          path: '/verificacao', // Corrigido: adicionada a barra no início
          name: 'CodVerificação',
          component: codigoVerificacaoView
        },
        {
          path: '/recuperacao', // Corrigido: adicionada a barra no início
          name: 'Nova Senha',
          component: novaSenhaView
        },
        {
          path: '/home',
          name: 'Home',
          component: HomeView,
        },
      ]
    },
  ],
});

export default router;
