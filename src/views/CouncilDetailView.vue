<script setup>
import { useCouncilStore } from '@/stores/council';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const councilStore = useCouncilStore();
const data = ref({})

const councilId = route.params.id;

onMounted(async () => {
  data.value = await councilStore.fetchCouncil(councilId);
});
</script>
<template>
  <RouterLink to="/home">
    <div class="back">
      <mdicon name="arrow-left-drop-circle-outline"></mdicon>
    </div>
  </RouterLink>
  <h1>Conselho de {{ data.date }}</h1>
  <div class="content">
    <div class="section">
      <h2>Observações feitas durante o conselho:</h2>
      <div v-for="observation in data.observations">
        <div class="card">
          <p>Aluno: {{ observation.student.name }}</p>
          <p>Severidade: {{ observation.severity_status }}</p>
          <p>Acontecimento: {{ observation.comment }}</p>
          <p>Ação: {{ observation.action_status }}</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Observações:</h2>
      <p>
        {{ data.comment }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.content{
  width: 80%;
  margin: auto;
}
.card{
  width: fit-content;
  background: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
}

.container {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #ff6b6b;
  margin-right: auto;
}

.title {
  font-size: 20px;
  color: #555;
}

.data {
  font-size: 16px;
  margin-bottom: 20px;

}

.section {
  margin-bottom: 20px;
}

.section h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #fd7c31;
}

.section p {
  text-align: justify;
  font-size: 16px;
  color: black;
}

h1 {
  text-align: center;
  margin: 0;
  font-size: 2rem;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.back {
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

.back:hover {
  background-color: #e0e0e0;
}
</style>
