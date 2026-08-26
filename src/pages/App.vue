<template>
  <MainLayout>
    <template #default>
      <RouterView />
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/widgets/layouts/MainLayout.vue";
</script>
