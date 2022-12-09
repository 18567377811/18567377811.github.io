import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router/routes";
import Vant from "vant";
import "vant/lib/index.css";
import 'lib-flexible';

createApp(App).use(Vant).use(router).mount("#app");
