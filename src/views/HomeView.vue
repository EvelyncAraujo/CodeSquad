<template>
    <div class="dashboard">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="logo">NUPE</div>
        <ul class="menu">
          <li>Explore</li>
          <li>Conselho</li>
          <li>Gerenciamento Acadêmico</li>
          <li>Histórico</li>
          <li>Perfil</li>
          <li>Ocorrências</li>
          <li>Turmas</li>
        </ul>
        <button class="logout">Sair</button>
      </aside>
  
      <!-- Main Content -->
      <main class="content">
        <header class="header">
          <div class="user-info">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              class="avatar"
            />
            <div>
              <h2>Oliver Calenbard</h2>
              <p>Nupe</p>
            </div>
          </div>
          <div class="actions">
            <input
              type="text"
              placeholder="Pesquisar conselhos"
              class="search-input"
            />
            <button class="theme-toggle">Light / Dark</button>
          </div>
        </header>
  
        <section class="recent-councils">
          <h3>Conselhos recentes</h3>
          <div class="filters">
            <label for="filter">Filtrar por:</label>
            <select id="filter">
              <option>Trimestre</option>
              <option>Data</option>
            </select>
          </div>
          <div class="council-cards">
            <div
              v-for="council in councils"
              :key="council.id"
              :class="['council-card', council.color]"
            >
              <h4>{{ council.name }}</h4>
              <p>{{ council.date }}</p>
              <p>{{ council.trimester }}</p>
              <button class="view-details">Ver</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Dados fictícios para os cartões
  const councils = ref([
    { id: 1, name: "Conselho 1", date: "25 de junho de 2023", trimester: "Trimestre 1", color: "color-1" },
    { id: 2, name: "Conselho 2", date: "25 de junho de 2023", trimester: "Trimestre 1", color: "color-2" },
    { id: 3, name: "Conselho 3", date: "25 de junho de 2023", trimester: "Trimestre 1", color: "color-3" },
    { id: 4, name: "Conselho 4", date: "25 de junho de 2023", trimester: "Trimestre 2", color: "color-4" },
    { id: 5, name: "Conselho 5", date: "25 de junho de 2023", trimester: "Trimestre 2", color: "color-1" },
    { id: 6, name: "Conselho 6", date: "25 de junho de 2023", trimester: "Trimestre 2", color: "color-2" },
  ]);
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    font-family: Arial, sans-serif;
  }
  
  .sidebar {
    width: 250px;
    background: #f5f5f5;
    padding: 20px;
  }
  
  .menu {
    list-style: none;
    padding: 0;
  }
  
  .menu li {
    margin: 10px 0;
    cursor: pointer;
  }
  
  .logout {
    background: red;
    color: white;
    border: none;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  
  .recent-councils {
    margin-top: 20px;
  }
  
  .council-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .council-card {
    width: calc(33.33% - 10px);
    padding: 10px;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .color-1 {
    background: #d2a8ff;
  }
  
  .color-2 {
    background: #ff8a80;
  }
  
  .color-3 {
    background: #ffa726;
  }
  
  .color-4 {
    background: #66bb6a;
  }
  </style>
  