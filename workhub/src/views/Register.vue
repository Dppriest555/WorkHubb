<template>
  <div class="regform">
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <div class="emailtxt">
        <h4>Email</h4>
      </div>
      <div class="email">
        <input type="email"/>
      </div>
      <div class="passwordtxt">
        <h4>Password</h4>
      </div>
      <div class="password">
        <input type="password"/>
      </div>
      <button type="submit">Sign Up</button>
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
.error {
  color: red;
  font-size: 18px;
}
.regform{
  margin: 5px;
  padding: 30px;
  margin-top: 40%;
  border-radius: 10px;
  background-color: #7460aa13;
}
h4 {
 text-align: left;
 margin-left: 15px;
 margin-bottom: 6px;
 color: #7460AA;
 font-weight: 500;
 }

.email {
  padding-bottom: 20px;
}
input {
  width: 90%;
  font-size: 21px;
  background-color: #7460AA;
  border-radius: 10px;
  border: #7460AA;
  padding: 3px;
}
button {
  margin-top: 20%;
  height: 40px;
  width: 30%;
  font-size: 100%;
  border-radius: 27.5px;
}
</style>
