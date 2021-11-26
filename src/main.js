import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";

import JsppUI from '@/libs/jspp-ui'

createApp(App).use(store).use(JsppUI).use(router).use(ElementPlus).mount("#app");
