<template>
  <main>
    <bl-p-peek>
      <ol>
        <li class="object" v-for="(obj, i) in distribution">
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

main {
  margin-top: $core-margin;
  margin-bottom: $core-margin;
}

ol {
  padding-left: 3em;
  margin: 0;
}

.object {
  @extend .break-word;
  font-size: $object-font-size;
  padding-top: $core-padding;
  padding-bottom: $core-padding;
}
</style>
