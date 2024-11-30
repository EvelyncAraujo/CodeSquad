<script setup>
import { ref, computed } from "vue";
import AsideComponent from "@/components/AsideComponent.vue";
import { onMounted } from "vue";

// Controle do modo escuro
const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

// Dados fictícios dos conselhos
const councils = ref([
  {
    id: 1,
    name: "Conselho 1",
    date: "25 de junho de 2023",
    trimester: "Trimestre 1",
    color: "#E2AED2",
  },
  {
    id: 2,
    name: "Conselho 2",
    date: "26 de junho de 2023",
    trimester: "Trimestre 1",
    color: "#EA8C8C",
  },
  {
    id: 3,
    name: "Conselho 3",
    date: "27 de junho de 2023",
    trimester: "Trimestre 1",
    color: "#F2866C",
  },
  {
    id: 4,
    name: "Conselho 4",
    date: "28 de junho de 2023",
    trimester: "Trimestre 2",
    color: "#F06A45",
  },
  {
    id: 5,
    name: "Conselho 5",
    date: "29 de junho de 2023",
    trimester: "Trimestre 2",
    color: "#E2AED2",
  },
  {
    id: 6,
    name: "Conselho 6",
    date: "30 de junho de 2023",
    trimester: "Trimestre 2",
    color: "#EA8C8C",
  },
  {
    id: 7,
    name: "Conselho 7",
    date: "28 de junho de 2023",
    trimester: "Trimestre 2",
    color: "#F2866C",
  },
  {
    id: 8,
    name: "Conselho 8",
    date: "29 de junho de 2023",
    trimester: "Trimestre 2",
    color: "#F06A45",
  },
  {
    id: 9,
    name: "Conselho 9",
    date: "30 de junho de 2023",
    trimester: "Trimestre 2",
    color: "#E2AED2",
  },
]);

// Estado para a pesquisa e filtro
const searchQuery = ref("");
const selectedFilter = ref("Trimestre");
const selectedDate = ref();

// Computed para filtrar conselhos
const filteredCouncils = computed(() => {
  return councils.value.filter(
    (council) =>
      council.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      (selectedFilter.value === "Trimestre" ||
        council.trimester === selectedFilter.value)
  );
});

onMounted(() => {
  console.log(selectedFilter.value);
});
</script>

<template>
  <div class="main-container">
    <div class="aside">
      <AsideComponent />
    </div>
    <main class="content">
      <header class="header">
        <div class="user-info">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            class="avatar"
          />
          <div class="name">
            <h2>Oliver Calenbard</h2>
            <p>Nupe</p>
          </div>
        </div>
        <div class="actions">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Pesquisar conselhos"
            class="search-input"
          />
          <button @click="toggleDarkMode" class="theme-toggle">
            {{ isDarkMode ? "Light" : "Dark" }}
          </button>
        </div>
      </header>
      <!-- Recent Councils -->
      <section class="recent-councils">
        <h2>Conselhos recentes</h2>
        <div class="filters">
          <label for="filter">Filtrar por:</label>
          <select v-model="selectedFilter">
            <option value="Trimestre" disabled selected>Selecione o trimestre</option>
            <option value="primeiro">Primeiro trimestre</option>
            <option value="segundo">Segundo trimestre</option>
            <option value="terceiro">Terceiro trimestre</option>
          </select>
          <input class="date" type="date" v-model="selectedDate" />
        </div>
        <div class="council-cards">
          <div
            v-for="council in filteredCouncils"
            :key="council.id"
            class="council-card"
            :style="{ backgroundColor: council.color }"
          >
            <h4>{{ council.name }}</h4>
            <p>{{ council.date }}</p>
            <p>{{ council.trimester }}</p>
            <button class="view-details">Ver</button>
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
.main-container {
  display: flex;
}

/* Estilos principais */
.dashboard {
  display: flex;
  transition: background 0.3s, color 0.3s;
}

/* Modos claro e escuro */
.light {
  background: #faf9f9;
  color: #333;
}

.dark {
  background: #333;
  color: #f9f9f9;
}

.name {
  margin-left: 5rem;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 10px 0;
  cursor: pointer;
  line-height: 35px;
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
  margin-bottom: 20px;
}
.h2 {
  text-align: right;
}

.avatar {
  position: fixed;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.search-input {
  border: 1px solid #ccc;
  border-radius: 20px;

  width: 250px;
}

.theme-toggle {
  background: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  cursor: pointer;
}

/* Conselhos Recentes */
.recent-councils h2 {
  margin-bottom: 1rem;
}

.council-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 2rem;
}

.council-card {
  width: calc(30.3% - 10px);
  padding: 15px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s;
}

.council-card:hover {
  transform: scale(1.05);
}

.view-details {
  align-self: flex-start;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.filters label {
  margin-right: 1rem;
}

.filters select {
  padding: 10px 20px;
  border: 1px solid rgb(235, 230, 230);
  background-color: #f9f9f9;
  color: #000;
  border-radius: 20px;
  margin-right: 1rem;
}

option {
  background-color: #f8f5f521;
  color: black;
  border: none;
  border-radius: 20px;
}

.date{
  padding: 10px 20px;
  border: 1px solid rgb(235, 230, 230);
  background-color: #f9f9f9;
  color: #000;
  border-radius: 20px;
  margin-right: 1rem;
}
</style>
