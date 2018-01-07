<template>
  <main v-html="howtomd">
  </main>
</template>

<script>
import { mapState } from 'vuex';
import howtomd from './Howto.md';

export default {
  data(){
    return {
      howtomd
    };
  },
  computed: mapState(['started', 'current_player', 'player_count']),
}
</script>

<style scoped></style>
