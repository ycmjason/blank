<template>
  <header>
    <section class="container">
      <h1><a href="/">Blank</a></h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/howto">How to play?</router-link></li>
      </ul>
    </section>
  </header>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';

header {
  background-color: $color-primary;
  padding-top: ($core-padding * 2);
  padding-bottom: $core-padding;
  box-shadow: $core-shadow;
  margin-bottom: $core-margin;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  a {
    color: $color-foreground;
  }
}

ul {
  padding: 0;
  margin: 0;
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
