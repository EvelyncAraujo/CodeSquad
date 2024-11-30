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
  return { fetchStudents, students };
});
