import axios from 'axios'
export default class StudentService {
  async fetchStudents() {
    const { data } = await axios.get('api/students')
    return data
  }
}