<template>
  <main>
    <input type="text" placeholder="Object 1" v-model="objects[0]">
    <input type="text" placeholder="Object 2" v-model="objects[1]">
    <button class="primary" @click="start()">Start game!</button>
  </main>
</template>

<script>
export default {
  data(){
    return {
      objects: []
    };
  },
  methods: {
    start(){
    }
  }
}
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
