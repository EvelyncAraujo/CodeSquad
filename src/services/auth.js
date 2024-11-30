import axios from 'axios'
export default class AuthService {
  async fetchToken(credentials) {
    try{
      const { data, status } = await axios.post('/token/', credentials)
      return { data, status }
    } catch (error){
      console.log(error);
      return error
    }
  }
  async fetchRefreshToken(refreshToken) {
    try{
      const { data, status } = await axios.post('/token/refresh/', refreshToken)      
      return { data, status }
    } catch (error){
      return error
    }
  }
}