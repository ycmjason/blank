<template>
  <header>
    <h1>Blank</h1>
  </header>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';

header {
  background-color: $color-primary;
  text-align: center;
  padding-top: ($core-padding * 2);
  padding-bottom: $core-padding;
  box-shadow: $core-shadow;
  margin-bottom: ($core-margin * 2);

  h1 {
    margin: 0;
  }
}
</style>
