<template>
    <div class="container">
        <form @submit.prevent="pressed">
        <custom-input v-model="email" :label="emailLabel"/>
        <custom-input v-model="password" :label="passwordLabel"/>
        <button>SIGN UP</button>
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
          console.log("here");
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
  height: 40px;
  width: 78%;
  font-size: 18px;
  border-radius: 27.5px;
  background-color:#7F04FC ;
  color: #FFFFFF;
  border:solid 2px #7F04FC;
}

.error {
  color: red;
  font-size: 18px;
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