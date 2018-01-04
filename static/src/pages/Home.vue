<template>
  <main>
    <input type="text" placeholder="Object 1" v-model="objects[0]">
    <input type="text" placeholder="Object 2" v-model="objects[1]">
    <select v-model="player_count">
      <option :value="0" disabled selected>NUMBER OF PLAYERS</option>
      <option v-for="i in 8" :value="i">{{i + 4}}</option>
    </select>
    <button class="primary" @click="start()">Start game!</button>
  </main>
</template>

<script>
export default {
  data(){
    return {
      objects: [],
      player_count: 0,
    };
  },
  methods: {
    start(){
      this.$store.dispatch('startGame', {
        objects: this.objects,
        player_count: this.player_count
      });
    },
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30em;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
