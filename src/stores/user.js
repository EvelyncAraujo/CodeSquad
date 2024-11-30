import { ref } from "vue";
import { defineStore } from "pinia";

import UserService from "@/services/user";
const userService = new UserService();

export const useUserStore = defineStore("user", () => {
  const user = ref();

  const fetchMe = async () => {
    const data = await userService.fetchMe();
    user.value = data;
  };
  return { fetchMe, user };
});
