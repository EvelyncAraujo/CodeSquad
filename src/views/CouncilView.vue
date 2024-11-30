<script setup>
import AsideComponent from "@/components/AsideComponent.vue";
</script>

<template>
  <div class="dropdownContainer">
    <div class="dropdown">
      <button class="dropbtn">
        Agropecuária <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Agropecuária</a>
        <a href="#">Informática</a>
        <a href="#">Química</a>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">
        Primeiro <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">1 ano</a>
        <a href="#">2 ano</a>
        <a href="#">3 ano</a>
      </div>
    </div>

    <button @click="applyFilters" class="search-button">Buscar</button>
  </div>
  <div class="conselhos-container">
    <h2>Conselhos</h2>
    <div class="conselhos-grid">
      <div v-for="n in 9" :key="n" class="conselho-item">
        <span>Conselho {{ n }}</span>

          <mdicon class="back2" name="arrow-top-right" style="color: white;"></mdicon>
        
      </div>
    </div>
  </div>

</template>

<style scoped>
.conselhos-container {
  text-align: center;
  padding: 20px;
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
.dropdownContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 75vh;
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
