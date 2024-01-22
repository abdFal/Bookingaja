import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* import the fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// custom css
import "./assets/css/main.css";

createApp(App)
  //   .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
