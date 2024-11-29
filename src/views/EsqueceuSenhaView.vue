<script setup>
import Swal from 'sweetalert2'

import { useRouter } from 'vue-router';

const router = useRouter()

function enviarCodigo() {
  Swal.fire({
  confirmButtonColor: "#f36b6b",
  title: "Email enviado com sucesso",
  text: "Um código de verificação foi enviado para seu email",
  icon: "success"
}).then(() => {
  router.push({
    path: '/verificacao'
  })
});
}
</script>
<template>
  <div class="container">
    <div class="card">
      <h2>Esqueceu a senha</h2>
      <p>Selecione quais detalhes de contato <br>
 devemos usar para redefinir sua senha</p>
      <div class="input-container">
        <input class="option" placeholder="Digite seu email">
        </input>
        <mdicon class="email" name="email-outline"></mdicon>
      </div>
      <button @click="enviarCodigo">Enviar código</button>
    </div>
  </div>
</template>

<style scoped>
.input-container{
  position: relative;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}

.card {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding:50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 2px;
}

p {
  font-size: 20px;
  color: #555;
  margin-bottom: 60px;
}

.option {
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 30px 12px;
  margin-bottom:50px;
  width: 87%;
  padding-left: 40px;
}

.email{
  position: absolute;
  font-size: 8px;
  color: #888;
  top: 8px;
  left: 10px;
  color: #000000;
}

.details {
  text-align: left;
}

button {
  width: 100%;
  background: #f36b6b;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background: #e55959;
}
</style>
