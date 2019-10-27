<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="page-title">Edit Receptionist</h4>
                </div>
                <div class="col-md-2 text-right m-b-30">
                    <router-link class="btn  btn-raised bg-grey waves-effect fa fa-chevron-circle-left" to="/admin/receptionist"><strong>BACK</strong></router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <form>
                        <div class="row">
                           <div class="col-md-6">
                              <div class="form-group">
                                <p><b>First Name</b></p>
                                 <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.firstName')}">
                                    <input type="text" class="form-control" placeholder="FIRST NAME" v-model="receptionistInfo.firstName"/>
                                </div>
                                <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.firstName') }}</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <p><b>Last Name</b></p>
                             <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.lastName')}">
                                <input type="text" class="form-control" placeholder="LAST NAME" v-model="receptionistInfo.lastName"/>
                            </div>
                            <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.lastName') }}</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <p><b>Username</b></p>
                         <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.username')}" >
                            <input type="text" class="form-control" placeholder="USERNAME" v-model="receptionistInfo.username"/>
                        </div>
                        <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.username') }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <p><b>Email</b></p>
                     <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.email')}">
                        <input type="email" class="form-control" placeholder="EMAIL" v-model="receptionistInfo.email"/>
                    </div>
                    <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.email') }}</div>
                </div>
            </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <p><b>Birthday</b></p>
                                        <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.birthday')}">
                                            <date-picker :bootstrap-styling="true" placeholder="BIRTHDAY" class="datepicker form-control" v-model="receptionistInfo.birthday"></date-picker>
                                        </div>
                                        <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.birthday') }}</div>
                                    </div>
                                </div>
                             <div class="col-md-10">
                                <div class="form-group">
                                    <p><b>Address</b></p>
                                    <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.address')}">
                                        <input type="text" class="form-control" placeholder="ADDRESS" v-model="receptionistInfo.address"/>
                                    </div>
                                    <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.address') }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <p><b>Country</b></p>
                                    <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.country')}">
                                        <select id="country" name="country" class="form-control select" v-model="receptionistInfo.country">
                                            <option value="" selected="selected">Select Country</option>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="East Timor">East Timor</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="North Korea">North Korea</option>
                                            <option value="South Korea">South Korea</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Laos">Laos</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macedonia">Macedonia</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Micronesia">Micronesia</option>
                                            <option value="Moldova">Moldova</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montenegro">Montenegro</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Namibia">Namibia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherlands">Netherlands</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau">Palau</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                            <option value="Saint Lucia">Saint Lucia</option>
                                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syria</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="United States">United States</option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Vatican City">Vatican City</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.country') }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <p><b>State</b></p>
                                    <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.state')}">
                                        <input type="text" class="form-control" placeholder="Enter State" v-model="receptionistInfo.state"/>
                                    </div>
                                    <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.state') }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <p><b>City</b></p>
                                    <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.city')}">
                                        <input type="text" class="form-control" placeholder="Enter City" v-model="receptionistInfo.city"/>
                                    </div>
                                    <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.city') }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <p><b>Postal Code</b></p>
                                    <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.postalCode')}">
                                        <input type="text" class="form-control" placeholder="POSTAL CODE" v-model="receptionistInfo.postalCode"/>
                                    </div>
                                    <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.postalCode') }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <p><b>Phone Number</b></p>
                                    <div class="borderBottom" :class="{error: validation.hasError('receptionistInfo.phoneNumber')}">
                                        <input type="text" class="form-control" placeholder="PHONE NUMBER" v-model="receptionistInfo.phoneNumber"/>
                                    </div>
                                    <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.phoneNumber') }}</div>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-6">
                        <p><b>Status</b></p>
                        <div class="demo-radio-button form-group" :class="{error: validation.hasError('receptionistInfo.status')}">
                           <input name="group1" type="radio" id="radio_6" class="with-gap" value="1" v-model="receptionistInfo.status"/>
                           <label for="radio_6">ACTIVE</label>
                           <input name="group1" type="radio" id="radio_7" class="with-gap" value="0" v-model="receptionistInfo.status"/>
                           <label for="radio_7">INACTIVE</label>
                       </div>
                       <div class="message" style="color: red;">{{ validation.firstError('receptionistInfo.status') }}</div>
                   </div>
                   
               </form>
           </div>
       </div>
       <div class="row">
        <div class="col-md-10">
            <div class="m-t-20 text-center">
                <button type="button" class="ui button positive" @click="editReceptionist()">Save Changes</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-10">
            <hr>
        </div>
    </div>
