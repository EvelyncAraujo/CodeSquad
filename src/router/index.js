import { createRouter, createWebHistory } from 'vue-router'
import loginPageView from '@/views/loginPageView.vue'
import esqueceuSenhaView from '@/views/esqueceuSenhaView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        component: BlankLayout,
        children: [
          {
            path: '',
            name: 'login',
            component: loginPageView
          },

          {
            path: 'recuperar',
            name: 'esqueceuSenha',
            component: esqueceuSenhaView

            
          },

        ]
    },

  
  ]
})

export default router