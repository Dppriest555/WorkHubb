<template>
  <div class="container">
    <img class="img-fluid " alt="Office worker ilustration" src="../assets/office-worker-1.png">
      <HelloWorld/>
     <router-link class="btn btn-primary mt-5" to="/register">Get Started</router-link>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>

<style scoped>

img{
  margin-top: 110px;
}


</style>
