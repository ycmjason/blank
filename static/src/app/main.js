import Vue from 'vue';
import VueAnalytics from 'vue-analytics'
import { install as OfflinePluginInstall } from 'offline-plugin/runtime';

import router from '@/router';
import store from '@/store';

import App from '@/App.vue';

Vue.use(VueAnalytics, {
  id: 'UA-112074226-1',
  router,
  autoTracking: {
    pageviewOnLoad: false
  },
  commands: {
    trackNewGame($ga, { objects, player_count }){
      const eventCategory = 'game';

      objects.forEach(obj => $ga.event({
        eventCategory,
        eventAction: 'object',
        eventLabel: obj
      }));

      $ga.event({
        eventCategory,
        eventAction: 'player_count',
        eventLabel: player_count,
      });
    }
  },
})

const registerAll = (context, prefix) => context.keys().forEach(p => {
  let name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll(require.context('@/components', false, /.*\.vue/), 'bl');
registerAll(require.context('@/components_presentational', false, /.*\.vue/), 'blP');

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

OfflinePluginInstall();
