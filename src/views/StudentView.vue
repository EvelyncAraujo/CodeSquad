<script setup>
import { ref } from "vue";

const lastRecords = ref([
  { title: "Ausência De Uniforme", date: "23/06" },
  { title: "Ausência De Uniforme", date: "23/06" },
  { title: "Ausência De Uniforme", date: "23/06" },
]);

const partialGrades = ref([
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
  { subject: "Artes", score: "8,0" },
]);

const advices = ref([
  "Conselho 1",
  "Conselho 2",
  "Conselho 3",
  "Conselho 4",
  "Conselho 5",
]);
</script>
<template>
  <div class="dashboard">
    <header class="header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <button class="back-button">←</button>
    </header>

    <section class="user-profile">
      <img class="avatar" src="https://via.placeholder.com/80" alt="User Avatar" />
      <h2>Oliver Calenbard</h2>
      <p>2023443567</p>
      <button class="add-button">+</button>
    </section>

    <section class="last-records">
      <h3>Últimos registros</h3>
      <div class="records-table">
        <div class="record" v-for="record in lastRecords" :key="record.date">
          <div class="back">
            <mdicon name="notebook-outline" style="color: white;"></mdicon>
          </div>
          <span class="text">{{ record.title }}</span>
          <span class="date">{{ record.date }}</span>
        </div>
      </div>
    </section>

    <section class="partial-grades">
      <h3>Notas parciais</h3>
      <div class="grades-table">
        <div class="grade" v-for="(grade, index) in partialGrades" :key="index">
          <span class="subject">{{ grade.subject }}</span>
          <span class="score">{{ grade.score }}</span>
        </div>
      </div>
    </section>

    <section class="advice-section">
      <h3>Conselhos</h3>
      <div class="advice-buttons">
        <button v-for="advice in advices" :key="advice" class="advice-button">
          {{ advice }}
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.back {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 32px;
  background-color: rgba(234, 137, 131, 1);
  border-radius: 60%;
  margin-left: 50px;
  margin-top: 2px;
}

.dashboard {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  font-weight: bold;
  color: #e63946;
}

.back-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.user-profile {
  text-align: center;
  margin-bottom: 30px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.add-button {
  display: inline-block;
  margin-left: 90rem;
  padding: 10px 20px;
  border-radius: 50%;

  border: none;
  font-size: 18px;
  cursor: pointer;
}

section {
  margin-bottom: 30px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.records-table {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.record {
  display: flex;
  align-items: center;
  background-color: #f1faee;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
}

.icon {
  margin-right: 10px;
}

.date {
  margin-left: auto;
}

.grades-table {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.grade {
  display: flex;
  justify-content: space-between;
  background-color: #f1faee;
  padding: 10px;
  border-radius: 10px;
}

.advice-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.advice-button {
  background-color: #e63946;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
