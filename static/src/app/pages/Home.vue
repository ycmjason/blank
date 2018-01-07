<template>
  <main>
    <bl-entry-form v-if="!started"></bl-entry-form>
    <bl-object-peek v-else-if="current_player < player_count"></bl-object-peek>
    <bl-master-peek v-else></bl-master-peek>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['started', 'current_player', 'player_count']),
}
</script>

<style scoped></style>
