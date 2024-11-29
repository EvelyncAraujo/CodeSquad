<script setup>
  function enviarCodigo() {
    alert("Código enviado para olivercalenbard@gmail.com");
  }
  </script>
<template>
    <div class="container">
      <div class="card">
        <h2>Esqueceu a senha</h2>
        <p>
          Selecione quais detalhes de contato devemos usar para redefinir sua senha
        </p>
        <div class="option">
          <div class="icon">
            <span>📧</span>
          </div>
          <div class="details">
            <p>Enviar via email</p>
            <p class="email">olivercalenbard@gmail.com</p>
          </div>
        </div>
        <button @click="enviarCodigo">Enviar código</button>
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
  
  .card {
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 24px;
    text-align: center;
  }
  
  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 12px;
  }
  
  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 24px;
  }
  
  .option {
    display: flex;
    align-items: center;
    background: #fdf5f5;
    border: 1px solid #f8d7da;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 24px;
  }
  
  .icon {
    width: 36px;
    height: 36px;
    background: #f8d7da;
    color: #d9534f;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 12px;
  }
  
  .details {
    text-align: left;
  }
  
  .email {
    font-size: 12px;
    color: #888;
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
  