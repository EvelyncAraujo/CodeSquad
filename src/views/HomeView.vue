<script setup>
  import { ref, computed } from "vue";
  
   // Controle do modo escuro
  const isDarkMode = ref(false);
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };
  
  // Dados fictícios dos conselhos
  const councils = ref([
    { id: 1, name: "Conselho 1", date: "25 de junho de 2023", trimester: "Trimestre 1", color: "#E2AED2" },
    { id: 2, name: "Conselho 2", date: "26 de junho de 2023", trimester: "Trimestre 1", color: "#EA8C8C" },
    { id: 3, name: "Conselho 3", date: "27 de junho de 2023", trimester: "Trimestre 1", color: "#F2866C" },
    { id: 4, name: "Conselho 4", date: "28 de junho de 2023", trimester: "Trimestre 2", color: "#F06A45" },
    { id: 5, name: "Conselho 5", date: "29 de junho de 2023", trimester: "Trimestre 2", color: "#E2AED2" },
    { id: 6, name: "Conselho 6", date: "30 de junho de 2023", trimester: "Trimestre 2", color: "#EA8C8C" },
    { id: 7, name: "Conselho 7", date: "28 de junho de 2023", trimester: "Trimestre 2", color: "#F2866C" },
    { id: 8, name: "Conselho 8", date: "29 de junho de 2023", trimester: "Trimestre 2", color: "#F06A45" },
    { id: 9, name: "Conselho 9", date: "30 de junho de 2023", trimester: "Trimestre 2", color: "#E2AED2" },
  ]);
  
  // Estado para a pesquisa e filtro
  const searchQuery = ref("");
  const selectedFilter = ref("Trimestre");
  
  
  // Computed para filtrar conselhos
  const filteredCouncils = computed(() => {
    return councils.value.filter(
      (council) =>
        council.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
        (selectedFilter.value === "Trimestre" || council.trimester === selectedFilter.value)
    );
  });
  </script>

<template>
    <div :class="['dashboard', isDarkMode ? 'dark' : 'light']">
  <aside class="aside-menu">
    <img alt="Logo" src="/src/assets/logo.png">
    <ul class="menu">
      <li>
        <button class="menu-item">Explore</button>
      </li>
      <li>
        <button class="menu-item">Conselho</button>
      </li>
      <li>
        <button class="menu-item">Gerenciamento Acadêmico</button>
      </li>
    
    </ul>
    <button class="logout">Sair</button>
  </aside>
  
      <!-- Main Content -->
      <main class="content">
        <!-- Header -->
        <header class="header">
          <div class="user-info">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              class="avatar"
            />
            <div class="name">
              <h2>Oliver Calenbard</h2>
              <p>Nupe</p>
            </div>
          </div>
          <div class="actions">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Pesquisar conselhos"
              class="search-input"
            />
            <button @click="toggleDarkMode" class="theme-toggle">
              {{ isDarkMode ? 'Light' : 'Dark' }}
            </button>
          </div>
        </header>
  
        <!-- Recent Councils -->
        <section class="recent-councils">
          <h3>Conselhos recentes</h3>
          <div class="filters">
            <label for="filter">Filtrar por:</label>
            <select id="filter" v-model="selectedFilter">
              <option value="Trimestre">Trimestre</option>
              <option value="Data">Data</option>
            </select>
          </div>
          <div class="council-cards">
            <div
              v-for="council in filteredCouncils"
              :key="council.id"
              class="council-card"
              :style="{ backgroundColor: council.color }"
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
  
  
  
  <style scoped>

 
  /* Estilos principais */
  .dashboard {
    display: flex;
    font-family: "Arial", sans-serif;
    transition: background 0.3s, color 0.3s;
  }
  
  /* Modos claro e escuro */
  .light {
    background: #FAF9F9;
    color: #333;
  }
  
  .dark {
    background: #333;
    color: #f9f9f9;
  }
  
  /* Sidebar */
 
/* Container principal do aside */
.aside-menu {
  width: 240px;
  background-color: #ffffff;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e6e6e6;
  height: 100vh;
  box-sizing: border-box;
}
.name{
margin-left: 5rem;
}



/* Lista de itens do menu */
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.menu-item {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  text-align: left;
  padding: 10px 20px;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.menu-item:hover {
  background-color: #f9f9f9;
  color: #ff6b6b;
}

/* Botão de sair */
.logout {
  font-size: 16px;
  font-weight: 600;
  color: #ff6b6b;
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.logout:hover {
  background-color: #fceaea;
}
  
  .menu {
    list-style: none;
    padding: 0;
  }
  
  .menu li {
    margin: 10px 0;
    cursor: pointer;
    line-height: 35px;
  }
  
  .logout {
    background: red;
    color: white;
    border: none;
    padding: 10px;
    margin-top: 400px;
    cursor: pointer;
    border-radius: 5px;
    
    
  }
  
  /* Conteúdo principal */
  .content {
    flex: 1;
    padding: 20px;
  }
  
  .header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .h2 {
    text-align: right;

  }
  
  .avatar {
    position: fixed;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  
  .search-input {
    border: 1px solid #ccc;
    border-radius: 20px;

    width: 250px;
  }
  
  .theme-toggle {
    background: #007bff;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 5px 15px;
    cursor: pointer;
  }
  
  /* Conselhos Recentes */
  .recent-councils h3 {
    margin-bottom: 10px;
  }
  
  .council-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .council-card {
    width: calc(30.30% - 10px);
    padding: 15px;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s;
  }
  
  .council-card:hover {
    transform: scale(1.05);
  }
  
  .view-details {
    align-self: flex-start;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }




  
  </style>
  