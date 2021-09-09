<template>
  <InputForm title='Username'/>
</template>


<script>
import * as firebase from "firebase/app";
import "firebase/auth";

import InputForm from '@/components/InputForm.vue'


export default {

   name: 'Register',
  components: {
    InputForm
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


