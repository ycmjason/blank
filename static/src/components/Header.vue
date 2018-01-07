<template>
  <header>
    <section class="container">
      <h1>Blank</h1>
      <ul>
        <li><router-link to="/" @click.native="newGame">Home</router-link></li>
        <li><router-link to="/howto">How to play?</router-link></li>
      </ul>
    </section>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: mapMutations(['newGame']),
}
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';

header {
  background-color: $color-primary;
  padding-top: $core-padding;
  padding-bottom: $core-padding;
  box-shadow: $core-shadow;
  margin-bottom: $core-margin;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  flex-wrap: wrap;
}

h1 {
  margin: 0;
}

ul {
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  justify-content: space-between;

  li {
    list-style: none;
    display: inline-block;
    margin: 0;
    padding: 0 (2 * $core-padding);
  }
}
</style>
