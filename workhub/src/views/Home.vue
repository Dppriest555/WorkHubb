<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/office-worker-1.png">
    <HelloWorld msg="Welcome to Work"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
