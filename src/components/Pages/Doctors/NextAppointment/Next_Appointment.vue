<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-10">
					<h3>Next Appointment</h3>
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3">
                    <div class="form-group">
                    	<P><b>Enter a digit</b></P>
                        <div class="borderBottom" :class="{error: validation.hasError('number_of_days')}">
                            <input type="text" class="form-control" placeholder="Enter a Number" v-model="number_of_days" v-on:keyup="extentionSelected()" />
                        </div>
                        <div class="message" style="color: red;">{{ validation.firstError('number_of_days') }}</div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                    	<P><b>Select extention</b></P>
                    	<div class="borderBottom" :class="{error: validation.hasError('extention')}">
		                    <select class="form-control show-tick" v-model="extention" @change="extentionSelected()">
		                        <option>Select</option>
		                        <option value="days">Days</option>
								<option value="weeks">Weeks</option>
								<option value="months">Months</option>
								<option value="years">Years</option>
		                    </select>
		                </div>
		                <div class="message" style="color: red;">{{ validation.firstError('extention') }}</div>
                    </div>
                </div>
				<div class="col-sm-3">
					<div class="form-group">
						<P><b>Select patient ID</b></P>
	                    <div class="borderBottom" :class="{error: validation.hasError('patient_id')}">
		                    <!-- <input type="text" class="form-control" placeholder="Patient ID: PT-XXXXXXXX" v-model="patient_id"/> -->
		                    <select class="form-control" v-model="patient_id">
		                    	<option v-for="pat in patient_list" :value="pat.patient_id">{{pat.patient_id}}</option>
		                    </select>
		                </div>
		                <div class="message" style="color: red;">{{ validation.firstError('patient_id') }}</div>
	                </div>
            	</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row" v-if="messageBox">
				<div class="col-6">
					<p><i v-if="successIcon" class="calendar check outline icon" style="color:green;"></i><i v-if="failedIcon" class="calendar times outline icon" style="color:red;"></i><b>{{msg}}</b></p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
			<!--*******************************************************************-->
				<div class="col-md-4" v-if="dropdown1">
					<P><b>select Date</b></P>
					<select class="form-control" v-model="next_date" :class="{error: validation.hasError('next_date')}">
						<option :value="next_date">{{next_date}}</option>
					</select>
					<div class="message" style="color: red;">{{ validation.firstError('next_date') }}</div>
				</div>
				<div class="col-md-4" v-if="dropdown2">
					<P><b>select Date</b></P>
					<select class="form-control" v-model="next_date" :class="{error: validation.hasError('next_date')}" @change="availableDateSelected()">
						<option v-for="info in availableDates" :value="info[0].date">{{info[0].date}}</option>
					</select>
					<div class="message" style="color: red;">{{ validation.firstError('next_date') }}</div>
				</div>
			<!--*******************************************************************-->
				<div class="col-md-4" v-if="dropdown3">
					<P><b>select Time</b></P>
					<select class="form-control" v-model="time" :class="{error: validation.hasError('time')}">
						<option v-for="time in times" :value="time.time_from+' to '+time.time_to">{{time.time_from+'-'+time.time_to}}</option>
					</select>
					<div class="message" style="color: red;">{{ validation.firstError('time') }}</div>
				</div>
				<div class="col-md-4" v-if="dropdown4">
					<P><b>select Time</b></P>
					<select class="form-control" v-model="time" :class="{error: validation.hasError('time')}">
						<option :value="checkTimeForAvailableDateSelected">{{checkTimeForAvailableDateSelected}}</option>
					</select>
					<div class="message" style="color: red;">{{ validation.firstError('time') }}</div>
				</div>
			<!--*******************************************************************-->
				<div class="col-md-2">
					<br>
					<button class="ui button positive" @click="submitForNextAppointment()"><strong>Submit</strong></button>
				</div>
			<!--*******************************************************************-->
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
	import Vue from 'vue'
	import VueEvents from 'vue-events'
	import Vuetable from 'vuetable-2/src/components/Vuetable'
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
	import FilterBar from '@/components/Pages/Doctors/import_details/FilterBar'
	import { FieldsDef_next_appointment } from '@/components/Pages/Doctors/import_details/FieldsDef_next_appointment'
	import { apiDomain } from '@/components/Pages/Authentication/config';
	import SimpleVueValidation from 'simple-vue-validator';
	const Validator = SimpleVueValidation.Validator;
	import Swal from 'sweetalert2';

	Vue.use(VueEvents)
	Vue.component('filter-bar', FilterBar)

	export default {
		  components: {
		    Vuetable,
		    VuetablePagination,
		    VuetablePaginationInfo
		  },
		  data () {
		    return {
		      	fields: FieldsDef_next_appointment,
		      	sortOrder: [],
		      	moreParams: {},
		      	number_of_days: null,
		      	apiURL: '',
		      	extention: null,
		      	next_date: null,
		      	time: '',
		      	doctor_id: '',
		      	patient_id: '',
		      	department: '',
		      	dropdown1: true,
		      	dropdown2: false,
		      	dropdown3: true,
		      	dropdown4: false,
		      	times: [],
				availableDates: [],
				messageBox: false,
				msg: '',
				successIcon: false,
				failedIcon: false,
				patient_list: [],
				checkTimeForAvailableDateSelected: '',
				isLoading: false,
				fullPage: true,
				errorMessage: 'Internal server error. Try again'
		    }
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  methods: {
		  	submitForNextAppointment(){
		  		var self = this
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
		  	sendData(){
		  		var self = this
		  		this.$http.post(apiDomain + 'api/saveNextAppoint',{
		  			patient_id: self.patient_id,
		  			doctor_id: self.doctor_id,
		  			department: self.department,
		  			appointment_date: self.next_date,
		  			time: self.time
		  		}).then(response => {
		  			if(response.status === 200){
		  				console.log(response)
		  				self.successModal()
		  				self.isLoading = false
		  			}
		  		}).catch((e) => {
		  			console.log(e)
		  			if(e.status === 401){
		  				self.errorMessage = "An appointment with this patinet in this date has already been scheduled."
		  				self.isLoading = false
		  				self.failedModal()
		  			}
		  			else{
		  				self.failedModal()
		  				self.isLoading = false
		  			}
		  		})
		  	},
		  	successModal(){
	            Swal.fire(
	                  'Success!',
	                  'Appointment Saved Successfully!',
	                  'success'
	            )
	        },
	          failedModal(){
	            Swal.fire({
	                  type: 'error',
	                  title: 'Oops...',
	                  text: this.errorMessage
	            })
	        },
		  	extentionSelected(){
		  		this.$nextTick(function(){
		  			console.log(this.number_of_days+' '+this.extention)
			  		if(this.number_of_days != null && this.extention !== null){
			  			var self = this
			  			var date = new Date();
			  			var temp = 0;
			  			if(this.extention === 'days'){
			  				this.next_date = new Date(Date.now()+this.number_of_days*24*60*60*1000);
			  				this.next_date = this.next_date.toISOString().substr(0, 10);
			  				console.log(this.next_date)
			  			}
			  			else if(this.extention === 'weeks'){
			  				temp = this.number_of_days*7;
			  				this.next_date = new Date(Date.now()+temp*24*60*60*1000);
			  				this.next_date = this.next_date.toISOString().substr(0, 10);
			  				console.log(this.next_date)
			  			}
			  			else if(this.extention === 'months'){
			  				temp = this.number_of_days*30;
			  				this.next_date = new Date(Date.now()+temp*24*60*60*1000);
			  				this.next_date = this.next_date.toISOString().substr(0, 10);
			  				console.log(this.next_date)
			  			}
			  			else if(this.extention === 'years'){
			  				temp = this.number_of_days*365;
			  				this.next_date = new Date(Date.now()+temp*24*60*60*1000);
			  				this.next_date = this.next_date.toISOString().substr(0, 10);
			  				console.log(this.next_date)
			  			}
			  			this.apiURL = apiDomain + 'api/getAvailableDateforNextAppointment/' +self.next_date+'/'+self.doctor_id+'/'+self.department;
			  			this.$http.get(self.apiURL)
			  				.then(response => {
			  					console.log(response)
			  					if(response.body.status === '1'){
			  						self.messageBox = true
			  						self.successIcon = true
			  						self.failedIcon = false
			  						self.dropdown2 = false
			  						self.dropdown4 =false
			  						self.dropdown1 =true
			  						self.dropdown3 =true
			  						self.msg = 'Date is available'
				                    self.times = response.body.yes
				                }
				                else if(response.body.status === '0'){
				                	self.messageBox = true
				                	self.successIcon = false
				                	self.failedIcon = true
				                	self.dropdown1 = false
				                	self.dropdown2 = true
				                	self.dropdown3 = false
				                	self.dropdown4 = true
				                	self.msg = 'Date is not available. Suggestions is given below.'
				                	self.availableDates = response.body.dateTimeInfo
				                }
				                else{
				                	self.messageBox = false
				                	self.dropdown1 = true
				                	self.dropdown2 = false
				                	self.dropdown3 = true
				                	self.dropdown4 = false
				                	self.msg = ''
				                	self.successIcon = false
				                	self.failedIcon = false
				                	self.times = []
				                	self.availableDates = [],
				                	self.next_date = null
				                }
			  				})
			  		}
		  		})
		  	},
		  	availableDateSelected(){
	        	var self = this
	            for(var i=0; i < self.availableDates.length; i++){
	                if(self.availableDates[i][0].date === self.next_date){
	                    self.checkTimeForAvailableDateSelected = self.availableDates[i][0].time_from+' to '+self.availableDates[i][0].time_to
	                }
	            }
	        },
		    onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      this.$refs.vuetable.changePage(page)
		    },
		    onAction (action, data, index) {
		      console.log('slot action: ' + action, data.name, index)
		    },
		    onFilterSet (filterText) {
		      this.moreParams.filter = filterText
		      Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    },
		    onFilterReset () {
		      delete this.moreParams.filter
		      Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    }
		  },
		  created(){
		  	const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    		this.doctor_id = tokenData.id
    		this.department = tokenData.department

    		var apiURL = apiDomain + 'api/getPatientInfoForNextAppointment/' + tokenData.id
    		console.log(apiURL)
		    this.$http.get(apiURL)
		      .then(response => {
		        console.log(response)
		        this.patient_list = response.body.pat_info
		      })
		  },
		  	validators: {
			  	'number_of_days': function (value) {
			   		return Validator.value(value).required();
				},
				'extention': function (value) {
			   		return Validator.value(value).required();
				},
				'patient_id': function (value) {
			   		return Validator.value(value).required();
				},
				'next_date': function (value) {
			   		return Validator.value(value).required();
				},
				'time': function (value) {
			   		return Validator.value(value).required();
				},
			}

		}
</script>
<style scoped>
	.back{
		background-color: #494A47;
		color: white;
	}
	.vertical{
		border-left: 1px solid black;
		height: 70px;
	}
	.dangerr{
		color:red;
	}
	.rightSideBar{
		border: 1px solid black;
		border-radius: 3px;
		min-height:250px;
		background-color: #E8EAED;
	}
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>