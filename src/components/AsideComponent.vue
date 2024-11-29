<script setup></script>

<template>
  <aside class="aside-menu">
    <img alt="Logo" src="/src/assets/logo.png" class="logo"/>
    <ul class="menu">
      <li>
        <button class="menu-item">
        <mdicon class="icon-book" name="menu"></mdicon>
        Explore</button>
      </li>
      <li>
        <button class="menu-item">
          <mdicon class="icon-book" name="notebook-outline"></mdicon>
          Conselho
        </button>
      </li>
      <li>
        <RouterLink to="/gerenciamento">
          <button class="menu-item">
            <mdicon class="icon-book" name="book"></mdicon>
            Gerenciamento Acadêmico
          </button>
        </RouterLink>
      </li>
    </ul>
    <div class="exit">
      <router-link to="/login">
        <button class="logout">
          <mdicon name="exit-to-app"></mdicon>
          Sair
        </button>
      </router-link>
    </div>
  </aside>
</template>

<style scoped>
/* Container principal do aside */
.aside-menu {
  width: 240px;
  background-color: #ffffff;
  padding: 20px 10px;
  display: flex;
  position: fixed;
  flex-direction: column;
  border-right: 1px solid #e6e6e6;
  height: 100vh;
  box-sizing: border-box;
}
/* Lista de itens do menu */
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  margin-top: 6rem;
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
  background-color: #ea8c8c;
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
.exit {
  width: 80rem;
}
.icon-book {
  color: #ff6b6b;
}
.logo{
    width: 10rem;
    margin-left: 2rem;
    margin-top: 1rem;
}
</style>
