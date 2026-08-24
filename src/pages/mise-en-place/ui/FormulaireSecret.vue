<template>
  <form @submit.prevent="addSecret">
    <label for="joueur">Nom du joueur</label>
    <input id="joueur" v-model="nomJoueur" type="text" name="joueur" :required="!isFauxSecret" />

    <label for="secret">Secret</label>
    <textarea
      id="secret"
      v-model="secret"
      name="secret"
      maxlength="200"
      rows="5"
      cols="33"
      placeholder="J'aime manger des avocats au sucre"
      required
    ></textarea>

    <label for="faux-secret">Faux secret</label>
    <input id="faux-secret" v-model="isFauxSecret" type="checkbox" name="faux-secret" />

    <button type="submit" :disabled="!isSubmitEnabled">Ajouter le secret</button>
  </form>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useSecretsStore } from "@/features/secrets";

// Store
const secretsStore = useSecretsStore();

// Data
const nomJoueur = ref("");
const secret = ref("");
const isFauxSecret = ref(false);

// Computed
const isSubmitEnabled = computed(() => {
  const hasSecret = secret.value.trim();
  const hasPlayerName = nomJoueur.value.trim();

  return hasSecret && (isFauxSecret.value || hasPlayerName);
});

// Watchers
watch(isFauxSecret, (isChecked) => {
  if (isChecked) {
    nomJoueur.value = "";
  }
});

// Methodes
function addSecret() {
  secretsStore.addSecret({
    nomJoueur: isFauxSecret.value ? "" : nomJoueur.value.trim(),
    secret: secret.value.trim(),
    isFauxSecret: isFauxSecret.value,
  });
  resetForm();
}

function resetForm() {
  nomJoueur.value = "";
  secret.value = "";
  isFauxSecret.value = false;
}
</script>
