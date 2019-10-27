<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="page-title">Book Appointment</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <hr>
                </div>
            </div>
            <div class="container-fluid" align="left">
                <div class="row ">
                	<div class="col-md-4">
						<div class="form-group">
							<p><b>Patient ID</b></p>
		                    <div class="borderBottom" :class="{error: validation.hasError('appointment.patient_id')}">
			                    <input type="text" class="form-control" placeholder="PT-XXXXXXXXX" v-model="appointment.patient_id"/>
			                </div>
			                <div class="message" style="color: red;">{{ validation.firstError('appointment.patient_id') }}</div>
		                </div>
	            	</div>
                    <div class="col-md-10">
                        <div class="card">
                            <div class="body">
                                <form>
                                    <div class="row clearfix">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-group">
                                                <div class="form-line" :class="{error: validation.hasError('appointment.department')}">
                                                    <p><b>Select Department</b></p>
                                                    <select class="form-control show-tick waves-effect" v-model="appointment.department" @change="departmentChanged()">
                                                        <option v-for="department in depatrments" :value="department.department_name">{{department.department_name}}</option>
                                                    </select>
                                                </div>
                                                <div class="message" style="color: red;">{{ validation.firstError('appointment.department') }}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-group">
                                                <div class="form-line" :class="{error: validation.hasError('appointment.doctor')}">
                                                    <p><b>Select Doctor</b></p>
                                                    <select class="form-control show-tick waves-effect" v-model="appointment.doctor">
                                                        <option v-for="doc in doctors" :value="doc.id">{{doc.first_name +' '+ doc.last_name}}</option>
                                                    </select>
                                                </div>
                                                <div class="message" style="color: red;">{{ validation.firstError('appointment.doctor') }}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-group">
                                                <div class="form-line" :class="{error: validation.hasError('appointment.appointment_date')}">
                                                    <p><b>Select Date</b></p>
                                                    <date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Select Date" v-model="appointment.appointment_date" @selected="dateSelected()"></date-picker>
                                                </div>
                                                <div class="message" style="color: red;">{{ validation.firstError('appointment.appointment_date') }}</div>

                                                <div v-if="msg1"><i class="check circle icon" style="color:green;"></i><span style="color:green;">Date Is Available</span></div>

                                                <div v-if="msg2"><i class="times circle outline icon" style="color:red;"></i><span style="color:red;">Date Is Not Available</span></div>
                                                <!-- Availbale Date Dropdown -->
                                                <div v-if="msg2">
                                                    <label>See Available Dates</label>
                                                    <select v-model="appointment.appointment_date" @change="availableDateSelected">
                                                        <option v-for="dti in availableDates">{{ dti[0].date }}</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">

                                            <div class="form-group" :class="{error: validation.hasError('appointment.appointment_time')}">
                                                <div v-if="time1" class="form-line">
                                                    <p><b>Select Time</b></p>
                                                    <select class="form-control show-tick waves-effect" v-model="appointment.appointment_time" @change="timeChanged">
                                                        <option v-for="time in times">{{ time.time_from+' to '+ time.time_to }}</option>
                                                    </select>
                                                </div>
                                             <div class="message" style="color: red;">{{ validation.firstError('patient.firstName') }}</div>
                                             <div v-if="time2" class="form-line" :class="{error: validation.hasError('patient.firstName')}">
                                                <p><b>Select Time</b></p>
                                                <select class="form-control show-tick waves-effect" v-model="appointment.appointment_time" @change="timeChanged">
                                                 <option>{{checkTimeForSelectedDate}}</option>
                                             </select>
                                         </div>
                                     </div>
                                     <div class="message" style="color: red;">{{ validation.firstError('appointment.appointment_time') }}</div>

                                 </div>
                                 <br/><br/>
                             </div>
                             <div class="row">
                                <div class="col-md-2">
                                    <button  type="button" class="btn btn-raised btn-primary m-t-15 waves-effect fa fa-send-o" @click="sunbmitAppointment()">Submit</button>
                                </div>
                                <div class="col-md-2">
                                    <button type="button" class="btn btn-raised btn-danger m-t-15 waves-effect fa fa-money" @click="showModalMyWallet">Wallet Pay</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script type="text/javascript">
