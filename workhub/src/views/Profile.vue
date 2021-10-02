<template>
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="mt-4">
                    <h3>Profile settings</h3>
                    
                 <p>
                   Change your profile settings here
                 </p>
              </div>
            </div>
          </div>

                  <div class="container">

                      <!-- Inputs -->
                        <div class="mb-3">
                          <div class="form-group">
                            <input type="text"  v-model="account.name" placeholder="User name" class="form-control">
                          </div>
                        </div>

                        <div class="mb-3">
                          <div class="form-group">
                            <input type="text"  v-model="account.email" placeholder="Email address" class="form-control">
                          </div>
                        </div>

                        <div class="mb-3">
                          <div class="form-group">
                            <input type="tel"  v-model="account.phone" placeholder="Phone" class="form-control">
                          </div>
                        </div>

                        <div class="mb-3">
                          <div class="form-group">
                            <input type="text"  v-model="account.password" placeholder="New password" class="form-control">
                          </div>
                        </div>

                        <div class="mb-3">
                          <div class="form-group">
                            <input type="text" v-model="account.confirmPassword"  placeholder="Confirm password" class="form-control">
                          </div>
                        </div>

                        <div class="mb-3">
                          <div class="form-group">
                            <input type="number" v-model="account.postcode"  placeholder="ZIP Code" class="form-control">
                          </div>
                        </div>

                        <div class="mb-3">
                          <div class="form-group">
                              <input type="file" @change="uploadImage" class="form-control">
                           </div>
                        </div>

                        <div class="mb-3">
                          <div class="form-group">
                              <input type="submit" value="Save Changes" class="btn btn-primary w-100">
                          </div>
                        </div>

                  <!-- Reset Password -->
                        <div class="mb-4">
                            <div class="alert alert-info">
                              Please use the Reset password email button for reseting the password. The form doens't work currently
                            </div>
                        </div>

                        <div class="">
                          <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-100">
                          </div>
                        </div>
                      </div>
                  </div>
          

</template>

<script>


export default {
  name: "profile",
    components: {
    
  },

  props: {
    msg: String
  },

  data(){
    return {

        account:{
            name:null,
            email:null,
            photoUrl:null,
            phone:null,
            emailVerified:null,
            password:null,
            confirmPassword:null,
            postcode:null,
            uid:null,
            postcode:null
        }       
    }
  },

  firestore(){
      return {

      }
  },
  methods:{         

      uploadImage(){}
  },
  created(){

  }

};
</script>




<style scoped>

</style>
