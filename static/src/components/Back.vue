<template>
  <button @click="prevPlayer">Back</button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: mapMutations(['prevPlayer']),
}
</script>

<style scoped lang="scss"></style>
