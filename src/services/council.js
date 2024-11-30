import axios from 'axios'
export default class CouncilService {
  async fetchCouncils() {
    const { data } = await axios.get('api/council')
    return data
  }
  async fetchCouncil(id) {
    const { data } = await axios.get(`api/council/${id}`)
    return data
  }
}