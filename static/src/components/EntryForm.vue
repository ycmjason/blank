<template>
  <b-p-entry-form @start="(settings) => startGame(settings)"></b-p-entry-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions(['startGame']),
}
</script>

<style></style>
