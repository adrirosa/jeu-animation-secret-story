<template>
  <main>
    <h1>Jeu d'animation - Secret Story</h1>
    <p>
      Jeu d'animation basé sur le concept de Secret Story. A faire sur une durée d'une semaine pour
      apprendre à connaitre ses camarades.
    </p>
    <p>But du jeu :</p>
    <ul>
      <li>Protéger son secret le plus longtemps</li>
      <li>Découvrir le secret des autres joueurs</li>
    </ul>

    <p>
      Déroulement du jeu: Chaque joueur transmet son secret à la Voix. Si un joueur pense avoir
      découvert un secret, il peut "buzzer". Le joueur émet l'hypothèse l'appartenance d'un secret à
      un joueur. Si son hypothèse est correcte, il remporte un point et peut buzzer dans une heure.
      Si son hypothèse est incorrecte, il ne peut plus buzzer pendant 3h. Il n'y a pas
      d'élimination. Les joueurs dont le secret a été découvert continuent à jouer pour tenter de
      découvrir les secrets des autres joueurs. Le joueur qui a le plus de points à la fin du jeu
      est déclaré vainqueur. En cas d'égalité, celui qui aura gardé son secret le plus longtemps
      gagne.
    </p>

    <button @click="redirectToMiseEnPlace">Lancer le jeu</button>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const redirectToMiseEnPlace = () => {
  router.push({ name: "mise-en-place" });
};
</script>
