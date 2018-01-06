import Vue from 'vue';
import Vuex from 'vuex';

import { flatten, pickRandom, repeat, range, shuffle } from '@/utils/array';

Vue.use(Vuex);

const initial_state = {
  current_player: 0,
  player_count: 0,
  objects: [],
  distribution: [],
  started: false,
};

const state = {
  ...initial_state
};

const mutations = {
  nextGame: (state) => Object.assign(state, initial_state),
  startGame: (state) => state.started = true,
  nextPlayer: (state) => state.current_player++,
  prevPlayer: (state) => state.current_player = Math.max(0, state.current_player - 1),
  setPlayerCount: (state, n) => state.player_count = n,
  setObjects: (state, objects) => state.objects = objects,
  setDistribution: (state, dist) => state.distribution = dist,
};

const actions = {
  startGame({ state, commit, dispatch }, { objects, player_count }) {
    const blank_count = pickRandom(range(1, maxBlanks(player_count)));
    commit('setObjects', [...objects]);
    commit('setPlayerCount', player_count);
    dispatch('prepareDistribution', blank_count);
    commit('startGame');
  },
  prepareDistribution({ state, commit }, blank_count) {
    const objs = ['Blank', ...state.objects];
    const distribution_cumm = distributePlayers(state.player_count, blank_count);
    const distribution = shuffle(flatten(distribution_cumm.map((n, i) => repeat(objs[i], n))));
    commit('setDistribution', distribution);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
});


///

function distributePlayers(player_count, blank_count) {
  // return: [# of blanks, # of object 1, # of object 2]
  const object_count = player_count - blank_count;
  return [blank_count, ...shuffle([Math.floor(object_count / 2), Math.ceil(object_count / 2)])];
}

function maxBlanks(player_count) {
  return Math.floor(player_count / 3);  
}
