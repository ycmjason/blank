<template>
  <main>
    <b-entry-form v-if="!started"></b-entry-form>
    <b-object-peek v-if="started"></b-object-peek>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['started']),
}
</script>

<style scoped></style>
