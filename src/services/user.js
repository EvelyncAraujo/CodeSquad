import axios from 'axios'
export default class UserService {
  async fetchMe() {
    const { data } = await axios.get('api/employees/me')
    return data
  }
}