<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const code = ref(["", "", "", ""]);
const resendTimer = ref(30);
let timerInterval = null;

const isComplete = computed(() => code.value.every((digit) => digit !== ""));

const focusNext = (index) => {
  if (code.value[index].length === 1 && index < code.value.length - 1) {
    const nextInput = inputs.value[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }
};

const submitCode = () => {
  alert(`Código enviado: ${code.value.join("")}`);
};

const startResendTimer = () => {
  resendTimer.value = 30;
  timerInterval = setInterval(() => {
    if (resendTimer.value > 0) {
      resendTimer.value--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
};

onMounted(() => {
  startResendTimer();
});

onBeforeUnmount(() => {
  clearInterval(timerInterval);
});

const inputs = ref([]);
</script>
<template>
  <div class="container">
    <div class="verification-container">
      <h2>Digite o código de verificação</h2>
      <p>Insira o código de verificação para prosseguir com a autenticação.</p>
      <div class="code-inputs">
        <input
          v-for="(digit, index) in code"
          :key="index"
          type="text"
          maxlength="1"
          v-model="code[index]"
          @input="focusNext(index)"
          ref="inputs"
        />
      </div>
      <p class="resend">Reenviar código: {{ resendTimer }}s</p>
      <button @click="submitCode" :disabled="!isComplete">Enviar</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}
.verification-container {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  color: #666;
}

.code-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.code-inputs input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.resend {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}
</style>
