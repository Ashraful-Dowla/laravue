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
					<div class="card-box profile-header">
						<div class="row">
							<div class="col-md-12">
								<div class="profile-view">
									<div class="profile-img-wrap">
										<div class="profile-img">
											<img class="avatar" :src="url+'receptionistImage/'+receptionistInfo[0].image" alt="Image">
										</div>
									</div>
									<div class="profile-basic">
										<div class="row">
											<div class="col-md-5">
												<div class="profile-info-left">
													<h3 class="user-name m-t-0 mb-0">{{receptionistInfo[0].first_name+' '+receptionistInfo[0].last_name}}</h3>
													<div class="staff-id"><strong>Receptionist ID: {{receptionist_id}}</strong></div>
												</div>
											</div>
											<div class="col-md-7">
												<a href="#"><i style="float: right;" class="edit-btn edit icon" @click.prevent="editGeneralRowInfo()"></i></a>
												<ul class="personal-info">
													<li>
														<span class="title">Phone:</span>
														<span class="text">{{receptionistInfo[0].phone_number}}</span>
													</li>
													<li>
														<span class="title">Email:</span>
														<span class="text">{{receptionistInfo[0].email}}</span>
													</li>
													<li>
														<span class="title">Birthday:</span>
														<span class="text">{{receptionistInfo[0].birthday}}</span>
													</li>
													<li>
														<span class="title">Address:</span>
														<span class="text">{{receptionistInfo[0].address}}</span>
													</li>
													<li>
														<span class="title">Gender:</span>
														<span class="text">{{receptionistInfo[0].gender}}</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<!-- ***********Edit General Info Modal********** -->
								<div class="card">
									<div class="header">
										<modal v-model="showModal">
											<p slot="header">Edit Your General Info</p>

											<div slot="content">
												<P><b>Phone</b></P>
												<input type="text" class="form-control" v-model="generalInfo.phone"/>
												<!-- ***************************************** -->
												<P><b>Email</b></P>
												<input type="text" class="form-control" v-model="generalInfo.email"/>
												<!-- ***************************************** -->
												<P><b>Address</b></P>
												<input type="text" class="form-control" v-model="generalInfo.address"/>
												<!-- ***************************************** -->
											</div>
											<template slot="actions">
												<div class="ui button positive" @click="updateEditGeneralData()">
													Update
												</div>
												<div class="ui button red" @click="showModal=false">
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
			</div>
		</div>
	</div>
</template>
<script>
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import modal from 'vue-semantic-modal'
	import Swal from 'sweetalert2';
	export default{
		components: {
			modal
		},
		data(){
			return{
				receptionist_id: '',
				id: '',
				receptionistInfo: [],
				url: '',
				showModal: false,
				generalInfo: {
					phone: '',
					email: '',
					address: '',
					rowID: ''
				},
				isLoading: false,
				fullPage: true
			}
		},
		created(){
			this.url = apiDomain
			const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
			this.id = tokenData.id
			this.receptionist_id = tokenData.receptionist_id
			var self = this
			this.$http.post(apiDomain + 'api/getReceptionistInfo',{rowID: tokenData.id})
				.then(response => {
					if (response.status === 200) {
						console.log(response)
						self.receptionistInfo = response.body.recep_info
					}
				}).catch((e) => {
					console.log(e)
				})
		},
		methods: {
			editGeneralRowInfo(){
				this.generalInfo.phone = this.receptionistInfo[0].phone_number
				this.generalInfo.email = this.receptionistInfo[0].email
				this.generalInfo.address = this.receptionistInfo[0].address
				this.generalInfo.rowID = this.id
				this.showModal = true
			},
			updateEditGeneralData(){
				var self =this
				Swal.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok'
				}).then((output) => {
					if (output.value) {
						self.isLoading = true
						self.$http.post(apiDomain + 'api/updateReceptionistGeneralInfo', self.generalInfo)
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
							})    
					}
				});
			},
			successModal(){
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
					text: 'Something went wrong! '
				})
			}
		}
	}
</script>