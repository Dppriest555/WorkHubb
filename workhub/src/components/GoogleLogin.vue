<template>
  <div class="login-container">
    <button class="btn btn-google mt-3" @click="loginSubmit">{{GoogleTitle}} with Google</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    props: ['GoogleTitle'],

    methods: {
        loginSubmit() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
            .catch(console.log)
            console.log(CompleatedGoogle)
    }
  }
}
</script>

<style scoped>

      
</style>