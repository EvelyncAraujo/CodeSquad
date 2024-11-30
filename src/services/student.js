import axios from 'axios'
export default class StudentService {
  async fetchStudents() {
    const { data } = await axios.get('api/students')
    return data
  }
  async fetchStudent(id) {
    const { data } = await axios.get(`api/students/${id}`)
    
    return data
  }
  async postGrade(grade){
    const { data } = await axios.post('api/grade/', grade)
    return data
  }
  async postOccurrence(occurrence){
    const { data } = await axios.post('api/occurrences/', occurrence)
    return data
  }
}