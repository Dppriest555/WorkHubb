<template>
<div class="Form">
  <ConectionCheck/>
  <InputForm/>
  <GoogleLogin GoogleTitle= "Connect" />
        <p class="mt-4">Already have an account? <router-link class="signin-link text-decoration-none" to="/login">Sign In!</router-link></p>

  </div>
</template>



<script>
import InputForm from '@/components/InputForm.vue'
import ConectionCheck from '@/components/ConectionCheck.vue'
import GoogleLogin from '@/components/GoogleLogin.vue'



export default {

   name: 'Login',
  components: {
    InputForm,
    ConectionCheck,
    GoogleLogin,
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

 .signin-link{
  color: #36006C;
  font-weight: 500;
 }
</style>
