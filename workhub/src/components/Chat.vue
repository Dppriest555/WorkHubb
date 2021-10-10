<template>
  <div class="wrapper">
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <svg width="24" height="24" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.5 12H3.67004" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    <img src="" width="30" height="30" class="d-inline-block align-top" alt="">
    </a>
    <h4>Ion Cioca</h4>
</nav>
    <section>
      <main>
        <div v-for="(msg, index) in messages" v-bind:key="'index-'+index"
             :class="['message', sentOrReceived(msg.userUID)]">
          <img :src="msg.photoURL" :alt="msg.displayName">
          <p>{{ msg.text }}</p>
        </div>

        <div ref="scrollable"></div>
      </main>

      <form v-on:submit.prevent="sendMessage">
        <input v-model="message"  type="text" placeholder="Enter your message!">
        <button :disabled="!message" type="submit"><svg  width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.11 13.6501L13.69 10.0601" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>
      </form>

    </section>
  </div>
</template>

<script>

import firebase from 'firebase'


export default {
  name: 'Chat',
  mounted() {
    this.db.collection('messages').orderBy('createdAt')
        .onSnapshot(querySnap => {
          this.messages = querySnap.docs.map(doc => doc.data())
        })
  },
  data() {
    return {
      user: firebase.auth().currentUser,
      db: firebase.firestore(),
      message: '',
      messages: [],
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    },
    sentOrReceived(userUID) {
      return userUID === this.user.uid ? 'sent' : 'received'
    },
    async sendMessage() {
      const messageInfo = {
        'userUID': this.user.uid,
        'displayName': this.user.displayName,
        'photoURL': this.user.photoURL,
        'text': this.message,
        'createdAt': Date.now(),
      }
      await this.db.collection('messages').add(messageInfo)
      this.message = ''
      this.$refs['scrollable'].scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
<style scoped>


  body {
    margin: 0;
    height: 100%;
    width: 100%;
    }

  .navbar-brand, svg{
    margin-left: 7px;
  }
  nav{
    background-color: rgb(255, 255, 255);
    border: 1px solid #C6C6C6;
  }

  .nav, h4{
    margin-right: 115px;
  }

  .wrapper {
    text-align: center;
    max-width: 728px;
    margin: 0 auto;
    margin-top: 15px;
  }

    section {

      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 600px;
      background-color: #E5E5E5;
      width:inherit;
    }
      section main {
        padding: 10px;
        height: 75vh;
        margin: 0vh 0 3vh;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
      }
       section main::-webkit-scrollbar {
          width: 0.25rem;
        }
        section main::-webkit-scrollbar-track {
          background: #E5E5E5;
        }
        section main::-webkit-scrollbar-thumb {
          background: #36006C;
        }
      
      form {
        height: 10vh;
        position: fixed;
        bottom: 50px;
        background-color: rgb(255, 255, 255);
        border: 1px solid #C6C6C6;
        box-sizing: border-box;
        width: 350px;
        display: flex;
        font-size: 1.5rem;
      }
       form button {
          width: 5%;
          background-color: rgb(255, 255, 255);
        }
        input {
          line-height: 1.5;
          width: 100%;
          margin-top: 15px;
          margin-bottom: 15px ;
          margin-left: 15px;
          font-size: 1rem;
          background: rgba(91, 52, 179, 0.2);
          border-radius: 90px; 
          color: rgb(0, 0, 0);
          outline: none;
          border: none;
          padding: 0 20px;
        }

      
    button {
      background-color: #282c34; /* Green */
      border: none;
      color: white;
      padding: 15px 10px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      font-size: 1.25rem;
    }
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    
    button, input {
      color: rgb(0, 0, 0);
      border: none;
    }

    button,svg{
      margin-right: 40px;
      
      }

    p {
      max-width: 500px;
      margin-bottom: 12px;
      line-height: 24px;
      padding: 10px 20px;
      border-radius: 25px;
      position: relative;
      color: white;
      text-align: center;
    }
    .message {
      display: flex;
      align-items: center;
    }

    .message.sent{
        flex-direction: row-reverse;
    }

      .message.received p {
          background: #ffffff;
          color: #000;
        }
      
     .message.sent p {

          color: rgb(0, 0, 0);
          background: rgba(91, 52, 179, 0.2);
          align-self: flex-end;
        }
    
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 2px 5px;
      }
      p {
        max-width: 500px;
        margin-bottom: 12px;
        line-height: 24px;
        padding: 10px 20px;
        border-radius: 25px;
        position: relative;
        color: #fff;
        text-align: center;
      }
    
</style>