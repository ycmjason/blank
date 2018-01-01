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
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.container {
  width: 1200px;
  max-width: 100vw;
  padding: 0 5px;
  margin: 0 auto;
}
</style>
