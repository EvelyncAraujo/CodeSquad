import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'

import AuthService from '@/services/auth'
const authService = new AuthService()

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(false)
  const userStore = useUserStore()

  const setToken = async credentials => {
        const response = await authService.fetchToken(credentials)
        if(response.status === 200){
            localStorage.setItem('auth_token', response.data.access)
            localStorage.setItem('refresh_auth_token', response.data.refresh)
            await userStore.fetchMe()
            console.log(userStore.user);
            
            loggedIn.value = true
            return response.status
        } else {
            return response.status            
        }
  }

  const setRefreshToken = async refreshToken => {
    const response = await authService.fetchRefreshToken(refreshToken)    
    if(response.status === 200){
        localStorage.setItem('auth_token', response.data.access)
        loggedIn.value = true
        await userStore.fetchMe()
        console.log(userStore.user);
        return response.status
    } else {
        return response.status
    }
  }

  const unsetToken = () => {
    localStorage.removeItem('auth_token')
    loggedIn.value = false
  }

  return { setToken, setRefreshToken, unsetToken, loggedIn }
})