<template>
  <main>
    <h2>Please pass to Master</h2>
    <p>Tap on the section below to reveal the distribution.</p>
    <bl-p-master-peek :distribution="distribution" @peeked="newable = true"></bl-p-master-peek>
    <button @click="newGame()" :disabled="!newable">Start new game</button>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data(){
    return {
      newable: false,
    };
  },
  computed: mapState(['distribution']),
  methods: mapMutations(['newGame']),
}
</script>

<style scoped lang="scss"></style>
