import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "firebase/firestore"
import "bootstrap"
import dotenv from "dotenv";
import firebase from 'firebase/app';

require("firebase/auth");
dotenv.config();



// CSS tools //
import './assets/css/style.css';





const firebaseConfig = {
    apiKey: "AIzaSyCXhGdbcPCIMxmhVgCWr9OqyBsx7WTMoBg",
    authDomain: "projectapp-228ab.firebaseapp.com",
    projectId: "projectapp-228ab",
    storageBucket: "projectapp-228ab.appspot.com",
    messagingSenderId: "681974193584",
    appId: "1:681974193584:web:a32ac9958d814306e70a75"
  };
  
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);


createApp(App).use(store).use(router).mount('#app')


