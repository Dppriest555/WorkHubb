<template>
  <div class="regform">
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
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

<style scoped>
.regform {
  margin-top: 350px;
}
.input {
  width: 260px;
  padding: 30px;
  margin:10px;
}
</style>
