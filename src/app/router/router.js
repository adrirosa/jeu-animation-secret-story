import { createRouter, createWebHistory } from "vue-router";
import { AccueilPage } from "@/pages/regles-jeu";
import { MiseEnPlacePage } from "@/pages/mise-en-place";
import { JournalSecretsPage } from "@/pages/journal-secrets";

const routes = [
  {
    path: "/",
    name: "accueil",
    component: AccueilPage,
  },
  {
    path: "/mise-en-place",
    name: "mise-en-place",
    component: MiseEnPlacePage,
  },
  {
    path: "/journal-secrets",
    name: "journal-secrets",
    component: JournalSecretsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
