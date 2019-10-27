<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Add Schedule</h4>
				</div>
				<div class="col-md-2 text-right m-b-30">
					<router-link class="btn  btn-raised bg-grey waves-effect fa fa-chevron-circle-left" to="/admin/doctors_schedule"><strong>BACK</strong></router-link>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4">
					<div class="form-group">
						<p><b>Department name</b></p>
						<div class="borderBottom" :class="{error: validation.hasError('schedule.department')}">
							<select class="form-control show-tick" v-model="schedule.department" @change="departmentChanged()">
								<option v-for="dept in depatrments" :value="dept.department_name">{{dept.department_name}}</option>
							</select>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('schedule.department') }}</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<p><b>Doctor Name</b></p>
						<div class="borderBottom" :class="{error: validation.hasError('schedule.doctor')}">
							<select class="form-control show-tick" v-model="schedule.doctor">
								<option v-for="doc in doctors" :value="doc.id">{{doc.first_name +' '+ doc.last_name}}</option>
							</select>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('schedule.doctor') }}</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<p><b>Select Date</b></p>
						<div class="borderBottom" :class="{error: validation.hasError('schedule.day')}">
							<select class="form-control show-tick" v-model="schedule.day">
								<option>Select Days</option>
								<option>Sunday</option>
								<option>Monday</option>
								<option>Tuesday</option>
								<option>Wednesday</option>
								<option>Thursday</option>
								<option>Friday</option>
								<option>Saturday</option>
							</select>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('schedule.day') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-5">
					<div class="form-group">
						<div :class="{error: validation.hasError('schedule.time_from')}">
							<label><strong>Start Time</strong></label>
							<vue-timepicker format="HH:mm" v-model="schedule.time_from"></vue-timepicker>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('schedule.time_from') }}</div>
					</div>
				</div>
				<div class="col-sm-5">
					<div class="form-group">
						<div :class="{error: validation.hasError('schedule.time_to')}">
							<label><strong>End Time</strong></label>
							<vue-timepicker format="HH:mm" v-model="schedule.time_to"></vue-timepicker>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('schedule.time_to') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<p><b>Schedule Status</b></p>
					<div class="demo-radio-button form-group" :class="{error: validation.hasError('schedule.status')}">
						<input name="group1" type="radio" id="radio_6" class="with-gap" value="1" v-model="schedule.status"/>
						<label for="radio_6">ACTIVE</label>
						<input name="group1" type="radio" id="radio_7" class="with-gap" value="0" v-model="schedule.status"/>
						<label for="radio_7">INACTIVE</label>
					</div>
					<div class="message" style="color: red;">{{ validation.firstError('schedule.status') }}</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="btn  btn-raised btn-success waves-effect" @click="createSchedule()">Create Schedule</button>
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
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import { apiDomain } from '@/components/Pages/Authentication/config';
import Swal from 'sweetalert2'
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;

export default {
	components: {
		'vue-timepicker': VueTimepicker
	},
	data(){
		return{
			schedule: {
				department: '',
				doctor: '',
				day: '',
				time_from: null,
				time_to: null,
				status: '',
				AD_id: null
			},
			depatrments: [],
			doctors: [],
		}
	},
	methods: {
		departmentChanged(){
			var self = this
            this.$http.post(apiDomain + 'api/getDoctorInfo',{ def: self.schedule.department })
	            .then(response => {
	                self.doctors = response.body.doctorInfo
	            }).catch((e) => {
	                console.log(e)
	            })
		},
		createSchedule(){
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
		sendData(){
			var self = this
			this.$http.post(apiDomain + 'api/createSchedule',self.schedule)
				.then(response => {
					if(response.status === 200){
						console.log(response)
						self.successModal()
					}
				}).catch((e) => {
					console.log(e)
					self.failedModal()
				})
		},
		successModal(){
            Swal.fire(
                  'Success!',
                  'Successfully Created!',
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
	created(){
		var self = this
		const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    	this.schedule.AD_id = tokenData.id
		this.$http.get(apiDomain + 'api/getDepartmentInfo')
	    .then(response => {
	        self.depatrments = response.body.departmentsInfo
	    }).catch((e) => {
	        console.log(e)
	    })
	},
	validators: {
	  'schedule.department': function (value) {
	    return Validator.value(value).required();
	  },
	  'schedule.doctor': function (value) {
	    return Validator.value(value).required();
	  },
	  'schedule.day': function (value) {
	    return Validator.value(value).required();
	  },
	  'schedule.time_from': function (value) {
	    return Validator.value(value).required();
	  },
	  'schedule.time_to': function (value) {
	    return Validator.value(value).required();
	  },
	  'schedule.status': function (value) {
	    return Validator.value(value).required();
	  },
	}
}
</script>
<style scoped>
.borderBottom{
	border-bottom: 2px solid #607D8B;
}
</style>