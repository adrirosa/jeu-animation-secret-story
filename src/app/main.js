import { createApp } from "vue";
import "@/app/styles/style.css";
import App from "@/pages/App.vue";
import router from "@/app/router/router";

createApp(App).use(router).mount("#app");
