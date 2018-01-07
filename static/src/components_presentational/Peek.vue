<template>
  <main @mousedown="peek()"
    @touchstart="peek()"
    @mouseup="peeked()"
    @touchend.prevent="peeked()">
    <div class="overlay_cloak" :class="{hide: is_down}"></div>
    <slot></slot>
  </main>
</template>

<script>
export default {
  data(){
    return {
      is_down: false,
    };
  },
  methods: {
    peek(){
      console.log('down');
      if(this.is_down) return;
      this.is_down = true;
      this.$emit('peek');
    },
    peeked(){
      console.log('up');
      if(!this.is_down) return;
      this.is_down = false;
      this.$emit('peeked');
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';

main {
  position: relative;
}

.overlay_cloak {
  background: $color-secondary;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: none;
  overflow: hidden;
  box-shadow: $core-shadow;

  &.hide {
    opacity: 0;
    transition: opacity $core-transition-duration;
  }
}
</style>
