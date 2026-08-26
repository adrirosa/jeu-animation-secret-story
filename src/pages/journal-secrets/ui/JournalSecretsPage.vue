<template>
  <h1>Journal des secrets</h1>
  <p>
    Ici, vous pouvez consulter les secrets des joueurs et l'état de la partie. A vous de démasquer
    le plus de secrets.
  </p>

  <section>
    <table>
      <thead>
        <tr>
          <th>Secret</th>
          <th>Nom</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="secret in secrets" :key="secret.id">
          <td>{{ secret.secret }}</td>
          <td>{{ secret.isFound ? secret.nomJoueur : "Inconnu" }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useSecretsStore } from "@/entities/secrets";

const secretStore = useSecretsStore();
const secrets = ref(secretStore.secrets);
</script>
