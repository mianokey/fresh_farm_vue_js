import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {
        name: "",
        token: "",
      },
      
    };
  },
  getters: {},
  actions: {
    async login(name,token) {
      this.user.name = name;
      this.user.token = token;
    },
    async isLoggedin() {

      return this.user;
     
    },
    async logout() {
      this.user = {};
    },
  },
});
