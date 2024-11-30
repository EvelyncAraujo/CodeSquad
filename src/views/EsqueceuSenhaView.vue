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
        devemos usar para redefinir sua senha </p>
      <div class="input-container">
        <input class="option" placeholder="Digite seu email"></input>
      
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
 margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.card {
  margin-bottom: 300px;
  width: 100%;
  max-width: 360px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
 
}

h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 0px;
}

p {
  font-size: 16px;
  color: #555;
  margin-bottom: 60px;
}

.option {
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 60px;
  width: 87%;
  padding-left: 18px;
  
 
}

.email{
  position: absolute;
  font-size: 12px;
  color: #888;
  top: 8px;
  left: 10px;
  color: #f36b6b;
}

.details {
  text-align: left;
}

button {
  width: 100%;
  background: #EA8983;
  color: white;
  padding: 22px ;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}

button:hover {
  background: #e6908b;
}
</style>
