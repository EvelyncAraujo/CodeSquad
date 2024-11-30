import { ref } from 'vue'
import { defineStore } from 'pinia'

import AuthService from '@/services/auth'
const authService = new AuthService()

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(false)

  const setToken = async credentials => {
        const response = await authService.fetchToken(credentials)
        if(response.status === 200){
            localStorage.setItem('auth_token', response.data.access)
            localStorage.setItem('refresh_auth_token', response.data.refresh)
            loggedIn.value = true
            return response.status
        } else {
            return response.status            
        }
  }

  const setRefreshToken = async refreshToken => {
    const data = await authService.fetchRefreshToken(refreshToken)
    localStorage.setItem('auth_token', data.access)
    loggedIn.value = true
  }

  const unsetToken = () => {
    localStorage.removeItem('auth_token')
    loggedIn.value = false
  }

  return { setToken, setRefreshToken, unsetToken, loggedIn }
})