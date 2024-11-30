<script setup>
import { ref, computed } from "vue";
import AsideComponent from "@/components/AsideComponent.vue";
import { onMounted } from "vue";


// Controle do modo escuro
const isDarkMode = ref(true);
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
  <div class="container" :class="{ dark: isDarkMode }">
    <div class="aside">
      <AsideComponent />
    </div>

    <header class="header">
      <div class="user-info">
        <img src="https://via.placeholder.com/40" alt="User Avatar" class="avatar" />
        <div class="name">
          <h2 class="name-user">Oliver Calenbard</h2>
          <p class="employee-function">Nupe</p>
        </div>
      </div>
      <div>
        <div class="actions">
          <input type="text" v-model="searchQuery" placeholder="Pesquisar conselhos" class="search-input" />
        </div>
        <div :class="{ dark: isDarkMode }">
          <div class="switch-container">
            <label class="switch">
              <input type="checkbox" v-model="isDarkMode" />
              <span class="slider">
                <span class="icon">
                  <span v-if="!isDarkMode">☀️</span>
                  <span v-else>🌙</span>
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </header>
    <!-- </div> -->
    <main class="content">

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
          <div v-for="council in filteredCouncils" :key="council.id" class="council-card"
            :style="{ backgroundColor: council.color }">
            <h4>{{ council.name }}</h4>
            <p>{{ council.date }}</p>
            <p>{{ council.trimester }}</p>
            <RouterLink to="/historico"><button class="view-details">Ver</button></RouterLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container {
  min-height: 100vh;
  background-color: #ffffff;
  color: #000000;
  transition: background-color 0.3s ease-in-out;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 200px auto;
  grid-template-areas:
    "aside header"
    "aside content"
  ;

}

.aside {
  grid-area: aside;
}

.header {
  grid-area: header;
}

.content {
  grid-area: content;
}


.container.dark {
  background-color: #121212;
  color: #ffffff;
}

/* Posicionamento no canto */
.switch-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
}

/* Estilo do switch */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.slider .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  pointer-events: none;
}

input:checked+.slider {
  background-color: #2196f3;
}

input:checked+.slider:before {
  transform: translateX(26px);
}

/* Modo escuro para o body */
body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

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
  margin: 0%;
  padding: 0%;
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

.name-user {
  text-align: right;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  padding: 0%;
  margin-left: 50px;
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
  position: fixed;
  margin-left: 85rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
}

/* .toggle-button {
  margin-left: 80rem;
  padding: 5px 15px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background: #f0f0f0;
  border-radius: 20px;
  transition: background 0.3s, color 0.3s;
} */

.toggle-button:hover {
  opacity: 0.8;
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

/*.employee-function {
.filters label {
  margin-right: 1rem;
}
*/
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

.employee-function{
  margin: 0%;
  padding: 0%;
  font-size: 14px;
  font-style: italic;
  margin-top: 5px;
  margin-left: 50px;
}
</style>
