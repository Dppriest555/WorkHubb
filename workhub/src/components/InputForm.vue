<template>
    <div class="container">
        <h1>Get Started</h1>
        <form @submit.prevent="pressed">
        <custom-input v-model="email" :label="emailLabel"/>
        <custom-input v-model="password" :label="passwordLabel"/>
        <button>Sign Up</button>
        <p>Allready Have an account ?<router-link class="linkin" to="/register">Log In</router-link></p>
        </form>
    </div>    
</template>

<script>
import CustomInput from './CustomInput.vue'
import * as firebase from "firebase/app";
import "firebase/auth";


export default {
  components: { CustomInput },
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
          this.$router.replace({ name: "Home" });
        })
        .catch(error => (this.error = error));
    }
  }
};

</script>

<style scoped>

button {
  margin-top: 20%;
  height: 35px;
  width: 80%;
  font-size: 18px;
  border-radius: 27.5px;
  background-color:#36006C;
  color: #FFFFFF;
  border:solid 2px #36006C;
}


input {
    border: none;
    border-bottom: solid 2px #626262;
    background-color: #EEEEEE;
    width: 80%;
}

.input-icons{
    margin-top: 20px;
}
.input-icons i {
            position: absolute;
            margin-bottom: 10px;
            width: 20px;
        }
        
</style>