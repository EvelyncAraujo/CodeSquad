<script setup>
import { ref, computed } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()

const password = ref("");
const confirmPassword = ref("");

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const isFormValid = computed(() => {
  return (
    password.value &&
    confirmPassword.value &&
    password.value === confirmPassword.value
  );
});

const success = ref(false);

const changePassword = () => {
  success.value = true;
};

function submitCode() {
  Swal.fire({
    confirmButtonColor: "#f36b6b",
    title: "Senha redefinida com sucesso",
    text: "Sua nova senha foi redefinida",
    icon: "success",
  }).then(() => {
    router.push({
      path: "/home",
    });
  });
}


</script>
<template>
  <div class="container">
    <transition name="fade">
      <div v-if="!success" class="reset-password-container">
        <h2>Digite sua nova senha</h2>

        <div class="input-group">
          <label for="password">Senha</label>
          <div class="password-input">
            <input id="password" :type="showPassword ? 'text' : 'password'" v-model="password" />
            <div>
              <button type="button" @click="() => showPassword = !showPassword">
                <mdicon v-if="!showPassword" name="eye-off-outline"></mdicon>
                <mdicon v-if="showPassword" name="eye-outline"></mdicon>
              </button>
            </div>
          </div>
        </div>
        <div class="input-group">
          <label for="confirm-password">Confirme a senha</label>
          <div class="password-input">
            <input id="confirm-password" :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" />
            <button type="button" @click="() => showConfirmPassword = !showConfirmPassword">
              <mdicon v-if="!showConfirmPassword" name="eye-off-outline"></mdicon>
              <mdicon v-if="showConfirmPassword" name="eye-outline"></mdicon>
            </button>
          </div>
        </div>
        <button :disabled="!isFormValid" @click="changePassword" class="submit-button">
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
        <p class="p">Senha atualizada <br> com sucesso!</p>
        <button class="submit-button" @click="submitCode">Prosseguir</button>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.reset-password-container {
  background: #ffffff;
  padding: 80px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 150px;

}

h2 {
  font-size: 24px;
  margin-bottom: 40px;
  margin-left: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.p {
  margin-top: 80px;
  margin-bottom: 40px;
  margin-left: 60px;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.input-group {
  margin-bottom: 25px;
  text-align: left;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #000000;
}

.password-input {
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 12px 10px;
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
  width: 350px;
  padding: 18px;
  background-color: #EA8983;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.success-container {
  background: #ffffff;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 200px;
}

.success-icon {
  margin: 0 auto;
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.circle {
  width: 100px;
  height: 100px;
  background: #a0d995;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;


}

.checkmark {
  width: 40px;
  height: 15px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
