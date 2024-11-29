<script setup>
import { ref, computed } from "vue";

const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
const students = ref([
  {
    id: 1,
    name: "Alice",
    year: "Primeiro",
    course: "Agropecuária",
    grade: 7.5,
    occurrence: "Sim",
  },
  {
    id: 2,
    name: "Bruno",
    year: "Segundo",
    course: "Informática",
    grade: 5.2,
    occurrence: "Não",
  },
  {
    id: 3,
    name: "Carlos",
    year: "Terceiro",
    course: "Agropecuária",
    grade: 8.0,
    occurrence: "Sim",
  },
  {
    id: 4,
    name: "Diana",
    year: "Primeiro",
    course: "Administração",
    grade: 6.0,
    occurrence: "Não",
  },
]);

const courses = ref(["Agropecuária", "Informática", "Administração"]);
const years = ref(["Primeiro", "Segundo", "Terceiro"]);

const selectedCourse = ref("");
const selectedYear = ref("");
const nameFilter = ref("");
const selectedGrade = ref("");
const hasOccurrence = ref("");

const filteredStudents = computed(() => {
  return students.value.filter((student) => {
    const matchesCourse =
      !selectedCourse.value || student.course === selectedCourse.value;
    const matchesYear =
      !selectedYear.value || student.year === selectedYear.value;
    const matchesName =
      !nameFilter.value ||
      student.name.toLowerCase().includes(nameFilter.value.toLowerCase());
    const matchesGrade =
      !selectedGrade.value ||
      (selectedGrade.value === "maior" && student.grade > 6) ||
      (selectedGrade.value === "menor" && student.grade <= 6);
    const matchesOccurrence =
      !hasOccurrence.value || student.occurrence === hasOccurrence.value;

    return (
      matchesCourse &&
      matchesYear &&
      matchesName &&
      matchesGrade &&
      matchesOccurrence
    );
  });
});

const applyFilters = () => {
  console.log("Filtros aplicados", {
    selectedCourse: selectedCourse.value,
    selectedYear: selectedYear.value,
    nameFilter: nameFilter.value,
    selectedGrade: selectedGrade.value,
    hasOccurrence: hasOccurrence.value,
  });
};
</script>

<template>
  <div class="page">
    <aside class="sidebar">
      <img src="/src/assets/logo.png" alt="Logo" />

      <ul class="menu"> 
        <li>Explore</li>
        <li>Conselho</li>
        <li>Gerenciamento Acadêmico</li>
        
      </ul>
      <button class="logout">Sair</button>
    </aside>

    <main class="content">
      <div class="user-info">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          class="avatar"
        />
        <div class="info">
          <h2>Oliver Calenbard</h2>
          <p>Nupe</p>
        </div>
      </div>
     
      <button @click="toggleDarkMode" class="theme-toggle">
        {{ isDarkMode ? "Light" : "Dark" }}
      </button>
      <section class="management">
        <h3>Gerenciamento Acadêmico</h3>
        <div class="filters">
          <select v-model="selectedCourse">
            <option disabled value="">Selecione o curso</option>
            <option v-for="course in courses" :key="course" :value="course">
              {{ course }}
            </option>
          </select>

          <select v-model="selectedYear">
            <option disabled value="">Ano</option>
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>

          <input
            v-model="nameFilter"
            type="text"
            placeholder="Nome"
            class="name-input"
          />

          <select v-model="selectedGrade">
            <option disabled value="">Nota</option>
            <option value="maior">Média maior que 6</option>
            <option value="menor">Média menor que 6</option>
          </select>

          <select v-model="hasOccurrence">
            <option disabled value="">Ocorrência</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>

          <button @click="applyFilters" class="search-button">Buscar</button>
        </div>

        <!-- Lista de Resultados -->
        <div class="results">
          <div
            v-for="student in filteredStudents"
            :key="student.id"
            class="result-card"
          >
            <p>{{ student.name }}</p>
            <button class="view-details">Ver</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  font-family: "Arial", sans-serif;
  transition: background 0.3s, color 0.3s;
  height: 57rem;
  background-color: #cccccc46;
}

.page.light {
  background: #f9f9f9;
  color: #333;
}

.page.dark {
  background: #333;
  color: #f9f9f9;
}

/* Sidebar */
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

.logout {
  background: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
}

/* Conteúdo principal */
.content {
  flex: 1;
  padding: 20px;
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

.theme-toggle {
  position: fixed ;
  margin-left: 85rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filters select,
.filters input {
  padding: 5px 10px;
  border: 1px solid #b4b0b0;
  border-radius: 5px;
}

.search-button {
  background: #f28c8c;
  border: none;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.result-card {
  background: #f7e1e1;
  padding: 15px;
  border-radius: 10px;
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
</style>
