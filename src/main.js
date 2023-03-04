import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import arcoDesign from "./plugins/arco-design";

createApp(App).use(router).use(arcoDesign).mount("#app");
