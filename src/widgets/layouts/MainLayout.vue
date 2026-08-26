<template>
  <HeaderBar />
  <div class="content-layout">
    <AsideMenu :menu-items="menuItems" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import HeaderBar from "@/shared/ui/layout/HeaderBar.vue";
import AsideMenu from "@/shared/ui/layout/AsideMenu.vue";

import { useGameStore } from "@/entities/game";

const gameStore = useGameStore();

const menuItems = computed(() => [
  { name: "Accueil", path: "/" },
  { name: "Mise en place", path: "/mise-en-place", isDisabled: gameStore.hasStarted },
  { name: "Journal des secrets", path: "/journal-secrets", isDisabled: !gameStore.hasStarted },
]);
</script>

<style scoped>
.content-layout {
  display: flex;
  flex: 1;
}

main {
  width: 1126px;
  margin: 32px;
}
</style>
