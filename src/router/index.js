import { createRouter, createWebHistory } from 'vue-router';
import loginPageView from '@/views/loginPageView.vue';
import EsqueceuSenhaView from '@/views/EsqueceuSenhaView.vue';
import codigoVerificacaoView from '@/views/codigoVerificacaoView.vue';
import novaSenhaView from '@/views/novaSenhaView.vue';
import HomeView from '@/views/HomeView.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import FullLayout from '@/layouts/FullLayout.vue';
import gerenciamentoAcademicoView from '@/views/gerenciamentoAcademicoView.vue';
import detalhesConselhoView from '@/views/detalhesConselhoView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blankLayout',
      component: BlankLayout,
      children: [
        {
          path: '/home', // Corrigido: adicionada a barra no início
          name: 'Página principal',
          component: HomeView
        },
        {
          path: '/gerenciamento', 
          name: 'Gerenciamento',
          component: gerenciamentoAcademicoView
        },
        {
          path: '/home', // Corrigido: adicionada a barra no início
          name: 'Página principal',
          component: HomeView
        },
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
          path: '/historico', 
          name: 'Histórico Conselhos',
          component: detalhesConselhoView
        },
      
      ]
    },
  ],
});

export default router;
