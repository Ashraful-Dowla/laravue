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
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div><br>
			<div class="row">
				<div class="col-md-10">
					<div class="row">
					</div>
					<div class="card-box profile-header">
						<div class="row">
							<div class="col-md-12">
								<div class="profile-view">
									<div class="profile-img-wrap">
										<div class="profile-img">
											<img class="avatar" :src="url+'doctorImage/'+doctorInfo[0]['image']" alt="Image">
										</div>
									</div>
									<div class="profile-basic">
										<div class="row">
											<div class="col-md-5">
												<div class="profile-info-left">
													<h3 class="user-name m-t-0 mb-0">{{doctorInfo[0]['first_name']+' '+doctorInfo[0]['last_name']}}</h3>
													<small class="text-muted">{{doctorInfo[0]['department']}}</small>
													<div class="staff-id"><strong>Doctor ID:</strong> {{doctor_id}}</div>
													<hr>
													<span><strong>Specialities</strong></span>
													<ul>
														<li v-for="sp in specialityInfo">{{sp.speciality}}</li>
													</ul>
												</div>
												<button style="float: left;" class="ajmal-custom-btn" @click="goToAddSpeciality()">Add Speciality</button>
											</div>
											<div class="col-md-7">
												<a href="#"><i style="float: right;" class="edit-btn edit icon" @click.prevent="editGeneralRowInfo()"></i></a>
												<ul class="personal-info">
													<li>
														<span class="title">Phone:</span>
														<span class="text">{{doctorInfo[0]['phone_number']}}</span>
													</li>
													<li>
														<span class="title">Email:</span>
														<span class="text">{{doctorInfo[0]['email']}}</span>
													</li>
													<li>
														<span class="title">Birthday:</span>
														<span class="text">{{doctorInfo[0]['birthday']}}</span>
													</li>
													<li>
														<span class="title">Address:</span>
														<span class="text">{{doctorInfo[0]['address']}}</span>
													</li>
													<li>
														<span class="title">Gender:</span>
														<span class="text">{{doctorInfo[0]['gender']}}</span>
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
			<div class="row">
				<div class="col-md-10">
					<div class="profile-tabs">

						<div class="tab-content">
							<div class="tab-pane show active" id="about-cont">
								<div class="row">
									<div class="col-md-12">
										<div class="card-box">
											<div class="row">
												<div class="col-md-4">
													<h3 class="card-title">Education Informations</h3>
												</div>
												<div class="col-md-8">
													<button class="ajmal-custom-btn" @click="goToAddEducation()">Add Educational Info</button>
												</div>
											</div>
											<div class="experience-box" v-for="info in doctorEduInfo">
												<ul class="experience-list">
													<li>
														<div class="experience-user">
															<div class="before-circle"></div>
														</div>
														<div class="row">
															<div class="col-md-5">
																<div class="experience-content">
																	<a href="#"><i style="float: right;" class="edit-btn edit icon" @click="editEduRowInfo(info.id)"></i></a>
																	<div class="timeline-content">
																		<a href="" class="name">{{info.institution}}</a>
																		<div>{{info.degree}}</div>
																		<span class="time">{{info.year_from+' to '+info.year_to}}</span>
																		<span>{{info.result}}</span>
																	</div>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
										<div class="card-box mb-0">
											<div class="row">
												<div class="col-md-4">
													<h3 class="card-title">Experience</h3>
												</div>
												<div class="col-md-8">
													<button class="ajmal-custom-btn" @click="goToAddExperience()">Add Experience Info</button>
												</div>
											</div>
											<div class="experience-box" v-for="exp in doctorExpInfo">
												<ul class="experience-list">
													<li>
														<div class="experience-user">
															<div class="before-circle"></div>
														</div>
														<div class="row">
															<div class="col-md-5">
																<div class="experience-content">
																	<a href="#"><i style="float: right;" class="edit-btn edit icon" @click="editExpRowInfo(exp.id)"></i></a>
																	<div class="timeline-content">
																		<a href="" class="name">{{exp.institution}}</a>
																		<span class="time">{{exp.position}}</span>
																		<span class="time">{{exp.year_from+' to '+exp.year_to}}</span>
																	</div>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
											<div class="card">
												<div class="header">
													<modal v-model="showModal">
														<p slot="header">Add Your Speciality</p>

														<div slot="content">
															<div class="form-group">
																<p><b>Speciality</b></p>
																<div class="borderBottom" :class="{error: validation.hasError('speciality')}">
																	<input type="text" v-model="speciality" class="form-control" placeholder="Enter Your Speciality" />
																</div>
																<div class="message" style="color: red;">{{ validation.firstError('speciality') }}</div>
															</div>
														</div>
														<template slot="actions">
															<div class="ui button positive" @click="saveData()">
																Save
															</div>
															<div class="ui button red" @click="showModal=false">
																Cancel
															</div>
														</template>
													</modal>
												</div>
											</div>
											<!-- ***************Edit Educational info Modal************* -->
											<div class="card">
												<div class="header">
													<modal v-model="showModal2">
														<p slot="header">Edit Your Educational Info</p>

														<div slot="content">
															<P><b>Institution</b></P>
															<input type="text" class="form-control" v-model="editEduInfo.institution"/>
															<!-- ***************************************** -->
															<P><b>Degree</b></P>
															<input type="text" class="form-control" v-model="editEduInfo.degree"/>
															<!-- ***************************************** -->
															<P><b>Year From</b></P>
															<date-picker :bootstrap-styling="true" class="datepicker" placeholder="Year From" v-model="editEduInfo.year_from"></date-picker>
															<!-- ***************************************** -->
															<P><b>Year To</b></P>
															<date-picker :bootstrap-styling="true" class="datepicker" placeholder="Year From" v-model="editEduInfo.year_to"></date-picker>
															<!-- ***************************************** -->
															<P><b>Result</b></P>
															<input type="text" class="form-control" v-model="editEduInfo.result"/>
															<!-- ***************************************** -->
														</div>
														<template slot="actions">
															<div class="ui button positive" @click="updateEditEduData()">
																Update
															</div>
															<div class="ui button red" @click="showModal2=false">
																Cancel
															</div>
														</template>
													</modal>
												</div>
											</div>
											<!-- ***********Edit Experience Modal********** -->
											<div class="card">
												<div class="header">
													<modal v-model="showModal3">
														<p slot="header">Edit Your Experience Info</p>

														<div slot="content">
															<P><b>Institution</b></P>
															<input type="text" class="form-control" v-model="editExpInfo.institution"/>
															<!-- ***************************************** -->
															<P><b>Position</b></P>
															<input type="text" class="form-control" v-model="editExpInfo.position"/>
															<!-- ***************************************** -->
															<P><b>Year From</b></P>
															<date-picker :bootstrap-styling="true" class="datepicker" placeholder="Year From" v-model="editExpInfo.year_from"></date-picker>
															<!-- ***************************************** -->
															<P><b>Year To</b></P>
															<date-picker :bootstrap-styling="true" class="datepicker" placeholder="Year From" v-model="editExpInfo.year_to"></date-picker>
															<!-- ***************************************** -->
														</div>
														<template slot="actions">
															<div class="ui button positive" @click="updateEditExpData()">
																Update
															</div>
															<div class="ui button red" @click="showModal3=false">
																Cancel
															</div>
														</template>
													</modal>
												</div>
											</div>
											<!-- ***********Edit General Info Modal********** -->
											<div class="card">
												<div class="header">
													<modal v-model="showModal4">
														<p slot="header">Edit Your Experience Info</p>

														<div slot="content">
															<P><b>Phone</b></P>
															<input type="text" class="form-control" v-model="editGeneralInfo.phone"/>
															<!-- ***************************************** -->
															<P><b>Email</b></P>
															<input type="text" class="form-control" v-model="editGeneralInfo.email"/>
															<!-- ***************************************** -->
															<P><b>Address</b></P>
															<input type="text" class="form-control" v-model="editGeneralInfo.address"/>
															<!-- ***************************************** -->
														</div>
														<template slot="actions">
															<div class="ui button positive" @click="updateEditGeneralData()">
																Update
															</div>
															<div class="ui button red" @click="showModal4=false">
																Cancel
															</div>
														</template>
													</modal>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="bottom-tab2">
								Tab content 2
							</div>
							<div class="tab-pane" id="bottom-tab3">
								Tab content 3
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import modal from 'vue-semantic-modal'
	import Swal from 'sweetalert2';
	import SimpleVueValidation from 'simple-vue-validator'
	import Datepicker from 'vuejs-datepicker';
    const Validator = SimpleVueValidation.Validator
	export default{
		components: {
			modal,
			'date-picker': Datepicker
		},
		data(){
			return{
				isLoading: false,
				fullPage: true,
				url: '',
				doctorInfo: [],
				doctorEduInfo: [],
				doctorExpInfo: [],
				specialityInfo: [],
				doctor_id: '',
				id:'',
				speciality:'',
				showModal: false,
				showModal2: false,
				showModal3: false,
				showModal4: false,
				editEduInfo:{
					institution: '',
					degree: '',
					year_from: '',
					year_to: '',
					result: '',
					rowId: '',
					doctor_id: ''
				},
				editExpInfo:{
					institution: '',
					position: '',
					year_from: '',
					year_to: '',
					rowId: '',
					doctor_id: ''
				},
				editGeneralInfo:{
					phone: '',
					email: '',
					address: '',
					doctor_id: ''
				}
			}
		},
		created(){
			this.url = apiDomain
			var self = this
			const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
			this.doctor_id = tokenData.doctor_id
			this.id = tokenData.id
			this.$http.post(apiDomain + 'api/getDoctorInfoForProfile',{id: tokenData.id,doctor_id: tokenData.doctor_id})
				.then(response => {
					if(response.status === 200){
						console.log(response)
						self.doctorInfo = response.body.doctor_info
						self.doctorEduInfo = response.body.edu_info
						self.doctorExpInfo = response.body.exp_info
						self.specialityInfo = response.body.sp_info
					}
				}).catch((e) => {
					console.log(e)
				})
		},
		methods: {
			goToAddEducation(){
				this.$router.push({name: 'add_education', params: {doctor_id: this.doctor_id,id: this.id}})
			},
			goToAddExperience(){
				this.$router.push({name: 'add_experience', params: {doctor_id: this.doctor_id,id: this.id}})
			},
			goToAddSpeciality(){
				this.showModal = true
			},
			editEduRowInfo(value){
				var self = this
	            for(var i=0; i < self.doctorEduInfo.length; i++){
	                if(self.doctorEduInfo[i].id === value){
	                    self.editEduInfo.institution = self.doctorEduInfo[i].institution
	                    self.editEduInfo.degree = self.doctorEduInfo[i].degree
	                    self.editEduInfo.year_from = self.doctorEduInfo[i].year_from
	                    self.editEduInfo.year_to = self.doctorEduInfo[i].year_to
	                    self.editEduInfo.result = self.doctorEduInfo[i].result
	                    self.editEduInfo.rowId = self.doctorEduInfo[i].id
	                    self.editEduInfo.doctor_id = self.id
	                }
	            }
				this.showModal2 = true
			},
			editExpRowInfo(value){
				var self = this
	            for(var i=0; i < self.doctorExpInfo.length; i++){
	                if(self.doctorExpInfo[i].id === value){
	                    self.editExpInfo.institution = self.doctorExpInfo[i].institution
	                    self.editExpInfo.position = self.doctorExpInfo[i].position
	                    self.editExpInfo.year_from = self.doctorExpInfo[i].year_from
	                    self.editExpInfo.year_to = self.doctorExpInfo[i].year_to
	                    self.editExpInfo.rowId = self.doctorExpInfo[i].id
	                    self.editExpInfo.doctor_id = self.id
	                }
	            }
				this.showModal3 = true
			},
			editGeneralRowInfo(){
				this.editGeneralInfo.phone = this.doctorInfo[0]['phone_number']
				this.editGeneralInfo.email = this.doctorInfo[0]['email']
				this.editGeneralInfo.address = this.doctorInfo[0]['address']
				this.editGeneralInfo.doctor_id = this.id
				this.showModal4 = true
			},
			updateEditEduData(){
				var self = this
				self.sendEduUpdateData() 
				self.isLoading = true 
			},
			updateEditExpData(){
				var self = this
				self.sendExpUpdateData()
				self.isLoading = true ;
			},
			updateEditGeneralData(){
				var self = this
				self.sendGeneralUpdateData()
				self.isLoading = true 
			},
			sendEduUpdateData(){
				var self = this
				this.$http.post(apiDomain + 'api/updateDoctorEduData',self.editEduInfo)
					.then(response => {
						if(response.status === 200){
							console.log(response)
							self.EduUpdateSuccessModal()
							self.isLoading = false
						}
					}).catch((e) => {
						console.log(e)
						self.failedModal()
						self.isLoading = false
					})
			},
			sendExpUpdateData(){
				var self = this
				this.$http.post(apiDomain + 'api/updateDoctorExpData',self.editExpInfo)
					.then(response => {
						if(response.status === 200){
							console.log(response)
							self.EduUpdateSuccessModal()
							self.isLoading = false
						}
					}).catch((e) => {
						console.log(e)
						self.failedModal()
						self.isLoading = false
					})
			},
			sendGeneralUpdateData(){
				var self = this
				this.$http.post(apiDomain + 'api/updateDoctorGeneralData',self.editGeneralInfo)
					.then(response => {
						if(response.status === 200){
							console.log(response)
							self.EduUpdateSuccessModal()
							self.isLoading = false
						}
					}).catch((e) => {
						console.log(e)
						self.failedModal()
						self.isLoading = false
					})
			},
			saveData(){
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
				this.$http.post(apiDomain + 'api/saveDoctorSpecility',{speciality: self.speciality,doctor_id: self.doctor_id,id: self.id})
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
			successModal(){
				Swal.fire(
					'Success!',
					'Successfully Saved!',
					'success'
					)
			},
			EduUpdateSuccessModal(){
				Swal.fire(
					'Success!',
					'Successfully Updated!',
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
		},
		validators: {
	  		'speciality': function (value) {
	            return Validator.value(value).required();
	        }
	    }
	}
</script>
<style>
	.edit-btn{
		color: #1AAB8A;
	}
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>