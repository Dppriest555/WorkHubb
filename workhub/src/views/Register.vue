<template>
  <InputForm title="Username or Email"/>
  <InputFormPassword title="Password"/>

  
</template>



<script>
import * as firebase from "firebase/app";
import "firebase/auth";

import InputForm from '@/components/InputForm.vue'
import InputFormPassword from '@/components/InputFormPassword.vue'


export default {

   name: 'Register',
  components: {
    InputForm,
    InputFormPassword
  },

  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.replace({ name: "secret" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>


