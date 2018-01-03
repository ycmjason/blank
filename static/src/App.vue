<template>
  <div>
    <b-header></b-header>
    <section class="container">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './styles/config.scss';
@import './styles/form.scss';

html {
  box-sizing: border-box;
  font-family: $font-family-primary;
  font-size: 18px;
  background: $color-background;
  color: $color-foreground;
}

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $font-family-secondary;
}

.container {
  width: 1200px;
  max-width: 100vw;
  padding: 0 5px;
  margin: 0 auto;
}

</style>
