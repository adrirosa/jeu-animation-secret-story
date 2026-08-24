import { defineStore } from "pinia";

export const useSecretsStore = defineStore("secrets", {
  state: () => ({
    secrets: [],
  }),
  actions: {
    addSecret(payload) {
      this.secrets.push({
        id: crypto.randomUUID(),
        nomJoueur: payload.nomJoueur,
        secret: payload.secret,
        isFauxSecret: payload.isFauxSecret,
      });
    },
  },
});
