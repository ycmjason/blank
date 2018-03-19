<template>
  <main>
    <input type="text" placeholder="Object 1" v-model="objects[0]">
    <input type="text" placeholder="Object 2" v-model="objects[1]">
    <select v-model="player_count">
      <option :value="0" disabled selected>NUMBER OF PLAYERS</option>
      <option v-for="i in 8" :value="i + 4">{{i + 4}}</option>
    </select>
    <button class="primary" @click="start()" :disabled="!allowStart">Start game!</button>
  </main>
</template>

<script>
export default {
  props: {
    playerCount: {
      type: Number,
      default: 0,
    },
  },
  data(){
    return {
      objects: ['', ''],
      player_count: this.playerCount,
    };
  },
  computed: {
    allowStart() {
      return this.objects[0].trim() &&
        this.objects[1].trim() && 
        this.player_count >= 5;
    }
  },
  methods: {
    start(){
      if(!this.allowStart) return;
      this.$emit('start', {
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
}
</style>
