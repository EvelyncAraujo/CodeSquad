<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

const router = useRouter()

const code = ref(["", "", "", ""]);
const resendTimer = ref(30);
const inputs = ref([]);
let timerInterval = null;

function submitCode() {
  Swal.fire({
    confirmButtonColor: "#f36b6b",
    title: "Código correto",
    text: "Você será redirecionado para redefinir sua senha...",
    icon: "success",
  }).then(() => {
    router.push({
      path: "/recuperacao",
    });
  });
}

const isComplete = computed(() => code.value.every((digit) => digit !== ""));

const focusNext = (index) => {
  if (code.value[index].length === 1 && index < code.value.length - 1) {
    const nextInput = inputs.value[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }
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
</script>
<template>
  <div class="container">
    <div class="verification-container">
      <h2>Digite o código de verificação</h2>
      <p>Insira o código de verificação para prosseguir com a autenticação.</p>
      <div class="code-inputs">
        <input v-for="(digit, index) in code" :key="index" type="text" maxlength="1" v-model="code[index]"
          @input="focusNext(index)" ref="inputs" />
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
  background-color: #ffffff;
}

.verification-container {
  max-width: 300px;
  margin-bottom: 150px;
  text-align: center;
  background: #ffffff;
  padding: 60px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  font-size: 12px;
  color: #666;
  margin-bottom: 60px;
}

.code-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.code-inputs input {
  width: 40px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #000000;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 18px;
  background-color: #EA8983;
  color: white;
  border: none;
  border-radius: 30px;
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
  color: #000000;
  margin-bottom: 50px;
}
</style>