</div>
</div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import { apiDomain } from '@/components/Pages/Authentication/config';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
import Swal from 'sweetalert2';

    export default {
        components: {
            'date-picker': Datepicker
        },
        data() {
            return {
                receptionistInfo: {
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    birthday: '',
                    address: '',
                    country: '',
                    state: '',
                    city: '',
                    postalCode: '',
                    phoneNumber: '',
                    status: '',
                    id: '',
                    AD_id: null
                }
            }
        },
        methods: {
            editReceptionist(){
                var self = this
                this.submitted = true
                this.$validate()
                  .then( function(success) {
                    if (success) {
                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                                if (result.value) {
                                    self.sendData()     
                              }
                        });
                    }
                }).catch((e)=>{
                  console.log(e)
                })
            },
            sendData(){
                var self = this
                this.$http.post(apiDomain + 'api/saveReceptionistEdits',self.receptionistInfo)
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response)
                            self.successModal();
                        }
                    }).catch((e) => {
                        console.log(e)
                        self.failedModal();
                    })
            },
            successModal(){
                Swal.fire(
                      'Success!',
                      'Successfully Edited!',
                      'success'
                )
            },
            failedModal(){
                Swal.fire({
                      type: 'error',
                      title: 'Oops...',
                      text: 'Something went wrong! '
                })
            }
        },
        validators: {
            'receptionistInfo.firstName': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.lastName': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.username': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.email': function (value) {
                return Validator.value(value).required().email();
            },
            'receptionistInfo.birthday': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.address': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.country': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.state': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.city': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.postalCode': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.phoneNumber': function (value) {
                return Validator.value(value).required();
            },
            'receptionistInfo.status': function (value) {
                return Validator.value(value).required();
            }
        },
        created(){
            var self = this

            const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
            this.receptionistInfo.AD_id = tokenData.id

            this.receptionistInfo.id = this.$route.params.id
            this.$http.post(apiDomain + 'api/initiateReceptionistInfo',{rec_id: self.receptionistInfo.id})
                .then(response => {
                    console.log(response)
                    self.receptionistInfo.firstName = response.body.rec_info_edit[0].first_name
                    self.receptionistInfo.lastName = response.body.rec_info_edit[0].last_name
                    self.receptionistInfo.username = response.body.rec_info_edit[0].username
                    self.receptionistInfo.email = response.body.rec_info_edit[0].email
                    self.receptionistInfo.birthday = response.body.rec_info_edit[0].birthday
                    self.receptionistInfo.address = response.body.rec_info_edit[0].address
                    self.receptionistInfo.country = response.body.rec_info_edit[0].country
                    self.receptionistInfo.state = response.body.rec_info_edit[0].state
                    self.receptionistInfo.city = response.body.rec_info_edit[0].city
                    self.receptionistInfo.postalCode = response.body.rec_info_edit[0].postal_code
                    self.receptionistInfo.phoneNumber = response.body.rec_info_edit[0].phone_number
                    self.receptionistInfo.status = response.body.rec_info_edit[0].status
                    // console.log(self.receptionistInfo.status)
                }).catch((e)=>{
                    console.log(e)
                })
        }
    }
</script>
<style scoped>
.borderBottom{
  border-bottom: 2px solid #607D8B;
}
</style>