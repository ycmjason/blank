<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './styles/config.scss';

html {
  box-sizing: border-box;
  font-family: $font-family-primary;
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
