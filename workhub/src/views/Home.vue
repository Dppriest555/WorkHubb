<template>
  <div class="home">
    <img alt="Office worker ilustration" src="../assets/office-worker-1.png">
      <HelloWorld/>
      <BaseButton href="https://www.reddit.com/hot/" />
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BaseButton
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
