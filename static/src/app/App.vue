<template>
  <main>
    <bl-header></bl-header>

    <section class="container">
      <router-view></router-view>
      <bl-footer></bl-footer>
    </section>
  </main>
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
