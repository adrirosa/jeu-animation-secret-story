<template>
  <div class="aside-menu">
    <ul>
      <li>
        <RouterLink to="/">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="/mise-en-place">Mise en place</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.aside-menu {
  display: flex;
  justify-content: start;
  width: 15vw;
  background-color: #f4f5f6;
}
</style>
