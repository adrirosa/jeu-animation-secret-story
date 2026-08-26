<template>
  <div class="aside-menu">
    <ul>
      <li>
        <RouterLink to="/" active-class="active" exact-active-class="active">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="/mise-en-place" active-class="active" exact-active-class="active"
          >Mise en place</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

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
