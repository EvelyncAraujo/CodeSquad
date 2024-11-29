<script setup>
import { useDropdownStore } from '/src/stores/useDropdownStore'; // Importe o store

// Use o store diretamente no setup
const dropdownStore = useDropdownStore();

// Não é necessário usar o return aqui, as variáveis estão diretamente disponíveis no template
const { isOpen, toggleDropdown } = dropdownStore;
</script>

<template>
 
  <div class="dropdown">
    <button class="dropbtn">Servidor</button>
    <div class="dropdown-content">
        <a href="#">Professor</a>
        <a href="#">Estudantes</a>
        <a href="#">Servidor Nupe</a>
    </div>
</div>
  <div class="container">
    <div class="card">
      <h2>Login</h2>
      <p>coloque suas informações</p>
    </div>
  </div>
  <div class="logo">
    <img src="@/assets/logo.png" alt="Logo" />
    </div>
  <div class="img">
 <img src="/public/tittle.png" alt="Imagem" class="img2">
</div>

</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 400px;
  margin-left: 40rem;
  /* background-color: #fff; */
  /* border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  padding: 24px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 12px;
  font-family: Arial, Helvetica, sans-serif;
}

p {
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
}
/* Basic styling for the button */
.dropbtn {
    background-color: #000000;
    margin-left: 90rem;
    margin-top: 5rem;
    color: white;
    padding: 16px;
    border-radius: 25px;
    font-size: 14px;
    border: none;
   
}
.img2{
margin-left: 15rem;
}
.logo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px; 
  height: auto;
  z-index: 10; 
  margin: 10px; 
}

/* Dropdown container */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  margin-left: 90rem;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    /* z-index: 1; */
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu when hovering over the button */
.dropdown:hover .dropdown-content {
    display: block;
}


</style>
