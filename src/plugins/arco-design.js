import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "@arco-design/web-vue/dist/arco.css";

export default {
  install(app) {
    app.use(ArcoVue);
    app.use(ArcoVueIcon);
  },
};
