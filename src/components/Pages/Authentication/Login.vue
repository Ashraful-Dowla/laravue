<template>
    <!-- <div id="app"> -->
      <div id="login">
        <loading :active.sync="isLoading" 
            :can-cancel="true" 
            :is-full-page="fullPage">
        </loading>
        <div id="description">
          <h1>Login</h1>
          <p>By logging in you agree to the ridiculously long terms that you didn't bother to read.</p>
          <div class="card">
            <div class="header">
                <modal v-model="showModal">
                    <p slot="header">Enter Your Email</p>
                    <div slot="content">
                       <div class="form-group">
                            <div class="borderBottom">
                                <input v-model="passwordResetEmail" class="form-control" placeholder="Enter email"></input>
                            </div>
                        </div>
                    </div>
                    <template slot="actions">
                        <div class="ui button positive" @click="sendPassResetLink()">
                          Update
                        </div>
                          <div class="ui button red" @click="showModal=false">
                              Cancel
                          </div>
                    </template>
                </modal>
            </div>
            </div>
        </div>
        <div id="form">
          <form @submit.prevent="signin">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="login.email" placeholder="Enter Your Email " autocomplete="off">

            <label for="password">Password</label>&nbsp;
            <i class="fas" :class="[passwordIcon]" @click="hidePassword = !hidePassword"></i>
            <input :type="passwordType" id="password" v-model="login.password" placeholder="Enter Password">

            <button type="submit" style="color: black;">Sign In</button>
            <br>
            <br>
            <router-link to="/register">Sign Up </router-link>
            <a href="#" @click="setEmail()"> | Forgot password?</a>
          </form>
        </div>
    </div>
</template>
<script>    
    import { loginUrl, getHeader, userUrl , apiDomain} from './config';
    import { clientId, clientSecret } from './env';
    import SimpleVueValidation from 'simple-vue-validator';
    import Swal from 'sweetalert2';
    import modal from 'vue-semantic-modal'
    const Validator = SimpleVueValidation.Validator; 
	export default{
        components: {
            modal
        },
        data(){
            return{
                hidePassword: true,
                login: {

                    email: '',
                    password: ''
                },
                isLoading: false,
                fullPage: true,
                passwordResetEmail: '',
                showModal: false,
                error_msg: 'Intrnal Server Error'

            }
        },
        computed: {
          passwordType() {
            return this.hidePassword ? 'password' : 'text'
          },
          passwordIcon() {
            return this.hidePassword ? 'fa-eye' : 'fa-eye-slash'
          }
        },
		methods: {
            setEmail(){
                this.showModal = true
            },
            sendPassResetLink(){
                var self = this
                this.showModal = false
                this.isLoading = true
                this.$http.post(apiDomain + 'api/sendPasswordResetLink',{email: this.passwordResetEmail})
                    .then(response => {
                        if(response.status === 200){
                            console.log(response)
                            self.resetPasswordSuccess()
                            this.isLoading = false
                        }
                    }).catch((e)=>{
                        console.log(e)
                        self.failedModal()
                        this.isLoading = false
                    })
            },
			signin(){
                var self = this;
                this.$validate()
                .then(function(success) {
                    if (success) {
                        self.isLoading = true
                        const postData = {
                            grant_type: 'password',
                            client_id: clientId, 
                            client_secret: clientSecret,
                            username: self.login.email,
                            password: self.login.password,
                            scope: ''
                        }
                        const authUser = {
                            
                        }
                        self.$http.post(loginUrl, postData)
                        .then(response => {
                            if(response.status === 200){
                                    // console.log('Oauth Token',response)
                                    authUser.access_token = response.data.access_token
                                    authUser.refresh_token = response.data.refresh_token
                                    window.localStorage.setItem('authUser', JSON.stringify(authUser))

                                    self.$http.get(userUrl, {headers: getHeader()})
                                    .then(response => {

                                        if(response.body.email_verified_at !== null){
                                            
                                            if(response.body.role === '1'){
                                                authUser.id = response.body.id
                                                authUser.email = response.body.email
                                                authUser.role = 1
                                                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                                self.isLoading = false
                                                self.$router.push({path: 'admin'})
                                            }
                                            else if(response.body.role === '2'){
                                                authUser.doctor_id = response.body.doctor_id
                                                authUser.id = response.body.id
                                                authUser.email = response.body.email
                                                authUser.department = response.body.department
                                                authUser.role = 2
                                                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                                self.isLoading = false
                                                self.$router.push({path: 'doctor'})
                                            }
                                            else if(response.body.role === '3'){
                                                authUser.role = 3
                                                authUser.id = response.body.id
                                                authUser.receptionist_id = response.body.receptionist_id
                                                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                                self.isLoading = false
                                                self.$router.push({path: 'receptionist'})
                                            }
                                            else if(response.body.role === '4'){
                                                authUser.id = response.body.id
                                                authUser.patient_id = response.body.patient_id
                                                authUser.role = 4
                                                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                                self.isLoading = false
                                                self.$router.push({ path: 'patient'})
                                            }
                                        }
                                        else{
                                            self.confirmYourEmail()
                                            self.isLoading = false
                                        }
                                        
                                    }).catch((e)=>{
                                        console.log(response)
                                        self.isLoading = false
                                    })
                                }
                            }).catch((e)=>{
                                console.log(e)
                                if(e.status == 401){
                                    self.error_msg = "Invalid email or password"
                                    self.failedModal()
                                    self.isLoading = false
                                }
                            })
                        }
                    }).catch((e)=>{
                        console.log(e)
                    })
                },
            failedModal(){
                Swal.fire({
                  text: this.error_msg
              })
            },
            confirmYourEmail(){
                Swal.fire({
                  type: 'error',
                  title: 'Unauthorized!',
                  text: 'Please,confirm your email.'
              })
            },
            resetPasswordSuccess(){
                Swal.fire({
                  type: 'success',
                  title: 'success!',
                  text: 'Your reset password link has sent. Check email'
              })
            }
		},
        validators: {
          'login.email': function (value) {
            return Validator.value(value).required().email();
          },
          'login.password': function (value) {
            return Validator.value(value).required();
          }
        }
	}
</script>
