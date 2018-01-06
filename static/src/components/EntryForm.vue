<template>
  <bl-p-entry-form @start="(settings) => startGame(settings)"></bl-p-entry-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions(['startGame']),
}
</script>

<style></style>
