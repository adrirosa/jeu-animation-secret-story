<template>
  <h1>Mise en place du jeu</h1>
  <p>
    Rentrer ici les joueurs et leurs secrets. Penser à ajouter de faux secrets afin de brouiller les
    pistes.
  </p>

  <section>
    <FormulaireSecret />
  </section>

  <!-- section recap de la saisie + lancement du jeu -->
  <section v-if="secrets.length">
    <h2>Récapitulatif des secrets</h2>
    <ul>
      <li v-for="secret in secrets" :key="secret.id">
        {{ secret.nomJoueur || "Personne" }} - {{ secret.secret }} - Faux secret:
        {{ secret.isFauxSecret ? "Oui" : "Non" }}
      </li>
    </ul>
    <button @click="launchGame">Lancer la partie</button>
  </section>
</template>

<script setup>
import FormulaireSecret from "@/features/create-secret";

import { useRouter } from "vue-router";
import { useSecretsStore } from "@/entities/secrets";
import { useGameStore } from "@/entities/game";

// Stores
const router = useRouter();
const secretsStore = useSecretsStore();
const gameStore = useGameStore();

const secrets = secretsStore.secrets;

// Methodes
const launchGame = () => {
  gameStore.launchGame();

  router.push({ name: "journal-secrets" });
};
</script>
