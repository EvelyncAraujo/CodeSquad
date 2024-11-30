<script setup>
import { ref } from "vue";

// Dados simulados
const latestRecords = ref([
  { type: "Ausência De Uniforme", date: "23/06" },
  { type: "Ausência De Uniforme", date: "23/06" },
  { type: "Ausência De Uniforme", date: "23/06" },
  { type: "Ausência De Uniforme", date: "23/06" },
]);

const grades = ref([
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
]);

const councils = ref([
  "Conselho 1",
  "Conselho 2",
  "Conselho 3",
  "Conselho 4",
  "Conselho 5",
  "Conselho 6",
  "Conselho 7",
  "Conselho 8",
  "Conselho 9",
]);
</script>

<template>
  <div class="dashboard">
    <!-- Header -->
    <header class="header">
     
      <div class="profile">
        <img src="https://via.placeholder.com/80" alt="Avatar" class="avatar" />
        <div class="profile-info">
          <h2>Oliver Calenbard</h2>
          <p>202345487</p>
        </div>
        <button class="add-btn">+</button>
      </div>
    </header>

    <!-- Últimos Registros -->
    <section class="latest-records">
      <div class="section-title"></div>
      <div class="records-grid">
        <table class="records-table">
          <thead>
            <tr>
              <th>Últimos registros</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in latestRecords" :key="index">
              <td>
                <mdicon class="back" name="notebook-outline" style="color: white;"></mdicon>
                {{ record.type }}
              </td>
              <td>{{ record.date }}</td>
            </tr>
          </tbody>
        </table>
        <table class="records-table">
          <thead>
            <tr>
            
              <th>Últimos registros</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in latestRecords" :key="`right-${index}`">
              <td>
                <mdicon class="back" name="notebook-outline" style="color:white"></mdicon>
                {{ record.type }}
              </td>
              <td>{{ record.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Notas Parciais -->
   
    <section class="partial-grades">
      <div class="section-title">Notas parciais</div>
      <div class="grades-grid">
        <table class="grades-table">
          <thead>
            <tr>
              <th></th>
              <th>Matéria</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(grade, index) in grades" :key="index">
            <td>
              <td>
                <mdicon class="back" name="notebook-outline" style="color: white;"></mdicon>
              
              </td>
            </td>
              <td>{{ grade.subject }}</td>
              <td>{{ grade.score }}</td>
            </tr>
          </tbody>
        </table>
        <table class="grades-table">
          <thead>
            <tr>
              <th></th>
              <th>Matéria</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(grade, index) in grades" :key="`right-${index}`">
              <td>
                <mdicon class="back" name="notebook-outline" style="color: white;"></mdicon>
              
              </td>
              <td>{{ grade.subject }}</td>
              <td>{{ grade.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </section>
 
    <!-- Conselhos -->
    <div class="conselhos-container">
    <h2>Conselhos</h2>
    <div class="conselhos-grid">
      <div v-for="n in 9" :key="n" class="conselho-item">
        <span>Conselho {{ n }}</span>

          <mdicon class="back2" name="arrow-top-right" style="color: white;"></mdicon>
        
      </div>
    </div>
  </div>
  </div>
</template>



<style scoped>
.conselhos-container {
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.conselhos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.conselho-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  color: #333;
}

button {
  background-color: #f3d0e6;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

button span {
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
}
.back {
   
   font-size: 2rem; /* Ajusta o tamanho do ícone */
   display:inline-flex;
   align-items: center;
   justify-content: center;
   width: 48px; /* Largura do botão */
   height: 48px; /* Altura do botão */
   background-image: linear-gradient(#E2AED2, #EA8983 , #F06A45);
   border-radius: 50%; /* Faz um botão circular */
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra */
   margin-left: 50px;

   cursor: pointer; /* Define o cursor para um "pontinho de interrogação" */
  margin-top: 2px;
}
.back2{
   
   font-size: 2rem; /* Ajusta o tamanho do ícone */
   display:inline-flex;
   align-items: center;
   justify-content: center;
   width: 48px; /* Largura do botão */
   height: 48px; /* Altura do botão */
   background-color: #E2AED2;
   border-radius: 50%; /* Faz um botão circular */
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra */
   margin-left: 50px;

   cursor: pointer; /* Define o cursor para um "pontinho de interrogação" */
  margin-top: 2px;
}
/* Layout principal */
.dashboard {
  font-family: "Arial", sans-serif;
  background: #f9f9f9;
  color: #333;
  padding: 20px;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #f16c87;
}

.profile {
  display:inline-flex;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.profile-info h2 {
  margin: 0;
  font-size: 20px;
}

.profile-info p {
  margin: 0;
  font-size: 14px;
  color: #888;
}

.add-btn {
  background: #f16c87;
  color: #fff;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
}

/* Seções */
.section-title {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
  padding-top: 50px;
}
.records-grid,
.grades-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.records-table,
.grades-table {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  width: 45%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #f16c8700;
  color: rgb(0, 0, 0);
  padding: 10px;
  font-size: 14px;
  text-align: left;
}

td {
  padding: 10px;
  font-size: 14px;
  color: #555;
  border-bottom: 1px solid #eee;
}

tr {
  text-align: left;
}

.record-icon {
  margin-right: 8px;
}

/* Conselhos */
.council-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.council-btn {
  background: #f16c87;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
