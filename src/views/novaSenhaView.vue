<template>
    <div class="app">
        <div class="container"> <transition name="fade">
        <div v-if="!success" class="reset-password-container">
          <h2>Digite nova senha</h2>
          <div class="input-group">
            <label for="password">Senha</label>
            <div class="password-input">
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
              />
              <button type="button" @click="toggleShowPassword">
                <span>{{ showPassword ? '🙈' : '👁️' }}</span>
              </button>
            </div>
          </div>
          <div class="input-group">
            <label for="confirm-password">Confirme a senha</label>
            <div class="password-input">
              <input
                id="confirm-password"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="confirmPassword"
              />
              <button type="button" @click="toggleShowConfirmPassword">
                <span>{{ showConfirmPassword ? '🙈' : '👁️' }}</span>
              </button>
            </div>
          </div>
          <button
            :disabled="!isFormValid"
            @click="changePassword"
            class="submit-button"
          >
            Mudar senha
          </button>
        </div>
      </transition>
  
      <transition name="fade">
        <div v-if="success" class="success-container">
          <div class="success-icon">
            <div class="circle">
              <div class="checkmark"></div>
            </div>
          </div>
          <p>Senha atualizada com sucesso!</p>
          <button class="submit-button" @click="proceed">Prosseguir</button>
        </div>
      </transition></div>
     
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  // Campos de senha
  const password = ref("");
  const confirmPassword = ref("");
  
  // Controle de visibilidade das senhas
  const showPassword = ref(false);
  const showConfirmPassword = ref(false);
  
  // Alternar visibilidade das senhas
  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
  };
  
  const toggleShowConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
  };
  
  // Validação do formulário
  const isFormValid = computed(() => {
    return password.value && confirmPassword.value && password.value === confirmPassword.value;
  });
  
  // Controle de tela de sucesso
  const success = ref(false);
  
  // Função para mudar senha
  const changePassword = () => {
    success.value = true;
    // Adicione aqui lógica para enviar a nova senha para uma API.
  };
  
  // Ação para prosseguir
  const proceed = () => {
    alert("Navegando para próxima etapa...");
  };
  </script>
  
  <style scoped>
  /* Estilo geral */

  .app {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    background-color: #f9f9f9;
  }
  
  /* Página de redefinição de senha */
  .reset-password-container {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #666;
  }
  
  .password-input {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px 10px;
  }
  
  .password-input input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
  }
  
  .password-input button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
  
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  /* Página de sucesso */
  .success-container {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .success-icon {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
  
  .circle {
    width: 100%;
    height: 100%;
    background: #a0d995;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .checkmark {
    width: 20px;
    height: 10px;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(-45deg);
    position: absolute;
  }
  
  /* Animação */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  