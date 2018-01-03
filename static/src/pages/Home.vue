<template>
  <main>
    <input type="text" placeholder="Object 1">
    <input type="text" placeholder="Object 2">
    <button class="primary">Start game!</button>
  </main>
</template>

<script>
export default { }
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, button {
  width: 30em;
}
</style>
