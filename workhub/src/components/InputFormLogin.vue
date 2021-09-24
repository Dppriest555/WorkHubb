<template>
    <div class="container">
       <div class="Headings">
      <h1>WorkHub</h1>
        <h2>Lets get you started!</h2>
        <p>Create a profile to continiue</p>
        </div>
        <form @submit.prevent="pressed">
        <custom-input v-model="email" :label="emailLabel"/>
        <custom-input v-model="password" :label="passwordLabel"/>
        <button>Log In</button>
         <p>Dont have an account ?<router-link class="linkin" to="/register">Sign Up</router-link></p>
          <hr>
        <button class="facebook">Connect with Facebook</button>
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
  font-size: 18px;
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