import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import loginPageView from '@/views/loginPageView.vue';
import EsqueceuSenhaView from '@/views/EsqueceuSenhaView.vue';
import codigoVerificacaoView from '@/views/codigoVerificacaoView.vue';
import novaSenhaView from '@/views/novaSenhaView.vue';
import HomeView from '@/views/HomeView.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import FullLayout from '@/layouts/FullLayout.vue';
import gerenciamentoAcademicoView from '@/views/gerenciamentoAcademicoView.vue';
import detalhesConselhoView from '@/views/detalhesConselhoView.vue';
import nupeConselhoView from '@/views/nupeConselhoView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blankLayout',
      component: BlankLayout,
      meta: { requiresAuth: true },
      children: [
     
        {
          path: '/gerenciamento', 
          name: 'Gerenciamento',
          component: gerenciamentoAcademicoView
        },
        {
          path: '/home', 
          name: 'Página principal',
          component: HomeView
        },
        {
          path: '/conselhoNupe', 
          name: 'nupeconselho',
          component: nupeConselhoView
        },
      ] 
    },
    {
      path: '/',
      name: 'fullLayout',
      component: FullLayout,
      meta: { requiresAuth: true },
      children: [
      
        {
          path: '/login', 
          name: 'Login',
          meta: { requiresAuth: false },
          component: loginPageView,
        },
        {
          path: '/esquecer', 
          name: 'EsqueceuSenha',
          meta: { requiresAuth: false },
          component: EsqueceuSenhaView
        },
        {
          path: '/verificacao', 
          name: 'CodVerificação',
          meta: { requiresAuth: false },
          component: codigoVerificacaoView
        },
        {
          path: '/recuperacao', 
          name: 'Nova Senha',
          meta: { requiresAuth: false },
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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.loggedIn) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router;
