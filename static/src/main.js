import Vue from 'vue';

import router from '@/router';
import store from '@/store';

import App from '@/App.vue';

const registerAll = (context, prefix) => context.keys().forEach(p => {
  let name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll(require.context('@/page_partials', false, /.*\.vue/), 'b');

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
