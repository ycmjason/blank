<template>
  <main @mousedown="peek()"
    @touchstart="peek()"
    @mouseup="peeked()"
    @touchend.prevent="peeked()">
    <div class="overlay_cloak" :class="{hide: !cloaked}"></div>
    <slot></slot>
  </main>
</template>

<script>
export default {
  props: {
    recloak: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      cloaked: true,
    };
  },
  methods: {
    peek(){
      this.cloaked = false;
      this.$emit('peek');
    },
    peeked(){
      if(!this.recloak) return;
      this.cloaked = true;
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
