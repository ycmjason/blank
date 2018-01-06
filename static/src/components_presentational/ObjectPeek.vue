<template>
  <main>
    <bl-p-peek @peeked="$emit('peeked')">
      <div class="object">{{obj}}</div>
    </bl-p-peek>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    obj: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
@import '../styles/config.scss';
@import '../styles/foundations.scss';

$object-font-size: 5rem;

main {
  margin-top: $core-margin;
  margin-bottom: $core-margin;
}

.object {
  @extend .break-word;
  text-align: center;
  position: relative;
  font-size: $object-font-size;
  padding-top: $core-padding;
  padding-bottom: $core-padding;
}
</style>
