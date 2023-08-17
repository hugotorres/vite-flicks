import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "typeface-roboto";
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";

createApp(App).use(router).mount("#app");
