<template>
	<div class="page-wrapper">
		<div class="content">
			<loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<h4 class="page-title">Add Leave</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<form>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
				                    <div class="borderBottom">
				                    	<p><b>Select Leave Type</b></p>
					                    <select class="form-control show-tick" v-model="manualLeave.leave_type">
					                        <option v-for="lvt in leaveTypes" :value="lvt.leave_type">{{lvt.leave_type}}</option>
					                    </select>
					                </div>
				                </div>
			            	</div>
						</div>
						<div class="row" hidden>
							<div class="col-md-5">
								<div class="form-group">
				                    <div class="borderBottom">
				                    	<p><b>Select Department</b></p>
					                    <select class="form-control show-tick" v-model="manualLeave.department" disabled>
					                        <option :value="manualLeave.department">{{manualLeave.department}}</option>
					                    </select>
					                </div>
				                </div>
							</div>
							<div class="col-md-5">
								<div class="form-group">
									<p><b>Put Doctor ID</b></p>
				                    <div class="borderBottom">
				                    	<input type="text" class="form-control"  placeholder="Doctor ID: DR-XXXXXXXXXX" v-model="manualLeave.doctor_id" disabled/>
				                    </div>
				                </div>
				            </div>
						</div>
						<div class="row">
							<div class="col-md-6">
                        		<div class="form-group">
                        			<p><b>Time From</b></p>
                        			<div class="borderBottom">
                        				<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Date: From" v-model="manualLeave.time_from"></date-picker>
                        			</div>
                        		</div>
                        	</div>
							<div class="col-md-6">
                        		<div class="form-group">
                        			<p><b>Time To</b></p>
                        			<div class="borderBottom">
                        				<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Date: To" v-model="manualLeave.time_to" @selected="dateSelected()"></date-picker>
                        			</div>
                        		</div>
                        	</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
                        		<div class="form-group">
                        			<p><b>Number of days</b></p>
                        			<div class="borderBottom">
                        				<input type="text" class="form-control"  v-model="manualLeave.number_of_days"/>
                        			</div>
                        		</div>
                        	</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
                        		<div class="form-group">
                        			<p><b>Leave Reason</b></p>
                        			<div class="borderBottom">
                        				<textarea rows="4" cols="5" class="form-control" v-model="manualLeave.leave_reason"></textarea>
                        			</div>
                        		</div>
                        	</div>
						</div>
					</form>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="ui button positive" @click="addLeaveManually()">Add Leave</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Datepicker from 'vuejs-datepicker';
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import Swal from 'sweetalert2'
	export default {
		components: {
			'date-picker': Datepicker
		},
		data(){
			return{
				isLoading: false,
				fullPage: true,
				leaveTypes: [],
				departments: [],
				manualLeave:{
					leave_type: '',
					department: '',
					doctor_id: '',
					time_from: '',
					time_to: '',
					number_of_days: '',
					leave_reason: '',
				},
				errorMessage: 'Internal server error. Try again.'
			}
		},
		created(){
			const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    		this.manualLeave.AD_id = tokenData.id
    		this.manualLeave.doctor_id = tokenData.doctor_id
    		this.manualLeave.department = tokenData.department
			var self = this
			this.$http.get(apiDomain + 'api/adminGetLeaveTypeInfo')
				.then(response => {
					self.leaveTypes = response.body.leaveTypeInfo
					console.log(response)
				}).catch((e) =>{
					console.log(e)
				})
			this.$http.get(apiDomain + 'api/getDepartmentInfo')
			    .then(response => {
			        self.departments = response.body.departmentsInfo
			    }).catch((e) => {
			        console.log(e)
			    })
		},
		methods:{
			addLeaveManually(){
				var self = this
		    		self.sendAddLeaveManuallyData(); 
	                self.isLoading = true  
	        },
	        sendAddLeaveManuallyData(){
	        	var self = this
	        	this.$http.post(apiDomain + 'api/addLeaveByDoctor',self.manualLeave)
	        		.then(response => {
	        			if (response.status === 200) {
	        				console.log(response)
	        				self.successModal()
	        				self.isLoading = false
	        			}
	        		}).catch((e) => {
	        			console.log(e)
	        			if(e.status === 401){
	        				self.errorMessage = "You already have a leave request"
	        				self.isLoading = false
	        				self.failedModal()
	        			}
	        			else{
	        				self.failedModal()
	        				self.isLoading = false
	        			}
	        		})
	        },
	        dateSelected(){
	        	this.$nextTick(function(){
	        		var date1 = new Date(this.manualLeave.time_from); 
					var date2 = new Date(this.manualLeave.time_to);
					var Difference_In_Time = date2.getTime() - date1.getTime();
					var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
					this.manualLeave.number_of_days = Difference_In_Days + 1;
	        	})
	        },
	        successModal(){
	            Swal.fire(
	                  'Success!',
	                  'Manually Leave Added!',
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
		}
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>