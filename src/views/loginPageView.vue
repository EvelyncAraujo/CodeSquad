<script setup>
import { useDropdownStore } from "/src/stores/useDropdownStore";
import { ref, computed } from "vue";
const dropdownStore = useDropdownStore();

const { isOpen, toggleDropdown } = dropdownStore;

const username = ref("");
const password = ref("");
const isPasswordVisible = ref(false);
const isUsernameValid = ref(false);

const isFormValid = computed(
  () => isUsernameValid.value && password.value.length > 0
);

const validateUsername = () => {
  isUsernameValid.value = username.value.trim().length >= 3;
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<template>
  <div class="container">
    <div class="image-container">
      <div class="img">
        <img src="/tittle.png" alt="Imagem" class="img2" />
      </div>
    </div>
    <div class="top-container">
      <div class="login-container">
        <div class="card">
          <h2>Login</h2>
          <p>Coloque suas informações</p>
        </div>
        <div class="input-group">
          <label for="username">Usuário</label>
          <div class="input-wrapper">
            <input
              id="username"
              type="text"
              v-model="username"
              @input="validateUsername"
              class="input"
            />
            <div>
              <mdicon
                v-if="isUsernameValid"
                class="icon-success"
                name="check-circle"
              ></mdicon>
            </div>
          </div>
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <div class="input-wrapper">
            <input
              id="password"
              :type="isPasswordVisible ? 'text' : 'password'"
              v-model="password"
              class="input"
            />
            <button
              type="button"
              class="toggle-password"
              @click="togglePasswordVisibility"
            >
              <mdicon v-if="isPasswordVisible" name="eye-outline"></mdicon>
              <mdicon v-if="!isPasswordVisible" name="eye-off-outline"></mdicon>
            </button>
          </div>
          <RouterLink to="/esquecer" class="forgot-password"
            >Esqueceu sua senha?</RouterLink
          >
        </div>
        <RouterLink to="/home">
          <button class="login-button" :disabled="!isFormValid">Login</button>
        </RouterLink>
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
  text-align: center;
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
/* Container principal */
.login-container {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  width: 70%;
  color: #333;
}

/* Grupo de inputs */
.input-group {
  max-width: 70%;
  margin-bottom: 20px;
  border-radius: 50px;
}

/* Label do input */
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
}

/* Wrapper do input com ícones */
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

/* Ícone de sucesso */
.icon-success {
  color: rgb(149, 218, 116);
  background: none;
  position: absolute;
  right: 12px;
  bottom: 8px;
  font-size: 16px;
  cursor: pointer;
}

/* Botão para alternar visibilidade da senha */
.toggle-password {
  background: none;
  border: none;
  position: absolute;
  right: 12px;
  font-size: 16px;
  cursor: pointer;
  color: #666;
}

/* Estilo do link "Esqueceu sua senha?" */
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

/* Botão de login */
.login-button {
  background-color: #ff6b6b;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
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
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 20px; /* Distância do topo */
    right: 20px; /* Alinhamento à direita */
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  margin-left: 90rem;
  display: none;
  position: absolute;
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

.dropdown-content a:click {
  background-color: #f1f1f1;
}

.img {
  width: 200%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img2 {
  margin-left: 15rem;
}

.top-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.eye-icon {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-top: 5px;
  cursor: pointer;
}

.image-container{
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

  @media (max-width: 500px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
    }

    .img2{
      margin-left: 0;
    }

    .image-container {
      width: 100%;    
    }

    .top-container {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    .login-container {
      align-items: center;
    }

    .card {
      margin-bottom: 20px;
      text-align: left;
    }

    .input-group{
      width: 100%;
    }

    
  }
</style>
