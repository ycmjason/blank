<template>
  <div>
    <b-header></b-header>
    <section class="container">
      <router-view></router-view>
      <b-footer></b-footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './styles/config.scss';
@import './styles/form.scss';
@import './styles/resets.scss';
@import './styles/foundations.scss';
</style>
