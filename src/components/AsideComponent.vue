<script setup>
import { computed, ref } from 'vue';

const isMenuOpen = ref(true);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const width = computed(() => window.innerWidth)

</script>

<template>
  <aside :class="['aside-menu', { 'menu-hidden': !isMenuOpen }]">
    <img alt="Logo" src="/src/assets/logo.png" class="logo"/>
    <button class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="menu" v-if="isMenuOpen || width > 600">
      <li>
      <RouterLink to="/home">
        <button class="menu-item">
        <mdicon class="icon-book" name="view-grid"></mdicon>
        Explore</button>
      </RouterLink>
      </li>
      <li>
        <RouterLink to="/Council">
          <button class="menu-item">
            <mdicon class="icon-book" name="notebook-outline"></mdicon>
            Conselho
          </button>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/academic-management">
          <button class="menu-item">
            <mdicon class="icon-book" name="book"></mdicon>
            Gerenciamento Acadêmico
          </button>
        </RouterLink>
      </li>
    </ul>
    <div class="exit" v-if="isMenuOpen || width > 600">

    <RouterLink to="/login">
        <button class="logout">
          <mdicon name="exit-to-app"></mdicon>
          Sair
        </button>
      </RouterLink>
    </div>
  </aside>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');


* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.aside-menu {
  width: 240px;
  background-color: #ffffff;
  padding: 20px 10px;
  position: fixed;
  flex-direction: column;
  border-right: 1px solid #e6e6e6;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.menu-hidden {
  transform: translateX(-100%);
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  margin-top: 4rem;
}

.menu-item {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
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
  color: #000000;
}

.logout {
  font-size: 16px;
  font-weight: 600;
  color: #ff6b6b;
  padding: 10px 20px;
  cursor: pointer;
  text-align: left;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 40px;
}

.logout:hover {
  background-color: #fceaea;
}

.icon-book {
  color: #505050;
  margin-right: 10px;
  margin-bottom: 300px;
}
.logo{
    width: 8rem;
    margin-left: 2rem;
    margin-top: 2rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 3px;
  background: #333;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

@media (max-width: 600px) {
  .aside-menu {
    transform: translateX(-100%);
    width: 100%;
  }

  .hamburger {
    display: flex;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
  }

  .menu-hidden {
    transform: translateX(-100%);
  }

  .aside-menu:not(.menu-hidden) {
    transform: translateX(0);
  }
}
</style>