<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">My Profile</h4>
				</div>

				<!-- <div class="col-md-2 text-right m-b-30">
					<router-link class="btn  btn-raised bg-blue-grey waves-effect fa fa-plus" to="/doctor/edit_doctor_profile"><strong>EDIT PROFILE</strong></router-link>
				</div> -->
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div><br>
			<div class="row">
				<div class="col-md-10">
					<div class="card-box profile-header">
						<div class="row">
							<div class="col-md-12">
								<div class="profile-view">
									<div class="profile-img-wrap">
										<div class="profile-img">
											<img class="avatar" :src="url+'patientImage/'+patientInfo[0].image" alt="Image">
										</div>
									</div>
									<div class="profile-basic">
										<div class="row">
											<div class="col-md-5">
												<div class="profile-info-left">
													<h3 class="user-name m-t-0 mb-0">{{patientInfo[0]['first_name']+' '+patientInfo[0]['last_name']}}</h3>
													<div class="staff-id"><strong>Patient ID:</strong> {{patient_id}}</div>
													<div v-if="no_profile_pic">
														<p>---------------------------------</p>
														<b>Upload Picture</b>
														<input type="file" accept="image/*" @change="doctorImageSelected">
														<button style="float: left;" class="ajmal-custom-btn" @click="goToUploadImage()">Upload</button>
													</div>
												</div>
											</div>
											<div class="col-md-7">
												<a href="#"><i style="float: right;" class="edit-btn edit icon" @click.prevent="editGeneralRowInfo()"></i></a>
												<ul class="personal-info">
													<li>
														<span class="title">Phone:</span>
														<span class="text">{{patientInfo[0]['phone_number']}}</span>
													</li>
													<li>
														<span class="title">Email:</span>
														<span class="text">{{patientInfo[0]['email']}}</span>
													</li>
													<li>
														<span class="title">Birthday:</span>
														<span class="text">{{patientInfo[0]['birthday']}}</span>
													</li>
													<li>
														<span class="title">Address:</span>
														<span class="text">{{patientInfo[0]['address']}}</span>
													</li>
													<li>
														<span class="title">Gender:</span>
														<span class="text">{{patientInfo[0]['gender']}}</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>                        
							</div>
						</div>
					</div>
				</div>
			</div>
			<br>
		</div>
	</div>
</template>
<script>
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import modal from 'vue-semantic-modal'
	import Swal from 'sweetalert2';
	export default{
		data () {
			return {
				patient_id: '',
				patientInfo: [],
				acnt_summary: [],
				image: '',
				no_profile_pic: false,
				id: '',
				profile_pic: '',
				url: '',
				isLoading: false,
				fullPage: true
			}
		},
		created () {
			this.url = apiDomain
			console.log(this.url)
			const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
			this.patient_id = tokenData.patient_id
			this.id = tokenData.id
			var self = this
			this.$http.post(apiDomain + 'api/getPatinetInfoForDashboard',{patient_id: tokenData.patient_id})
				.then(response => {
					if (response.status === 200) {
						console.log(response)
						self.patientInfo = response.body.patient_info
						if(self.patientInfo[0].image === null){
							self.no_profile_pic = true
						}
						if(response.body.acnt_summary.length == 0){
							console.log('empty')
						}else {
							self.acnt_summary = response.body.acnt_summary
						}
					}
				}).catch((e) => {
					console.log(e)
				})
		},
		methods: {
			editGeneralRowInfo(){

			},
			doctorImageSelected (event) {
	            var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event) => {
                    this.image = event.target.result
                }
	        },
	        goToUploadImage(){
	        	var self = this
	        	this.isLoading = true
	        	this.$http.post(apiDomain + 'api/savePatientProfilePicture',{image: self.image, id: self.id})
	        	.then(response => {
	        		if(response.status === 200){
	        			console.log(response)
	        			self.successModal();
	        			self.isLoading = false
	        			location.reload()
	        		}
	        	}).catch((e) => {
	        		console.log(e)
	        		self.failedModal();
	        		self.isLoading = false
	        	})
	        },
	        successModal(){
				Swal.fire(
					'Success!',
					'Successfully Uploaded!',
					'success'
					)
			},
			failedModal(){
				Swal.fire({
					type: 'error',
					title: 'Oops...',
					text: 'Internal server error. Try again'
				})
			}
		}
	}
</script>