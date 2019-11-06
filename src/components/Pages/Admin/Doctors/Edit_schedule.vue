<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true"
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Edit Schedule</h4>
				</div>
				<div class="col-md-2 text-right m-b-30">
					<router-link to="/admin/doctors_schedule"><i class="arrow alternate circle left outline icon"></i>Previous</router-link>
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
						<p><b>Select For Update Or Delete an Specific Date Schedule</b></p>
						<div class="borderBottom">
							<select class="form-control show-tick" v-model="selectedDate" @change="dateSelected()">
								<option v-for="days in avl_days" :value="days.id">{{days.available_days}}</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<div class="row" v-if="view2">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row" v-if="view2">
				<div class="col-md-10">
					<div class="divStyling">
						<p class="paraStyling">
							Make changes in time fields and selcet <strong class="updateBtn">Update</strong> button to update selected day info or select <strong class="deleteBtn">Delete</strong> button to delete selected day info
						</p>
					</div><br>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<h5>Present start time: {{presentStartingTime}}</h5>
						<div :class="{error: validation.hasError('timeFrom')}">
							<label><strong>Start Time</strong></label>
							<vue-timepicker format="HH:mm" v-model="timeFrom"></vue-timepicker>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('timeFrom') }}</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<h5>Present end time: {{presentEndingTime}}</h5>
						<div :class="{error: validation.hasError('timeTo')}">
							<label><strong>End Time</strong></label>
							<vue-timepicker format="HH:mm" v-model="timeTo"></vue-timepicker>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('timeTo') }}</div>
					</div>
				</div>
				<div class="col-md-3">
					<button class="ui button positive" @click="updateSingleScheduleInfo()">Update</button> or 
					<button class="ui button red" @click="deleteSingleScheduleInfo()">Delete</button>
				</div>
			</div>
			<div class="row" v-if="view2">
				<div class="col-md-10">
					<hr>
				</div>
			</div>

			<div class="row" v-if="view">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row" v-if="view">
				<div class="col-sm-4">
					<div class="form-group">
						<p><b>Select Date</b></p>
						<div class="borderBottom">
							<select class="form-control show-tick">
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
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<div>
							<label><strong>Start Time</strong></label>
							<vue-timepicker format="hh:mm A"></vue-timepicker>
						</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<div>
							<label><strong>End Time</strong></label>
							<vue-timepicker format="hh:mm A"></vue-timepicker>
						</div>
					</div>
				</div>
			</div>
			<div class="row" v-if="view">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row" v-if="view">
				<div class="col-md-5">
					<p>Schedule Status</p>
					<div class="demo-radio-button form-group">
						<input name="group1" type="radio" id="radio_6" class="with-gap" />
						<label for="radio_6">ACTIVE</label>
						<input name="group1" type="radio" id="radio_7" class="with-gap" />
						<label for="radio_7">INACTIVE</label>
					</div>
				</div>
			</div>
			<div class="row" v-if="view">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="btn  btn-raised btn-success waves-effect">Save Changes</button>
					</div>
				</div>
			</div>
			<div class="row" v-if="view">
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
import { apiDomain } from '@/components/Pages/Authentication/config'
import Swal from 'sweetalert2'
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;


export default {
	components: {
		'vue-timepicker': VueTimepicker
	},
	data(){
		return{
			view: false,
			view2: false,
			doctor_id: null,
			AD_id: null,
			avl_days: [],
			selectedDate: '',
			presentStartingTime: '',
			presentEndingTime: '',
			timeFrom: null,
			timeTo: null,
			isLoading: false,
			fullPage: true
		}
	},
	methods: {
		dateSelected(){
			this.view2 = true
			var self = this
			this.$http.post(apiDomain + 'api/selecteTimeForDate',{id: self.selectedDate})
				.then(response => {
					console.log(response)
					self.presentStartingTime = response.body.timeInfo[0].time_from
					self.presentEndingTime = response.body.timeInfo[0].time_to
				}).catch((e) => {
					console.log(e)
				})
			
		},
		updateSingleScheduleInfo(){
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
								self.sendUpdateSingleScheduleData()
								self.isLoading = true  
							}
						});
                	}
                }).catch((e) => {
                	console.log(e)
                })
		},
		sendUpdateSingleScheduleData(){
			var self = this
			this.$http.post(apiDomain + 'api/updateSingleScheduleInfo',{
																		time_from: self.timeFrom,
																		time_to: self.timeTo,
																		id: self.selectedDate
																		})
				.then(response => {
					if (response.status === 200) {
						console.log(response)
						self.editSuccessModal()
						self.isLoading = false
					}
				}).catch((e) => {
					console.log(e)
					self.failedModal()
					self.isLoading = false
				})
		},
		deleteSingleScheduleInfo(){
			var self = this
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
                        self.sendDeleteSingleScheduleData();
                        self.isLoading = true     
                  }
            });
		},
		sendDeleteSingleScheduleData(){
			var self = this
			this.$http.post(apiDomain + 'api/deleteSingleScheduleInfo',{sche_id: self.selectedDate})
				.then(response => {
					if (response.status === 200) {
						console.log(response)
						self.successModal()
						self.isLoading = false
					}
				}).catch((e) => {
					console.log(e)
					self.failedModal()
					self.isLoading = false
				})
		},
		editSuccessModal(){
            Swal.fire(
                  'Success!',
                  'Successfully Updated!',
                  'success'
            )
        },
		successModal(){
            Swal.fire(
                  'Success!',
                  'Successfully Deleted!',
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
		const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
        this.AD_id = tokenData.id

		var self = this
		self.doctor_id = this.$route.params.id

		this.$http.post(apiDomain + 'api/getSingleScheduleDates',{doc_id: self.doctor_id})
			.then(response => {
				if(response.status === 200){
					console.log(response)
					self.avl_days = response.body.singleScheduleInfo
				}
			}).catch((e) =>{
				console.log(e)
			})
	},
	validators: {
        'timeFrom': function (value) {
            return Validator.value(value).required();
        },
        'timeTo': function (value) {
            return Validator.value(value).required();
        }
    }
}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
	.divStyling{
		border: 1px solid gray;

	}
	.paraStyling{
		padding: 10px;
	}
	.updateBtn{
		font-width: bold;
		font-size: 16px;
		color:green;
	}
	.deleteBtn{
		font-width: bold;
		font-size: 16px;
		color: red;
	}
</style>