<script setup>
import { useDropdownStore } from "/src/stores/useDropdownStore";
import { ref, computed } from "vue";
const dropdownStore = useDropdownStore();

const { isOpen, toggleDropdown } = dropdownStore;

const username = ref("Olivercalenbard");
const password = ref("");
const isPasswordVisible = ref(false);
const isUsernameValid = ref(true);

const isFormValid = computed(
  () => isUsernameValid.value && password.value.length > 0
);

const validateUsername = () => {
  isUsernameValid.value = username.value.trim().length >= 3;
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
// const toggleDropdown = () => {
//   isOpen.value = !isOpen.value;
// };
</script>

<template>
  <div class="container">
    <div class="img">
      <img src="/tittle.png" alt="Imagem" class="img2" />
    </div>

    <div @click="toggleDropdown" class="dropdown">
      <button class="dropbtn">Servidor</button>
      <div class="dropdown-content">
        <a href="#">Professor</a>
        <a href="#">Estudantes</a>
        <a href="#">Servidor Nupe</a>
      </div>
    </div>

    <div class="top-container">
      <div class="login-container">
        <div class="card">
          <h2>Login</h2>
          <p>coloque suas informações</p>
        </div>
        <div class="input-group">
          <label for="username">Usuário</label>
          <div class="input-wrapper">
            <input
              id="username"
              type="text"
              v-model="username"
              @input="validateUsername"
            />
            <span class="icon success" v-if="isUsernameValid">✔</span>
          </div>
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <div class="input-wrapper">
            <input
              id="password"
              :type="isPasswordVisible ? 'text' : 'password'"
              v-model="password"
            />
            <button
              type="button"
              class="toggle-password"
              @click="togglePasswordVisibility"
            >
              👁️
            </button>
          </div>
          <a href="/esquecer" class="forgot-password">Esqueceu sua senha?</a>
        </div>
        <button class="login-button" :disabled="!isFormValid">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  max-width: 400px;
  /* background-color: #fff; */
  /* border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  padding: 24px;
}

h2 {
  font-size: 26px;
  color: #333;
  margin-bottom: 12px;
  margin-left: 10rem;
  font-family: Arial, Helvetica, sans-serif;
}

p {
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
  margin-left: 8rem;
}


.login-container {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  width: 50%;
  color: #333;
}


.input-group {
  margin-bottom: 20px;
}


label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

input {
  width: 100%;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
}

input:focus {
  border-color: #ff6b6b;
}


.icon.success {
  position: absolute;
  right: 12px;
  color: #4caf50;
  font-size: 16px;
}


.toggle-password {
  background: none;
  border: none;
  position: absolute;
  right: 12px;
  font-size: 16px;
  cursor: pointer;
  color: #666;
}

.forgot-password {
  display: block;
  margin-top: 8px;
  font-size: 12px;
  text-decoration: none;
  color: #007bff;
}

.forgot-password:hover {
  text-decoration: underline;
}


.login-button {
  background-color: #ff6b6b;
  color: white;
  padding: 12px 0;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:disabled {
  background-color: #f2a6a6;
  cursor: not-allowed;
}

.login-button:not(:disabled):hover {
  background-color: #e05555;
}

.dropbtn {
  background-color: #000000;
  color: white;
  padding: 16px;
  border-radius: 25px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  /* z-index: 1; */
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img2 {
  margin-left: 15rem;
}

.top-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
