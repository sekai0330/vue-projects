import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { projectAuth } from "./firebase/init";
import "./assets/main.css";

let app;

// wait for firebase auth to initialize
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
