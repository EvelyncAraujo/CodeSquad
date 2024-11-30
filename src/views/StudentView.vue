<script setup>
import { ref } from "vue";

const showForm = ref(false);

const formData = ref({
  subject: "",
  term: "",
  grade: "",
});

const records = ref([]);

function addRecord() {
  records.value.push({ ...formData.value });
  formData.value = { subject: "", term: "", grade: "" };
  showForm.value = false;
}
// Estados reativos
const showModal = ref(false);
const occurrence = ref("");
const date = ref(new Date().toISOString().substring(0, 10));

// Função para submissão do formulário
const submitOccurrence = () => {
  console.log("Ocorrência registrada:", occurrence.value, date.value);
  alert(`Ocorrência: ${occurrence.value}\nData: ${date.value}`);
  occurrence.value = "";
  date.value = new Date().toISOString().substring(0, 10);
  showModal.value = false; // Fecha o modal após o envio
};
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
      <RouterLink to="/academic-management">
        <div class="arrow-back">
          <mdicon name="arrow-left-drop-circle-outline"></mdicon>
        </div>
      </RouterLink>
      <div class="prof-title">
        <img src="https://via.placeholder.com/80" alt="Avatar" class="avatar" />
        <div class="profile-info">
          <h2>Oliver Calenbard</h2>
          <p>202345487</p>
        </div>
      </div>
      <div class="app-container">
    <!-- Botão para abrir o modal -->
    <button class="open-modal-button" @click="showModal = true">+</button>

    <!-- Modal de Registrar Ocorrência -->
    <div v-if="showModal" class="modal-container">
      <div class="modal-content">
        <h2>Registrar Ocorrência</h2>
        <form @submit.prevent="submitOccurrence">
          <div class="form-group">
            <label for="occurrence">Ocorrência</label>
            <input
              type="text"
              id="occurrence"
              v-model="occurrence"
              placeholder="Descreva a ocorrência"
              required
            />
          </div>

          <div class="form-group">
            <label for="date">Data</label>
            <input type="date" id="date" v-model="date" required />
          </div>

          <button type="submit" class="submit-button">Registrar</button>
        </form>
        <button class="close-button" @click="showModal = false">Fechar</button>
      </div>
    </div>
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
    <div class="profile">
      <div class="container">
    <!-- Botão + para abrir o modal -->
    <button @click="showForm = true" class="add-button">+</button>

    <!-- Modal de registro -->
    <div v-if="showForm" class="modal-overlay">
      <div class="modal">
        <h2>Registrar notas</h2>
        <form @submit.prevent="addRecord">
          <!-- Campo Matéria -->
          <label for="subject">Matéria</label>
          <select id="subject" v-model="formData.subject" required>
            <option disabled value="">Selecione</option>
            <option>Artes</option>
            <option>Matemática</option>
            <option>Português</option>
            <option>História</option>
          </select>

          <!-- Campo Trimestre -->
          <label for="term">Trimestre</label>
          <select id="term" v-model="formData.term" required>
            <option disabled value="">Selecione</option>
            <option>1º Trimestre</option>
            <option>2º Trimestre</option>
            <option>3º Trimestre</option>
          </select>

          <!-- Campo Nota -->
          <label for="grade">Nota</label>
          <input
            id="grade"
            v-model="formData.grade"
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="Digite a nota"
            required
          />

          <!-- Botão Registrar -->
          <button type="submit" class="submit-button">Registrar</button>
        </form>
        <button class="close-button" @click="showModal = false">Fechar</button>
      </div>
    </div>

    <!-- Lista de registros -->
    <div v-if="records.length" class="records">
      <h3>Registros:</h3>
      <ul>
        <li v-for="(record, index) in records" :key="index">
          {{ record.subject }} - {{ record.term }} - Nota: {{ record.grade }}
        </li>
      </ul>
    </div>
  </div>
      </div>
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
                <mdicon class="back" name="notebook-outline" style="color: white;"></mdicon>
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
/* Estilização geral */
.container {
  font-family: Arial, sans-serif;
}

/* Botão "+" */
.add-button {
  background-color: #ff6b6b;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 20px;
  right: 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 15px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

select,
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

/* Botão Registrar */
.submit-button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
}

/* Lista de registros */
.records {
  margin-top: 20px;
  padding: 0 20px;
}

.records ul {
  list-style: none;
  padding: 0;
}

.records li {
  background: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
/* Botão de abrir o modal */
.open-modal-button {
  background-color: #f3a5b8;
  color: white;
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  bottom: 20px;
  right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.open-modal-button:hover {
  background-color: #e28798;
}

/* Container do modal */
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Conteúdo do modal */
.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 320px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

/* Estilo dos campos de entrada */
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
}
/* Botão de fechar modal */
.close-button {
  margin-top: 10px;
  background-color: #ccc;
  color: white;
  padding: 10px;
  border: none;
  width: 70px;
  height: 50px;

  font-size: 0.9rem;
  
}
input[type="text"]:focus,
input[type="date"]:focus {
  border-color: #f3a5b8;
}

/* Botão de registrar */
.submit-button {
  background-color: #f3a5b8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}

.submit-button:hover {
  background-color: #e28798;
}



.close-button:hover {
  background-color: #999;
}
.prof-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.conselhos-container {
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
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

.arrow-back {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #f0f0f0;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 50px;
  cursor: pointer;
  margin-top: 2px;
}

.back {

  font-size: 2rem;
  /* Ajusta o tamanho do ícone */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  /* Largura do botão */
  height: 48px;
  /* Altura do botão */
  background-image: linear-gradient(#E2AED2, #EA8983, #F06A45);
  border-radius: 50%;
  /* Faz um botão circular */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* Adiciona uma sombra */
  margin-left: 50px;

  cursor: pointer;
  /* Define o cursor para um "pontinho de interrogação" */
  margin-top: 2px;
}

.back2 {

  font-size: 2rem;
  /* Ajusta o tamanho do ícone */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  /* Largura do botão */
  height: 48px;
  /* Altura do botão */
  background-color: #E2AED2;
  border-radius: 50%;
  /* Faz um botão circular */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* Adiciona uma sombra */
  margin-left: 50px;

  cursor: pointer;
  /* Define o cursor para um "pontinho de interrogação" */
  margin-top: 2px;
}

/* Layout principal */
.dashboard {
  font-family: "Arial", sans-serif;
  background: #f9f9f9;
  color: #333;
  padding: 20px;
}

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
display: inline-flex;
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
