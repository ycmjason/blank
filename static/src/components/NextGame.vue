<template>
  <button @click="nextGame">Next Game</button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: mapMutations(['nextGame']),
}
</script>

<style scoped lang="scss"></style>
