<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <h3>Register</h3>
      <div class="email">
        <input type="email" class="inputstyle" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" class="inputstyle" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>

      <button class="facebook">Connect with Facebook</button>
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
      error: "",
                db: firebase.firestore(),
    };
  },
  methods: {
     pressed() {
      firebase
        .auth() 
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const userUid =  firebase.auth().currentUser.uid;

                 this.db.collection('profiles').doc(userUid)  //specifying collection
                    .set({ 
                        userID: firebase.auth().currentUser.uid,
            })
          console.log(this.email);
          this.$router.replace({ name: "Home" });
        })
        .catch(error => (this.error = error));
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

