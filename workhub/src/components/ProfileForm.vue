<template>
    <div class="">
        <!-- Profile Banner -->
        <div class="container">
            <img src="" alt="Your Profile picture">

            <h4>Name</h4>

            <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile">
            </div>

        </div>


        <!-- Settings Inputs-->
        <h2 class="mt-3 mb-3">Settings</h2>
        <div @submit.prevent="submitForm" class="container ">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input v-model="user.fullname" type="text" class="form-control " placeholder="Your Full Name">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input v-model="user.email" type="email" class="form-control" placeholder="name@example.com">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Profesion</label>
                <input v-model="user.profesion" type="text" class="form-control" placeholder="Profesion">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input v-model="user.phone" type="tel" class="form-control" placeholder="000-000-000">
            </div>
        </div>


        <!-- Preferences Inputs-->
        <div class="container">

            <h2 class="mt-3 mb-3">Preferences</h2>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About me
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
                                <textarea v-model="user.about" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                        </div>
                    </div>
                </div>



                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            My experience
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Experience</label>
                                <textarea v-model="user.experience" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Documents Inputs-->
        <div class="container">
            <h2 class="mt-3 ">Documents</h2>

            <div class="mb-3">
                <label for="formFile" class="form-label">Curiculum Vitae</label>
                <input class="form-control" type="file" id="formFile">
            </div>

            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Letters of recommendation</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple>
            </div>

            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Certificates</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple>
            </div>
        </div>

        <button @click="submitForm" class="btn btn-primary">
            Save Changes
        </button>

    </div>

</template>

<script>
import { database } from 'firebase/app';


const firebase = require('firebase/app');
require('firebase/auth');

if (firebase.auth().currentUser !== null) 
        console.log("user id: " + firebase.auth().currentUser.uid);

const userUid =  firebase.auth().currentUser.uid;

    export default {
        name: 'ProfileForm',

         mounted() {
       this.db.collection('profiles')
        
        .doc(userUid).set({userID: firebase.auth().currentUser.uid})
  },

        data() {
            //defying all the data we'll be using here
            return {
                user: firebase.auth().currentUser,
                db: firebase.firestore(),
                user:{
                    fullname: null,
                    phone: null,
                    profesion: null,
                    about: null,
                    experience: null,
                }
            }

    },

        methods: {
               
              async submitForm() {      //calling submitForm on button
                  this.db.collection('profiles').doc(userUid)  //specifying collection
                    .update({ 
                        userID: firebase.auth().currentUser.uid,
                        name: this.user.fullname,
                        phone: this.user.phone,
                        profesion: this.user.profesion,
                        about: this.user.about,
                        experience: this.user.experience,
            })
            //if created, print this
            .then((docRef) => {
            console.log("Document written with ID: ", docRef);
            })
            //if error, print this
            .catch((error) => {
           console.error("Error adding document: ", error);
            });
              }
        },
        


    }

    
</script>
