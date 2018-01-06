<template>
  <div>
    <h2>Please pass to Player {{current_player + 1}}</h2>
    <p class="message">Tap on the section below to reveal your object.</p>
    <bl-p-object-peek :obj="distribution[current_player]" @peeked="nextPlayer"></bl-p-object-peek>
    <bl-back v-if="current_player > 0"></bl-back>
    <bl-next-game v-else></bl-next-game>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState(['current_player', 'distribution']),
  methods: mapMutations(['nextPlayer']),
}
</script>

<style scoped lang="scss"></style>
