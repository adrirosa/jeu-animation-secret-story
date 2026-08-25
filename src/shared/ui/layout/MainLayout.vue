<template>
  <HeaderBar />
  <div class="content-layout">
    <AsideMenu />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import HeaderBar from "@/shared/ui/layout/HeaderBar.vue";
import AsideMenu from "@/shared/ui/layout/AsideMenu.vue";
</script>

<style scoped>
.content-layout {
  display: flex;
  flex: 1;
}

main {
  width: 1126px;
  margin: 0 auto;
}
</style>
