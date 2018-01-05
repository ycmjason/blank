<template>
  <main>
    Tap on the section below to reveal your object.
    <section
      class="object"
      @mouseup.stop.prevent="next()"
      @touchend.stop.prevent="next()"
      @mousedown.stop.prevent="is_down = true"
      @touchstart.stop.prevent="is_down = true">
      <div class="overlay_cloak" :class="{hide: is_down}"></div>
      {{obj}}
    </section>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data(){
    return {
      is_down: false,
    };
  },
  computed: {
    obj(){
      return this.distribution[this.current_player];
    },
    ...mapState(['player_count', 'current_player', 'distribution'])
  },
  methods: {
    next(){
      this.is_down = false;
      this.$store.commit('nextPlayer');
    },
  },
}
</script>

<style scoped lang="scss">
@import '../styles/config.scss';

main {
  text-align: center;
}

.object {
  position: relative;
  font-size: 5em;
  padding-top: $core-padding;
  padding-bottom: $core-padding;
  margin-top: $core-margin;
}

.overlay_cloak {
  background: $color-secondary;
  z-index: 1;
  position: absolute;
  top: 0;
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
