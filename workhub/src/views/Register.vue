<template>
<div class="Form">
  <ConectionCheck/>
  <InputForm/>
  </div>
</template>



<script>
import InputForm from '@/components/InputForm.vue'
import ConectionCheck from '@/components/ConectionCheck.vue'



export default {

   name: 'Login',
  components: {
    InputForm,
    ConectionCheck  
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
