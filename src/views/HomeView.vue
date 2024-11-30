<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCouncilStore } from "@/stores/council";
import { onMounted } from "vue";

const router = useRouter();
const isDarkMode = ref(false);
const councilStore = useCouncilStore();
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const selectedFilter = ref("");

const filteredCouncils = computed(() => {
  if (selectedFilter.value === "") {
    return councilStore.councils;
  }
  console.log(selectedFilter.value);
  return councilStore.councils.filter(
    (council) => council.trimester === selectedFilter.value
  );
});

const goToCouncil = (id) => {
  router.push({
    name: "councilDetail",
    params: {
      id: id,
    },
  })
};

onMounted(async () => {
  await councilStore.fetchCouncils();
});
</script>
<template>
  <main class="content">
    <section class="recent-councils">
      <h2>Conselhos</h2>
      <div class="filters">
        <label for="filter" class="filter">Filtrar por:</label>
        <select v-model.number="selectedFilter">
          <option value="" disabled selected>Selecione o trimestre</option>
          <option value="">Todos os trimestres</option>
          <option value=1>Primeiro trimestre</option>
          <option value=2>Segundo trimestre</option>
          <option value=3>Terceiro trimestre</option>
        </select>
      </div>
      <div class="council-cards">
        <div v-for="council in filteredCouncils" :key="council.id" class="council-card">
          <h1>{{ council.team.name }}</h1>
          <p>Ocorreu em: {{ council.date }}</p>
          <p>{{ council.trimester }}° Trimestre</p>
          <button class="view-details" @click="goToCouncil(council.id)">Ver</button>
        </div>
      </div>
    </section>
  </main>
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
    "aside content";
}

.filter {
  margin-right: 10px
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

.switch-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
}

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

body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

.aside {
  min-width: 240px;
}

.dashboard {
  display: flex;
  transition: background 0.3s, color 0.3s;
}

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

.content {
  flex: 1;
  padding: 20px;
  margin-left: 250px;
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

.recent-councils h2 {
  margin-bottom: 1rem;
  font-size: xx-large;
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

.council-card:nth-child(6n+1) {
  background-color: #E2AED2;
}

.council-card:nth-child(6n+2) {
  background-color: #EA8C8C;
}

.council-card:nth-child(6n+3) {
  background-color: #F2866C;
}

.council-card:nth-child(6n+4) {
  background-color: #F06A45;
}

.council-card:nth-child(6n+5) {
  background-color: #A2D5C6;
}

.council-card:nth-child(6n+6) {
  background-color: #F4A261;
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

.date {
  padding: 10px 20px;
  border: 1px solid rgb(235, 230, 230);
  background-color: #f9f9f9;
  color: #000;
  border-radius: 20px;
  margin-right: 1rem;
}
</style>
