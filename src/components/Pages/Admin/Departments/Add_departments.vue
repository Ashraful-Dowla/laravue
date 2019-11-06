<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true"
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Add Department</h4>
				</div>
				<div class="col-md-2 text-right m-b-30">
                    <router-link to="/admin/departments"><i class="arrow alternate circle left outline icon"></i>Previous</router-link>
                </div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group" :class="{error: validation.hasError('department_name')}">
						<p><b>Department Name</b></p>
						<div class="borderBottom">
							<input type="text" v-model="department_name" class="form-control" placeholder="Department Name" />
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('department_name') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group" :class="{error: validation.hasError('description')}">
						<p><b>Description</b></p>
						<div class="borderBottom">
							<textarea cols="30" v-model="description" rows="4" class="form-control"></textarea>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('description') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<p>Department Status</p>
					<div class="demo-radio-button form-group" :class="{error: validation.hasError('status')}">
						<input name="group1" type="radio" id="radio_6" v-model="status" value="1" class="with-gap" />
        				<label for="radio_6">ACTIVE</label>
						<input name="group1" type="radio" id="radio_7" v-model="status" value="0" class="with-gap" />
        				<label for="radio_7">INACTIVE</label>
					</div>
					<div class="message" style="color: red;">{{ validation.firstError('status') }}</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="ui button positive" @click="createDepartment()">Create Department</button>
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
<script type="text/javascript">
	import SimpleVueValidation from 'simple-vue-validator'
    const Validator = SimpleVueValidation.Validator

    import Swal from 'sweetalert2'

    import { apiDomain } from '@/components/Pages/Authentication/config'

	export default{
		data(){
			return {
				department_name: '',
				description: '',
				status: '1',
				isLoading: false,
				suc: false,
				id: '2'
			};
		},
		created(){
			 var self = this
		     const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
		     this.id = tokenData.id
		     //console.log(this.id)
		},
		methods:{
			createDepartment(){
				var self = this
				this.$validate()
					.then((response)=>{
						if(response){
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
					                self.sendData()	
					                self.isLoading = true
					              }
					         });
                        }
					})
				
			},
			sendData(){
				var self = this

				this.$http.post(apiDomain+'api/addDepartments',{
					department_name: self.department_name,
					description: self.description,
					status: self.status,
					created_by: self.id 
				})
				.then((response)=>{
					self.loading = false
					console.log(response)
					self.isLoading = false
					this.successModal()
					this.$router.push({ name: 'departments'})
				}).catch((e)=>{
					console.log(e)
					this.failedModal()
					self.loading = false
				})
			},
			successModal(){
				Swal.fire(
				    'Inserted!',
				    'Successfully Inserted!',
				    'success'
				)
			},
			failedModal(){
				Swal.fire({
				  type: 'error',
				  title: 'Oops...',
				  text: 'Something went wrong!'
				})
			}
		},
		validators:{
			'department_name': function(value){
				return Validator.value(value).required();
			},
			'description': function(value){
				return Validator.value(value).required();
			},
			'status': function(value){
				return Validator.value(value).required();
			}
		}
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>