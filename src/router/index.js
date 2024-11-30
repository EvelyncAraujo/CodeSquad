import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blankLayout',
      component: () => import('@/layouts/BlankLayout.vue'),
      meta: { 
        requiresAuth: true 
      },
      children: [
        {
          path: '/council-detail', 
          name: 'councilDetail',
          component: () => import('@/views/CouncilDetailView.vue'),
        },      
        {
          path: '/login', 
          name: 'login',
          meta: { 
            requiresAuth: false 
          },
          component: () => import('@/views/LoginView.vue'),
        },
      ] 
    },
    {
      path: '/',
      name: 'fullLayout',
      component: () => import('@/layouts/FullLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/forgot-password', 
          name: 'forgotPassword',
          meta: { 
            requiresAuth: false 
          },
          component: () => import('@/views/ForgotPasswordView.vue'),
        },
        {
          path: '/verification', 
          name: 'verification',
          meta: { 
            requiresAuth: false 
          },
          component: () => import('@/views/VerificationView.vue'),
        },
        {
          path: '/recovery', 
          name: 'recovery',
          meta: { 
            requiresAuth: false 
          },
          component: () => import('@/views/RecoveryView.vue'),
        },
        {
          path: '/academic-management', 
          name: 'academicManagement',
          component: () => import('@/views/AcademicManagementView.vue'),
        },
        {
          path: '/home', 
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/student', 
          name: 'student',
          component: () => import('@/views/StudentView.vue'),
        },
        {
          path: '/council', 
          name: 'council',
          component: () => import('@/views/CouncilView.vue'),
        },
      ] 
    },
  ],
});

router.beforeEach(async(to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.loggedIn) {
    if(localStorage.getItem('refresh_auth_token') !== null){
        const response = await authStore.setRefreshToken({ "refresh": localStorage.getItem('refresh_auth_token')})        
        if(response === 200){
            next()
      } else{
        next({ path: '/login' })
      }
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

export default router;
