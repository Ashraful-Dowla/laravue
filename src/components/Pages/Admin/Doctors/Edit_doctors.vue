                <template>
                 <div class="page-wrapper">
                    <div class="container" style="margin-top: 25px;margin-left: 50px;">
                        <loading :active.sync="isLoading" 
                            :can-cancel="true" 
                            :is-full-page="fullPage">
                        </loading>
                        <div class="row">
                            <div class="col-md-8">
                                <h4 class="page-title">Edit Doctor Information</h4>
                            </div>
                            <div class="col-md-2 text-right m-b-30">
                                <router-link to="/admin/doctors"><i class="arrow alternate circle left outline icon"></i>Previous</router-link>
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
                                             <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.firstName')}">
                                                <input type="text" class="form-control" placeholder="FIRST NAME" v-model="doctorInfo.firstName"/>
                                            </div>
                                            <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.firstName') }}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="form-group">
                                        <p><b>Last Name</b></p>
                                         <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.lastName')}">
                                            <input type="text" class="form-control" placeholder="LAST NAME" v-model="doctorInfo.lastName" />
                                        </div>
                                        <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.lastName') }}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <p><b>Username</b></p>
                                     <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.username')}">
                                        <input type="text" class="form-control" placeholder="USERNAME" v-model="doctorInfo.username" />
                                    </div>
                                    <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.username') }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <p><b>Email</b></p>
                                 <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.email')}">
                                    <input type="email" class="form-control" placeholder="EMAIL" v-model="doctorInfo.email" />
                                </div>
                                <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.email') }}</div>
                            </div>
                        </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <p><b>Department</b></p>
                        <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.department')}">
                            <select class="form-control select" v-model="doctorInfo.department">
                                <option>Select Department</option>
                                <option v-for="department in depatrments" :value="department.department_name">{{department.department_name}}</option>
                            </select>
                        </div>
                        <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.department') }}</div>
                    </div>
                </div>
        <div class="col-md-6">
          <div class="form-group">
            <p><b>Birthday</b></p>
             <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.birthday')}">
                <date-picker :bootstrap-styling="true" placeholder="BIRTHDAY" class="datepicker form-control" v-model="doctorInfo.birthday"></date-picker>
            </div>
            <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.birthday') }}</div>
        </div>
    </div>
 <div class="col-md-10">
    <div class="form-group">
        <p><b>Address</b></p>
        <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.address')}">
            <input type="text" class="form-control" placeholder="ADDRESS" v-model="doctorInfo.address" />
        </div>
        <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.address') }}</div>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <p><b>Country</b></p>
        <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.country')}">
            <template>
                <select id="country" name="country" class="form-control select" v-model="doctorInfo.country">
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
            </template>
        </div>
        <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.country') }}</div>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <p><b>State</b></p>
        <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.state')}">
            <input type="text" class="form-control" placeholder="Enter State" v-model="doctorInfo.state" />
        </div>
        <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.state') }}</div>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <p><b>City</b></p>
        <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.city')}">
            <input type="text" class="form-control" placeholder="Enter City" v-model="doctorInfo.city" />
        </div>
        <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.city') }}</div>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <p><b>Postal Code</b></p>
        <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.postalCode')}">
            <input type="text" class="form-control" placeholder="POSTAL CODE" v-model="doctorInfo.postalCode" />
        </div>
        <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.postalCode') }}</div>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <p><b>Phone Number</b></p>
        <div class="borderBottom" :class="{error: validation.hasError('doctorInfo.phoneNo')}">
            <input type="text" class="form-control" placeholder="PHONE NUMBER" v-model="doctorInfo.phoneNo" />
        </div>
        <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.phoneNo') }}</div>
    </div>
</div>
</div>
<div class="form-group" :class="{error: validation.hasError('doctorInfo.shortBiography')}">
    <p><b>Short Biography</b></p>
    <textarea class="form-control borderBottom col-md-10" v-model="doctorInfo.shortBiography"></textarea>
