import { createRouter, createWebHistory } from 'vue-router';
import loginPageView from '@/views/loginPageView.vue';
import EsqueceuSenhaView from '@/views/EsqueceuSenhaView.vue';
import codigoVerificacaoView from '@/views/codigoVerificacaoView.vue';
import novaSenhaView from '@/views/novaSenhaView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