import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js';
import { apiDomain } from '@/components/Pages/Authentication/config';
import SimpleVueValidation from 'simple-vue-validator';
import Swal from 'sweetalert2';
const Validator = SimpleVueValidation.Validator;

export default {
    data () {
        return {
            appointment: {
                department: '',
                doctor: '',
                appointment_date: '',
                appointment_time: '',
                patient_id: '',
                AD_id: null
            },
            depatrments: [],
            doctors: [],
            times: [],
            msg1: false,
            msg2:false,
            avlDateFirst: 'See Available Dates',
            availableDates: [],
            time1: false,
            time2: false,
            checkTimeForSelectedDate: ''
        }
    },
    components: {
        'date-picker': Datepicker
    },
    methods:{
        timeChanged(){
            console.log(this.appointment.appointment_time)
        },
        sunbmitAppointment () {
            var self = this
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
        sendData () {
            var self = this
            this.$http.post(apiDomain + 'api/admin_book_appointment',self.appointment)
            .then(response => {
                console.log(response)
                if(response.status === 200){
                    self.successModal()
                }
            }).catch((e) => {
                self.failedModal();
                console.log(e)
            })
        },
        successModal(){
            Swal.fire(
                  'Success!',
                  'Successfully Booked Appointment!',
                  'success'
            )
        },
          failedModal(){
            Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong! '
            })
        },
        departmentChanged(){
            // console.log(this.appointment.department)
            var self = this
            this.$http.post(apiDomain + 'api/getDoctorInfo',{ def: self.appointment.department })
            .then(response => {
                self.doctors = response.body.doctorInfo
            }).catch((e) => {
                console.log(e)
            })
        },
        dateSelected () {
          console.log(this.appointment.doctor)
          var self = this
          this.$nextTick(function(){
            self.$http.post(apiDomain + 'api/getAvailableDate', self.appointment)
            .then(response => {
                console.log(response)
                if(response.body.status === '1'){
                    self.msg1 = true
                    self.msg2 = false
                    self.time1 = true
                    self.time2 = false
                    self.times = response.body.yes
                }
                else if(response.body.status === '0'){
                    self.msg2 = true
                    self.msg1 = false
                    self.time1 = false
                    self.time2 = false
                    self.availableDates = response.body.dateTimeInfo
                }
            }).catch((e) => {
                console.log(e)
            })
        })
      },
      availableDateSelected () {
            var self = this
            for(var i=0; i < self.availableDates.length; i++){
                if(self.availableDates[i][0].date === self.appointment.appointment_date){
                    self.checkTimeForSelectedDate = self.availableDates[i][0].time_from+' to '+self.availableDates[i][0].time_to
                }
            }
            this.time2 = true
            this.time1 = false
        },
        showModal () {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Are you sure?'
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                      'Ok!',
                      'Appointment Submitted Successfully',
                      'success'
                    )
                }
            })
      },
      showModalMyWallet(){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Are you sure?'
      }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Paid!',
              'Successfully Paid from My Wallet',
              'success'
              )
        }
    })
  }
},
created () {
    var self = this
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    this.appointment.AD_id = tokenData.id
    this.$http.get(apiDomain + 'api/getDepartmentInfo')
    .then(response => {
        self.depatrments = response.body.departmentsInfo
    }).catch((e) => {
        console.log(e)
    })
},
validators: {
  'appointment.patient_id': function (value) {
    return Validator.value(value).required();
  },
  'appointment.department': function (value) {
    return Validator.value(value).required();
  },
  'appointment.doctor': function (value) {
    return Validator.value(value).required();
  },
  'appointment.appointment_date': function (value) {
    return Validator.value(value).required();
  },
  'appointment.appointment_time': function (value) {
    return Validator.value(value).required();
  }
}
}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>