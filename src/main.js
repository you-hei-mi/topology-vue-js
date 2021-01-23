import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
import Element from 'element-ui'

Vue.use(Element)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
