<template>
    <div class="container">
       <div class="Headings">
      <h1 class="display-2 mt-5 mb-3"> Work<span style="color:#36006C">Hub</span></h1>
        <h2>Lets get you started!</h2>
        <p>Create a profile to continiue</p>
        </div>
        <form @submit.prevent="pressed">
        <custom-input v-model="email" :label="emailLabel"/>
        <custom-input v-model="password" :label="passwordLabel"/>
        <button class="btn btn-primary mb-5 mt-4 ">Log In</button>
         <p>Don't have an account? <router-link class="linkin" to="/register">Sign Up</router-link></p>
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
  components: { CustomInput },
  name: 'InputFormLogin',

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
        .signInWithEmailAndPassword(this.email, this.password)
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

.Headings {
  display: flex;
  flex-direction: column;
  text-align: left;
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