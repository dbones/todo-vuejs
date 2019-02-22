import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import './components/MomentFilter';
//import './components/MomentAgo';

Vue.config.productionTip = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
