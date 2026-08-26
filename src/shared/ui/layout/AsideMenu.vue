<template>
  <div class="aside-menu">
    <ul>
      <li v-for="menuItem in menuItems" :key="menuItem.name">
        <RouterLink
          :to="menuItem.path"
          active-class="active"
          exact-active-class="active"
          :class="{ disabled: menuItem.isDisabled }"
          :aria-disabled="menuItem.isDisabled"
          :tabindex="menuItem.isDisabled ? -1 : 0"
          @click="handleLinkClick($event, menuItem)"
          >{{ menuItem.name }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

// Props
defineProps({ menuItems: { type: Array, required: true } });

// Methods
function handleLinkClick(event, menuItem) {
  if (menuItem.isDisabled) {
    event.preventDefault();
  }
}
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

.disabled {
  pointer-events: none;
  color: #8c8e93;
  cursor: not-allowed;
  text-decoration: none;
}
</style>
