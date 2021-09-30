<template>
  <div class="container">
    <img class="img-fluid" alt="Office worker ilustration" src="../assets/office-worker-1.png">
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
.home{
  display: flex;
  flex-direction: column;
  align-items: stretch;
}


.linkin {
  color: white;
    background-color: #36006C;
    height: 35px;
    width: 80%;
    border-radius: 90px;
    margin: 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    letter-spacing: 1px;
}

.linkin:hover{
    filter: brightness(125%);
}
</style>
