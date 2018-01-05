<template>
  <footer>
    <div class="copy">2017 &copy; built with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://github.com/ycmjason/blank">Jason Yu</a></div>
  </footer>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';

footer {
  margin-top: $core-margin * 2;
}

.copy {
  text-align: center;
  text-transform: capitalize;  
}

i.fa.fa-heart {
  color: red;
}
</style>
