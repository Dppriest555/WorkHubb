<template>
<div class="Form">
    <ConectionCheck/>
    <InputForm/>
    <GoogleLogin GoogleTitle= "Login" />
  </div>
</template>



<script>
import InputForm from '@/components/InputFormLogin.vue'
import ConectionCheck from '@/components/ConectionCheck.vue'
import GoogleLogin from '@/components/GoogleLogin.vue'



export default {

   name: 'Login',
  components: {
    InputForm,
    ConectionCheck,
    GoogleLogin
  }
};
</script>

<style scoped>
 .cone {
   margin-bottom: 50px;
 }

 .Form {
   margin-top: 50px;
 }
</style>


