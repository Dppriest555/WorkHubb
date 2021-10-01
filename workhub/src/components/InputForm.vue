<template>
  <div class="container mt-4">
    <div>
      <h1>Work<span style="color:#36006C">Hub</span></h1>
      <h2>Lets get you started!</h2>
      <p>Create a profile to continiue</p>
    </div>
    <form @submit.prevent="pressed">
      <custom-input v-model="email" :label="emailLabel" />
      <br>
      <custom-input v-model="password" :label="passwordLabel" />
      <button type="button" class="btn btn-primary mt-5 mb-5 text-left" >Sign Up</button>
      <p>Allready Have an account? <router-link style="color:#36006C" to="/login">Log In</router-link>
      </p>
      <hr>
      <button class="btn btn-facebook">Connect with Facebook</button>
    </form>
  </div>
</template>

<script>
  import CustomInput from './CustomInput.vue'
  import * as firebase from "firebase/app";
  import "firebase/auth";


  export default {
    components: {
      CustomInput
    },
    name: 'InputForm',

    data() {
      return {
        email: "",
        password: "",
        emailLabel: 'Email',
        passwordLabel: 'Password',
      };
    },
    methods: {
      pressed() {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("Completed");
            this.$router.replace({
              name: "Home"
            });
          })
          .catch(error => (this.error = error));
      }
    }
  };
</script>

<style scoped>


</style>