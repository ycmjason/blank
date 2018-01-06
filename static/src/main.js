import Vue from 'vue';

import router from '@/router';
import store from '@/store';

import App from '@/App.vue';

import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'});

const registerAll = (context, prefix) => context.keys().forEach(p => {
  let name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll(require.context('@/components', false, /.*\.vue/), 'b');
registerAll(require.context('@/components_presentational', false, /.*\.vue/), 'bP');

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
