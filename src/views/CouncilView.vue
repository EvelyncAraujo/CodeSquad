<script setup>
import AsideComponent from "@/components/AsideComponent.vue";
</script>
<template>
  <div class="page">
    <div class="aside">
      <AsideComponent />
    </div>
  </div>

  <div class="dropdownContainer">
    <div class="dropdown1">
      <button class="dropbtn">Dropdown <i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content1">
        <a href="#">Agropecuaria</a>
        <a href="#">Informática</a>
        <a href="#">Química</a>
      </div>
    </div>

    <div class="dropdown2">
      <button class="dropbtn">
        Dropdown <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content2">
        <a href="#">1 ano</a>
        <a href="#">2 ano</a>
        <a href="#">3 ano</a>
      </div>
    </div>
    <button @click="applyFilters" class="search-button">Buscar</button>
  </div>

  <div class="results"></div>
</template>
<style scoped>
h3 {
  color: black;
}

.dropbtn {
  background-color: rgba(226, 174, 210, 1);
  color: white;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 20rem;
  /* margin-left: 50rem;
  margin-top: 15rem; */
}

.dropdownContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 75vh;
  align-items: center;
  /* border: 1px solid black; */
  gap: 2rem;
}

.dropdown1 .dropdown2 {
  position: relative;
  display: flex;
  gap: 2rem;
}

.dropdown-content1 .dropdown-content2 {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content1 .dropdown-content2 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content1 .dropdown-content2 a:hover {
  background-color: #f1f1f1;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
}

.dropdown2:hover .dropdown-content2 {
  display: block;
}

.search-button {
  background: #f28c8c;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
}
</style>
