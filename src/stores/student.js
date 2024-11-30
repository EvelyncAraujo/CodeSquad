import { ref } from "vue";
import { defineStore } from "pinia";

import StudentService from "@/services/student";
const studentService = new StudentService();

export const useStudentStore = defineStore("student", () => {
  const students = ref();

  const fetchStudents = async () => {
    const data = await studentService.fetchStudents();
    students.value = data;
  };

  const fetchStudent = async (id) => {
    const data = await studentService.fetchStudent(id);
    return data;
  }

  const postGrade = async (grade) => {
    const data = await studentService.postGrade(grade);
    return data;
  }

  const postOccurrence = async (occurrence) => {
    const data = await studentService.postOccurrence(occurrence);
    return data;
  }

  return { postOccurrence, postGrade, fetchStudents, fetchStudent, students };
});
