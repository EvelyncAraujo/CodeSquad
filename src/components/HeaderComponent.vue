<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>
<template>
 <header class="header">
        <div class="user-info">
          <div>
            <img
              :src="userStore?.user?.photo?.file"
              alt="User Avatar"
              class="avatar"
            />
          </div>
          <div class="name">
            <h2 class="name-user">{{ userStore.user.name }}</h2>
            <p class="employee-function">{{ userStore.user.groups[0].name }}</p>
          </div>
        </div>
      </header>
</template>
<style>
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
}
.avatar {
  width: 40px;
  height: 40px;
}
.name {
  margin: 0%;
  padding: 0%;
}
.name-user {
  text-align: right;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  padding: 0%;
}
.employee-function{
  margin: 0%;
  padding: 0%;
  font-size: 14px;
  font-style: italic;
  margin-top: 5px;
}
</style>