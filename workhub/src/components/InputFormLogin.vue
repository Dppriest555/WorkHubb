<template>
    <div class="container">
       <div class="Headings">
      <h1>Work<span style="color:#36006C">Hub</span></h1>
        <h2>Lets get you started!</h2>
        <p class="smoltext">Create a profile to continiue</p>
        </div>
        <form @submit.prevent="pressed">
        <custom-input v-model="email" :label="emailLabel"/>
        <custom-input v-model="password" :label="passwordLabel"/>
        <button type="button" class="btn btn-primary mt-4 mb-2 bg-$facebook">Log In</button>
         <p>Dont have an account? <router-link class="linkin" to="/register">Sign Up</router-link></p>
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


.smoltext {
  color: #626262  ;
}

h2 {
  padding-top: 10px;
}

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