import Vue from 'vue';
import VueAnalytics, { onAnalyticsReady } from 'vue-analytics'

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

const RootApp = new Vue({
  router,
  store,
  render: h => h(App)
})

onAnalyticsReady().then(() => RootApp.$mount('#app'));
