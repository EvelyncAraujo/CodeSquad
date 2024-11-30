<script setup>
import { ref } from "vue";
import { useCouncilStore } from "@/stores/council";
import TimerComponent from "@/components/TimerComponent.vue"

const councilStore = useCouncilStore();

const councils = ref();

const choosenCourse = ref();
const choosenYear = ref();

const search = async() => {
  councils.value = await councilStore.fetchCouncilByCourse(choosenCourse.value, choosenYear.value);
};

</script>

<template>
   
  <div class="containercomp">
    <div>
        <div class="dropdown">
          <select v-model.number="choosenCourse">
            <option value=2>Agropecuária</option>
            <option value=1>Informática</option>
            <option value=3>Química</option>
          </select>
        </div>
        <div class="dropdown">
          <select v-model.number="choosenYear">
            <option value=1>1° Ano</option>
            <option value=2>2° Ano</option>
            <option value=3>3° Ano</option>
          </select>
        </div>
        <button @click="search" class="search-button">Buscar</button>
      <div>
        <div v-for="council in councils">
          <div class="card">
            <p>{{ council.team }}</p>
            Iniciar conselho
          </div>
        </div>
        <TimerComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  background-color: gray;
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
}

.containercomp {
  border-radius: 10rem;
  padding: 2px;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
}
.dropdownContainer {
  position: relative;
  margin-bottom: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 50vh;
  margin-right: 900px;
}

.dropbtn {
  background-color: rgba(226, 174, 210, 1);
  color: white;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 20rem;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 5px;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.search-button {
  background: #f28c8c;
  border: none;
  color: white;
  padding: 15px 25px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #e76e6e;
}
</style>
