<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" class="inputstyle" placeholder="email" v-model="email" />
      </div>
      <div class="password">
        <input type="password" class="inputstyle" placeholder="password" v-model="password" />
      </div>
      <button>Login</button>
      <button class="facebook">Connect with Facebook</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
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
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(this.email);
          this.$router.replace({ name: "Home" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>
div {
  color: inherit;
}

.error {
  color: red;
}

h2 {
  padding-top: 10px;
}

.Headings {
  display: flex;
  flex-direction: column;
  text-align: left;
}

button {
  margin-top: 20%;
  height: 35px;
  width: 80%;
  font-size: 15px;
  font-weight: bold;
  border-radius: 27.5px;
  background-color:#36006C;
  color: #FFFFFF;
  border:solid 2px #36006C;
  -webkit-box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.400);
-moz-box-shadow: 0px 5px 9px -1px rgba(0,0,0,0.400);
box-shadow: 0px 5px 9px -1px rgba(0,0,0,0.400);
}

.facebook {
  margin-top: 15px;
  font-size: 15px;
  background-color:#0065FD;
  border:solid 2px #0065FD;
}





        
</style>

