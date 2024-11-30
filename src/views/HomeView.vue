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
          <div class="card-header">
            <mdicon class="icon" name="notebook-outline"></mdicon>
          </div>
          <div class="card-content">
            <h3 class="council-title">{{ council.team.name }}</h3>
            <div class="council-details">
              {{ council.date }} Trimestre
              {{ council.trimester }}
            </div>
          </div>
          <RouterLink to="/council-detail" class="card-action">
            <mdicon name="arrow-top-right"></mdicon>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.icon1{
 width:5px;
 
  
}
.council-details{
  margin-left: 10px;
  margin-bottom: 15px;
}

.icon{
margin-bottom: 50px;
margin-right: 200px;
color: white;
}
h2{
  margin-left: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.filters{
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
 
}
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
  margin-left: 5px;
  width: 300px; 
  border-radius: 16px; 
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  border-radius: 28px;
  margin-right: 20px;
}

.council-card:hover {
  transform: scale(1.05); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Cabeçalho colorido */
.council-card .card-header {
  height: 140px; 
  background-color: #e2aed2; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
}

/* Conteúdo do card */
.council-card .card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.council-title{
  margin-left: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.council-card .card-content .council-title {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  
  color: #333333;
}

.council-card .card-content .council-details {
  font-size: 14px;
  color: #555555;
  display: flex;
  gap: 4px;
  align-items: center;
}

.council-card .card-content .council-details span {
  margin-right: 4px;
}


.council-card .card-action {
  align-self: flex-end;
  background-color: #e2aed2;
  width: 50px;
  height: 50px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  transition: background-color 0.3s ease;
}
.card-action{
  position: fixed;
  margin-top: 170px;
  
  align-self: flex-end;
  background-color: #e2aed2;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  padding: 5px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  transition: background-color 0.3s ease;
}

.council-card .card-action:hover {
  background-color: #d48bbf; 
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
  margin-left: 20px;
  padding: 10px 40px 10px 20px; /* Espaço interno ajustado */
  border: 1px solid rgb(235, 230, 230);
  background-color: #ffffff;
  color: #000;
  border-radius: 20px;
  margin-right: 1rem;
  appearance: none; /* Remove o estilo padrão do dropdown */
  position: relative;
  font-family: "Poppins", sans-serif;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E"); /* Ícone de seta */
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center; /* Posiciona o ícone */
  background-size: 16px;
}

.filters select:focus {
  outline: none; /* Remove a borda de foco padrão */
  border-color: #007bff; /* Cor de destaque ao focar */
}

.filters {
  display: flex;
  align-items: center; /* Centraliza os itens verticalmente */
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
  background-color: #ffffff;
  color: #000;
  border-radius: 20px;
  margin-right: 1rem;
}

</style>