</div>
<div class="message" style="color: red;">{{ validation.firstError('doctorInfo.shortBiography') }}</div>
<div class="col-md-6">
    <p><b>Status</b></p>
    <div class="demo-radio-button form-group" :class="{error: validation.hasError('doctorInfo.status')}">
       <input name="group1" type="radio" id="radio_6" class="with-gap" value="1" v-model="doctorInfo.status"/>
       <label for="radio_6">ACTIVE</label>
       <input name="group1" type="radio" id="radio_7" class="with-gap" value="0" v-model="doctorInfo.status"/>
       <label for="radio_7">INACTIVE</label>
   </div>
   <div class="message" style="color: red;">{{ validation.firstError('doctorInfo.status') }}</div>
</div>

</form>
</div>
</div>
<div class="row">
    <div class="col-md-10">
        <div class="m-t-20">
            <button type="button" class="ui button positive" @click="editDoctor()">Save Changes</button>
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
    data () {
        return {
            doctorInfo: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                department: 'Select Department',
                birthday: '',
                address: '',
                country: '',
                state: '',
                city: '',
                postalCode: '',
                phoneNo: '',
                shortBiography: '',
                status: '',
                id: '',
                AD_id: null
            },
            depatrments: [],
            submitted: false,
            isLoading: false,
            fullPage: true
        }
    },
    methods: {
        editDoctor () {
            var self = this
            this.submitted = true
            this.$validate()
              .then( function(success) {
                if (success) {
                    self.sendData()   
                    self.isLoading = true      
                }
            }).catch((e)=>{
              console.log(e)
            })
        },
        sendData () {
            var self = this
            this.$http.post(apiDomain + 'api/editDoctor',self.doctorInfo)
                .then(response => {
                    if(response.status === 200){
                        console.log(response)
                        self.successModal()
                        self.isLoading = false
                    }
                }).catch((e) => {
                    console.log(e)
                    self.failedModal()
                    self.isLoading = false
                });
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
                  text: 'Internal server error. Try again.'
            })
        }
    },
    validators: {
        'doctorInfo.firstName': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.lastName': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.username': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.email': function (value) {
            return Validator.value(value).required().email();
        },
        'doctorInfo.department': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.birthday': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.address': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.country': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.state': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.city': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.postalCode': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.phoneNo': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.shortBiography': function (value) {
            return Validator.value(value).required();
        },
        'doctorInfo.status': function (value) {
            return Validator.value(value).required();
        }
    },
    created () {

        const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
        this.doctorInfo.AD_id = tokenData.id

        var self = this
        this.doctorInfo.id = this.$route.params.id

        this.$http.post(apiDomain + 'api/doctorInfoForEdit', {doc_id: self.doctorInfo.id})
            .then(response => {
                console.log(response)
                self.doctorInfo.firstName = response.body.doc_info_edit.first_name
                self.doctorInfo.lastName = response.body.doc_info_edit.last_name
                self.doctorInfo.username = response.body.doc_info_edit.username
                self.doctorInfo.email = response.body.doc_info_edit.email
                self.doctorInfo.department = response.body.doc_info_edit.department
                self.doctorInfo.birthday = response.body.doc_info_edit.birthday
                self.doctorInfo.address = response.body.doc_info_edit.address
                self.doctorInfo.country = response.body.doc_info_edit.country
                self.doctorInfo.state = response.body.doc_info_edit.state
                self.doctorInfo.city = response.body.doc_info_edit.city
                self.doctorInfo.postalCode = response.body.doc_info_edit.postal_code
                self.doctorInfo.phoneNo = response.body.doc_info_edit.phone_number
                self.doctorInfo.shortBiography = response.body.doc_info_edit.short_biography
                self.doctorInfo.status = response.body.doc_info_edit.status
            })

        this.$http.get(apiDomain + 'api/getDepartmentInfo')
        .then(response => {
            self.depatrments = response.body.departmentsInfo
        }).catch((e) => {
            console.log(e)
        })
    }
}
</script>
<style scoped>
.borderBottom{
  border-bottom: 2px solid #0392CE;
}
</style>