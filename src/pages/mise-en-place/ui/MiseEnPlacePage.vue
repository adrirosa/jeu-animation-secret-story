<template>
  <h1>Mise en place du jeu</h1>
  <p>
    Rentrer ici les joueurs et leurs secrets. Penser à ajouter de faux secrets afin de brouiller les
    pistes.
  </p>

  <FormulaireSecret />

  <!-- section recap de la saisie + lancement du jeu -->
  <section v-if="secrets.length">
    <h2>Récapitulatif des secrets</h2>
    <ul>
      <li v-for="secret in secrets" :key="secret.id">
        {{ secret.nomJoueur || "Personne" }} - {{ secret.secret }} - Faux secret: {{ secret.isFauxSecret ? "Oui" : "Non" }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import FormulaireSecret from "@/pages/mise-en-place/ui/FormulaireSecret.vue";
import { useSecretsStore } from "@/features/secrets";

const secretsStore = useSecretsStore();
const secrets = secretsStore.secrets;
</script>
