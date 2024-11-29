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
  