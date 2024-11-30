<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useStudentStore } from "@/stores/student";

const studentStore = useStudentStore();
const route = useRoute();

const studentId = route.params.id
const data = ref({})

const showGradeSender = ref(false);
const choosenDiscipline = ref();
const choosenGrade = ref();
const choosenTrimester = ref();

const postGrade = () => {
  studentStore.postGrade({
    "discipline": choosenDiscipline.value,
    "grade": choosenGrade.value,
    "trimester": choosenTrimester.value,
    "student": parseInt(studentId)} 
  )};

onMounted(async() => {
  data.value = await studentStore.fetchStudent(studentId);
});
</script>

<template>
  <div class="dashboard">
    <header class="header">
      <RouterLink to="/academic-management">
        <div class="arrow-back">
          <mdicon name="arrow-left-drop-circle-outline"></mdicon>
        </div>
      </RouterLink>
    </header>
    <div class="profile">
      <img :src="data?.photo?.file" alt="Avatar" class="avatar" />
      <div class="profile-info">
        <h2>{{ data.name }}</h2>
        <p>{{data.registration}}</p>
      </div>
      <button class="add-btn" @click="showGradeSender = !showGradeSender">+</button>
      <div class="grade-sender" v-if="showGradeSender">
            <select name="discipline" v-model.number="choosenDiscipline">
              <option value=1>Matemática</option>
              <option value=2>Português</option>
              <option value=3>Física</option>
            </select>
            <input type="number" placeholder="Trimestre" v-model.number="choosenTrimester">
            <input type="number" placeholder="Nota" v-model.number="choosenGrade">
            <button class="send-grade-btn" @click="postGrade">Enviar</button>
      </div>
    </div>

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
            <tr v-for="(record, index) in data.occurrences" :key="index">
              <td>
                <mdicon class="back" name="notebook-outline" style="color: white;"></mdicon>
                {{ record.type_status }}
              </td>
              <td>{{ record.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <div class="profile">
        <button class="add-btn">+</button>
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
              <th>Trimestre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(grade, index) in data.grades" :key="index">
              <td>
                <mdicon class="back" name="notebook-outline" style="color: white;"></mdicon>
              </td>
              <td>{{ grade.discipline.name }}</td>
              <td>{{ grade.grade }}</td>
              <td>{{ grade.trimester }}</td>
            </tr>
          </tbody>
        </table>
        <div class="approved">
          
          
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
/* Dashboard */       
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #E2AED2;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 50px;
  cursor: pointer;
  margin-top: 2px;
}

.send-grade-btn {
  background: #f16c87;
  color: #fff;
  border: none;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  display: flex;
  justify-content: center;
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

.grade-sender {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
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

.approval-status {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.approval-status p {
  font-size: 14px;
  color: #555;
  text-align: center;
}

.approval-status strong {
  font-size: 18px;
  color: #f16c87;
}

.approval-status span {
  font-weight: bold;
  font-size: 16px;
}

</style>
