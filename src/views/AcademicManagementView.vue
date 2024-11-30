<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStudentStore } from "@/stores/student";
const studentStore = useStudentStore();

const students = ref([]);
const router = useRouter();

const courses = ref(["Todos os cursos", "Agropecuária", "Informática para Internet", "Química"]);

const selectedCourse = ref("");
const selectedYear = ref("");
const nameFilter = ref("");
const selectedGrade = ref("");
const hasOccurrence = ref("");

const filteredStudents = computed(() => {
  return students.value.filter((student) => {
    const matchesCourse =
      selectedCourse.value === "Todos os cursos" || !selectedCourse.value ||
      student.team.course.name === selectedCourse.value;
    const matchesYear =
      !selectedYear.value ||
      student.team.year === selectedYear.value;
    const matchesName =
      !nameFilter.value ||
      student.name.toLowerCase().includes(nameFilter.value.toLowerCase());
    const matchesGrade =
      !selectedGrade.value ||
      (selectedGrade.value === "maior" &&
        student.grades.some((grade) => parseFloat(grade.grade) >= 6)) ||
      (selectedGrade.value === "menor" &&
        student.grades.every((grade) => parseFloat(grade.grade) < 6));
    const matchesOccurrence =
      !hasOccurrence.value ||
      (hasOccurrence.value === "Sim" && student.occurrences.length > 0) ||
      (hasOccurrence.value === "Não" && student.occurrences.length === 0);

    return (
      matchesCourse &&
      matchesYear &&
      matchesName &&
      matchesGrade &&
      matchesOccurrence
    );
  });
});

const goToStudent = (id) => {
  router.push({
    name: "student",
    params: {
      id: id,
    },
  });
};

onMounted(async () => {
  await studentStore.fetchStudents();
  students.value = studentStore.students;
});
</script>
<template>
  <div class="page">
    <main class="content">
      <section class="management">
        <h2>Gerenciamento Acadêmico</h2>
        <div class="fundo">
          <div class="filters">
            <select v-model="selectedCourse">
              <option disabled value="">Selecione o curso</option>
              <option v-for="course in courses" :key="course" :value="course">
                {{ course }}
              </option>
            </select>
            <select v-model.number="selectedYear">
              <option disabled value="">Ano</option>
              <option value>Todos os anos</option>
              <option value=1>Primeiro</option>
              <option value=2>Segundo</option>
              <option value=3>Terceiro</option>
            </select>
            <input v-model="nameFilter" type="text" placeholder="Nome" class="name-input" />

            <select v-model="selectedGrade">
              <option disabled value="">Média</option>
              <option value="">Qualquer média</option>
              <option value="maior">Média maior que 6</option>
              <option value="menor">Média menor que 6</option>
            </select>

            <select v-model="hasOccurrence">
              <option disabled value="">Ocorrências</option>
              <option value="">Qualquer</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
        </div>

        <div class="results">
          <div v-for="student in filteredStudents" :key="student.id" class="result-card">
            <p>{{ student.name }} - {{ student.team.name }}</p>
            <div @click="goToStudent(student.id)">
              <button class="view-details">Ver</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style scoped>
.aside {
  min-width: 240px;
}

.page {
  display: flex;
  transition: background 0.3s, color 0.3s;
  height: 57rem;
  /* background-color: #751f1f46; */
}

.page.light {
  background: #f9f9f9;
  color: #333;
}

.page.dark {
  background: #333;
  color: #f9f9f9;
}

.sidebar {
  width: 250px;
  background: #c2bfbf;
  padding: 20px;

  background-color: rgb(230, 227, 227);
}

.menu {
  list-style: none;
  padding: 0;
  background-color: rgb(230, 227, 227);
}

.menu li {
  margin: 10px 0;
  line-height: 2rem;
  margin-left: 2rem;
}

.content {
  flex: 1;
  padding: 20px;
  margin-left: 250px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.avatar {
  position: fixed;
  border-radius: 50%;
  width: 40px;
}

.info {
  margin-left: 5rem;
}

.search {
  float: right;
  position: fixed;
  margin-left: 70rem;
  border: none;
  background-color: white;
}

.fundo {
  border-radius: 2rem;
  background-color: #c2bfbf1f;
  width: 65rem;
}

option {
  background-color: #f8f5f521;
  color: black;
  border: none;
  border-radius: 20px;
}

.theme-toggle {
  position: fixed;
  margin-left: 85rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
}

.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.filters select,
.filters input {
  padding: 10px 20px;
  border: 1px solid rgba(226, 174, 210, 1);
  border-radius: 20px;
  color: rgb(255, 255, 255);
  background-color: rgba(226, 174, 210, 1);
}

.search-button {
  background: #f28c8c;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
}

.results {
  border-radius: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 5rem;
}

.result-card {
  background: #f7e1e1;
  padding: 15px;
  border-radius: px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.view-details {
  background: #d291bc;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
}

.toggle-button {
  margin-left: 80rem;
  padding: 5px 15px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background: #f0f0f0;
  border-radius: 20px;
  transition: background 0.3s, color 0.3s;
}

.toggle-button:hover {
  opacity: 0.8;
}

h2 {
  font-size: xx-large;
}
</style>
