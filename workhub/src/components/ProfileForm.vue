<template>

<!-- Profile Banner -->
    <div>
        <div class="ProfileBanner">
            <img src="" alt="Your Profile picture">

            <h4>Name</h4>

            <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile">
            </div>
        </div>


<!-- Settings Inputs-->

        <h2 class="mt-3 mb-3">Settings</h2>

        <div class="container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input v-model="fullname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ivan Velkov">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleFormControlInput1" placeholder="***">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input v-model="phone" type="tel" class="form-control" id="exampleFormControlInput1" placeholder="000-000-000">
            </div>
        </div>



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
                            <textarea v-model="aboutme" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                            <textarea v-model="experiences" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                    </div>
                </div>
            </div>
        </div>
        </div>

    <div class="container">
        <h2 class="mt-3 mb-3">Documents</h2>

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

    </div>

</template>

<script>

import db from '../main';


    export default {
        name: 'ProfileForm',

            data(){
                
                return{
                    fullname: null,
                    email: null,
                    password: null,
                    phone: null,
                }
        },



    }


</script>

<style>

</style>