<template>
  <footer>
    <div class="copy">2017 &copy; built with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://github.com/ycmjason/blank">Jason Yu</a></div>
    <div class="version">v{{version}}</div>
  </footer>
</template>

<script>
import { version } from '@/../../package.json';

export default {
  data() {
    return { version };
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';

footer {
  margin-top: $core-margin * 2;
  margin-bottom: $core-margin;
}

.copy {
  text-align: center;
  text-transform: capitalize;  
  margin-top: $core-margin;
  margin-bottom: $core-margin;
}

.version {
  font-family: $font-family-secondary;
  font-size: 0.7rem;
  text-align: center;
}

i.fa.fa-heart {
  color: red;
}
</style>
