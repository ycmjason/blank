<template>
  <bl-p-entry-form @start="startGame($event); $ga.commands.trackNewGame($ga, $event)"
    :player-count="player_count"></bl-p-entry-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState(['player_count']),
  methods: mapActions(['startGame']),
}
</script>

<style></style>
