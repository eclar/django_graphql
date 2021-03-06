import Vue from 'vue';
import App from './components/App/App.vue';
import router from './router';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
  router,
  provide: createProvider().provide(),
  render: h => h(App),
}).$mount('#app');
