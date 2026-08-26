<template>
  <div class="aside-menu">
    <ul>
      <li v-for="menuItem in menuItems" :key="menuItem.name">
        <RouterLink :to="menuItem.path" active-class="active" exact-active-class="active">{{
          menuItem.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";

const menuItems = ref([
  { name: "Accueil", path: "/" },
  { name: "Mise en place", path: "/mise-en-place" },
  { name: "Journal des secrets", path: "/journal-secrets" },
]);
</script>

<style scoped>
.aside-menu {
  display: flex;
  justify-content: start;
  width: 15vw;
  padding: 24px 16px;
  background-color: #fbf6f6;
}

.active {
  font-weight: 700;
  color: #8f3ac2;
}
</style>
