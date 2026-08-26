import { createApp } from "vue";
import { createPinia } from "pinia";
import "milligram/dist/milligram.css";
import "@/shared/styles/style.css";
import App from "@/pages/App.vue";
import router from "@/app/router/router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
