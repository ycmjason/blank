<template>
  <main>
    <bl-p-peek>
      <ol>
        <li class="object" v-for="obj in distribution">
          {{obj}}
        </li>
      </ol>
    </bl-p-peek>
  </main>
</template>

<script>
export default {
  props: {
    distribution: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
@import '../styles/config.scss';
@import '../styles/foundations.scss';

$object-font-size: 2rem;

.message {
  margin-bottom: $core-margin;
}

.object {
  @extend .break-word;
  position: relative;
  font-size: $object-font-size;
  padding-top: $core-padding;
  padding-bottom: $core-padding;
}
</style>
