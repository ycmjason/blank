<template>
  <main>
    <h2>Please pass to Master</h2>
    <p>Tap on the section below to reveal the distribution.</p>
    <bl-p-master-peek :distribution="distribution"></bl-p-master-peek>
    <bl-back></bl-back>
    <bl-next-game></bl-next-game>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['distribution']),
}
</script>

<style scoped lang="scss"></style>
