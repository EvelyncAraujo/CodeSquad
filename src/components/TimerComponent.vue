<template>
  <div id="app">
    <!-- Container para o timer e controles -->
    <div class="fixed-container">
      <div class="timer">
        <h1>{{ formatTime(time) }}</h1>
      </div>
      <div class="controls">
        <button @click="startTimer" :disabled="isRunning">Iniciar</button>
        <button @click="pauseTimer" :disabled="!isRunning">Pausar</button>
        <button @click="resetTimer" :disabled="time === 0">Resetar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";

// Reatividade
const time = ref(0); // Tempo em segundos
const isRunning = ref(false); // Se o cronômetro está rodando
let interval = null; // Armazena o intervalo

// Inicia o cronômetro
const startTimer = () => {
  isRunning.value = true;
  interval = setInterval(() => {
    time.value++;
  }, 1000);
};

// Pausa o cronômetro
const pauseTimer = () => {
  isRunning.value = false;
  clearInterval(interval); // Limpa o intervalo
};

// Reseta o cronômetro
const resetTimer = () => {
  isRunning.value = false;
  clearInterval(interval); // Limpa o intervalo
  time.value = 0; // Reseta o tempo
};

// Formata o tempo no formato MM:SS
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

// Limpeza do intervalo quando o componente for destruído
onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.fixed-container {
  position: fixed;
  top: 3px;
  right: 20px;
  text-align: center;
}

.timer {
  font-size: 1rem;
  color: #2b2a2a;
  border-radius: 8px;
}
.controls button {
  font-size: 0.8rem;
  padding: 6px 9px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  background-color: #f28c8c;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.controls button:hover {
  background-color: #f28c8c;
}

.controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
