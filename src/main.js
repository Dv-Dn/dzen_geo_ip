import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { apolloProvider } from "./vue-apollo";

Vue.config.productionTip = false;

new Vue({
	store,
	apolloProvider,
	render: h => h(App)
}).$mount("#app");
