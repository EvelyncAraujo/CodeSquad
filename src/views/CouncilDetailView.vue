<script setup></script>
<template>
  <RouterLink to="/home">
    <div class="back">
      <mdicon name="arrow-left-drop-circle-outline"></mdicon>
    </div>
  </RouterLink>
  <h1>Conselho 1</h1>
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
  color: #fd7c31;
}

.section p {
  text-align: justify;
  font-size: 16px;
  color: #666;
}

p,
h2 {
  padding: 0px 150px 0px 150px;
}

h1 {
  text-align: center;
  margin: 0;
  font-size: 2rem;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.back {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #f0f0f0;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 50px;
  cursor: pointer;
  margin-top: 2px;
}

.back:hover {
  background-color: #e0e0e0;
}
</style>
