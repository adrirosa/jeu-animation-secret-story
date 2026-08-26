import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => ({
    hasStarted: false,
  }),
  actions: {
    launchGame() {
      this.hasStarted = true;
    },
  },
});
