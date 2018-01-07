<template>
  <div>
    <h2>Please pass to Player {{current_player + 1}}</h2>
    <p class="message">Tap on the section below to reveal your object.</p>
    <bl-p-object-peek @peek="nextable = true" :obj="distribution[current_player]" :key="current_player"></bl-p-object-peek>
    <button @click="nextPlayer(); nextable = false" :disabled="!nextable">Next player</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      nextable: false,
    };
  },
  computed: mapState(['current_player', 'distribution']),
  methods: mapMutations(['nextPlayer']),
}
</script>

<style scoped lang="scss"></style>
