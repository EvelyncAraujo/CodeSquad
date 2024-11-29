<script setup>
// Nenhuma lógica é necessária neste exemplo, apenas a estrutura da página.
</script>

<template>
  <div class="back">
    <mdicon name="arrow-left-drop-circle-outline"></mdicon>
  </div>
  <h1>Conselho 1</h1>
  <div class="header">


  </div>

  <div class="content">
    <p class="data">
      <strong>Data:</strong> 26 de Junho de 2022
    </p>

    <div class="section">
      <h2>Decisões:</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
    </div>

    <div class="section">
      <h2>Observações:</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>

</template>


<style scoped>
.container {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #ff6b6b;
  margin-right: auto;
}

.title {
  font-size: 20px;
  color: #555;
}

.data {
  font-size: 16px;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 20px;
}

.section h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #444;
}

.section p {
  text-align: justify;
  font-size: 16px;
  color: #666;
}

p,
h2 {
  padding: 0px 100px 0px 100px;
}

h1 {}
</style>