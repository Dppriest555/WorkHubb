<template>
  <div class="container">
    <img class="img-fluid " alt="Office worker ilustration" src="../assets/office-worker-1.png">
      <HelloWorld/>
     <router-link class="btn btn-primary" to="/register">Get Started</router-link>
     <p></p>
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
  margin-top: 10px;
}

.btn-primary{
  margin-top: 180px;
  position: relative;
  z-index: 2;
}

.btn-primary{
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active{
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

p{
  width: 500px;
  height: 400px; /* as the half of the width */
  background:linear-gradient(180deg, #6EAEFE 0%, rgba(188, 213, 244, 0.15) 100%);
  border-top-left-radius: 310px;  /* 100px of height + 10px of border */
  border-top-right-radius: 310px; /* 100px of height + 10px of border */
  border-bottom: 0;
  position: fixed;
  margin-top:-140px ;
  margin-left: -83px;
  z-index: 1;
}


</style>
