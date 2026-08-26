import { defineStore } from "pinia";

export const useSecretsStore = defineStore("secrets", {
  state: () => ({
    secrets: [],
  }),
  actions: {
    addSecret(secret) {
      this.secrets.push({ ...secret, isFound: false });
    },
  },
});
