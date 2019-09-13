<template>
    <div class="theme-orange">
        <div class="authentication">
            <div class="row">
                <div class="col-md-10 text-right m-b-30" style="margin-top: 30px;">
                    <router-link class="btn  btn-raised bg-grey waves-effect fa fa-chevron-circle-left" to="/"><strong>BACK</strong></router-link>
                </div>
            </div>
            <div class="card">
                <div class="body">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header slideDown">
                                <div class="logo"><img src="static/assets/images/logo.png" alt="Nexa"></div>
                                <h1>User Login</h1>
                            </div>                        
                        </div>
                        <form class="col-lg-12" id="sign_in" method="POST">
                            <h5 class="title">Sign in to your Account</h5>
                            <div class="form-group form-float">
                                <div class="form-line" :class="{error: validation.hasError('login.email')}">
                                    <input type="text" class="form-control" v-model="login.email">
                                    <label class="form-label">Email</label>
                                </div>
                                <div class="message" style="color: red;">{{ validation.firstError('login.email') }}</div>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line" :class="{error: validation.hasError('login.password')}">
                                    <input type="password" class="form-control" v-model="login.password">
                                    <label class="form-label">Password</label>
                                </div>
                                <div class="message" style="color: red;">{{ validation.firstError('login.password') }}</div>
                            </div>
                            <div>
                                <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-cyan">
                                <label for="rememberme">Remember Me</label>
                            </div>                        
                        </form>
                        <div class="col-lg-12">
                            <a  class="btn btn-raised btn-primary waves-effect" @click="signin">SIGN IN</a>
                            <router-link class="btn btn-raised btn-default waves-effect" to="/register">SIGN UP</router-link>               
                        </div>
                        <div class="col-lg-12 m-t-20">
                            <a><router-link to="">Forgot password?</router-link></a>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { loginUrl, getHeader, userUrl } from './config';
    import { clientId, clientSecret } from './env';
    import SimpleVueValidation from 'simple-vue-validator';
    const Validator = SimpleVueValidation.Validator; 
	export default{
        data(){
            return{
                login: {
                    email: '',
                    password: ''
                }
            }
        },
		methods: {
			signin(){
                var self = this;
                this.$validate()
                .then(function(success) {
                    if (success) {
                        const postData = {
                            grant_type: 'password',
                            client_id: clientId, 
                            client_secret: clientSecret,
                            username: self.login.email,
                            password: self.login.password,
                            scope: ''
                        }
                        const authUser = {}
                        self.$http.post(loginUrl, postData)
                            .then(response => {
                                if(response.status === 200){
                                    // console.log('Oauth Token',response)

                                    authUser.access_token = response.data.access_token
                                    authUser.refresh_token = response.data.refresh_token
                                    window.localStorage.setItem('authUser', JSON.stringify(authUser))

                                    self.$http.get(userUrl, {headers: getHeader()})
                                    .then(response => {

                                        // console.log('User object',response)
                                        authUser.email = response.body.email
                                        authUser.name = response.body.name
                                        window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                        if(response.body.role === '1'){
                                            window.location.href = 'admin'
                                        }
                                        else if(response.body.role === '2'){
                                            window.location.href = 'doctor'
                                        }
                                        else if(response.body.role === '3'){
                                            window.location.href = 'receptionist'
                                        }
                                        else if(response.body.role === '4'){
                                            window.location.href = 'patient'
                                        }
                                        
                                    })
                                }
                            })
                    }
                }).catch((e)=>{
                    console.log(e)
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