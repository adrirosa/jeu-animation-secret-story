<template>
  <MainLayout>
    <template #default>
      <RouterView />
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/shared/ui/layout/MainLayout.vue";
</script>
