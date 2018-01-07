<template>
  <bl-p-entry-form @start="startGame($event); $ga.commands.trackNewGame($ga, $event)"></bl-p-entry-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions(['startGame']),
}
</script>

<style></style>
