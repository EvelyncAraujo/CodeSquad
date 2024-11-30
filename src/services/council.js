import axios from 'axios'
export default class CouncilService {
  async fetchCouncils() {
    const { data } = await axios.get('api/council')
    return data
  }
}