<template>
  <b-p-object-peek :obj="distribution[current_player]" @peeked="nextPlayer"></b-p-object-peek>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState(['current_player', 'distribution']),
  methods: mapMutations(['nextPlayer']),
}
</script>

<style scoped lang="scss"></style>
