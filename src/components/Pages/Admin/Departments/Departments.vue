<template>
	<div id="departments">
		<div class="page-wrapper">
			<loading :active.sync="isLoading" 
	                :can-cancel="true"
	                :is-full-page="fullPage">
	            </loading>
			<div class="content">
			<div class="container" align="left">
				<div class="row">
					<div class="col-md-7">
						<h4 class="page-title">Departments</h4>
					</div>
					<div class="col-md-4 text-right m-b-30">
						<router-link class="ui button positive" to="/admin/departments/add_departments"><strong>Add Department</strong></router-link>
					</div>
				</div>
				<div class="row">
					<div class="col-md-11">
						<hr>
					</div>
				</div>
				<div class="row">
					<div class="col-md-11 border">
						<div class="ui container">
					        <!-- <filter-bar></filter-bar> -->
					        <vuetable ref="vuetable"
					        :api-url="apiUrl"
					        :fields="fields"
					        pagination-path=""
					        :per-page="5"
					        :multi-sort="true"
					        :sort-order="sortOrder"
					        :append-params="moreParams"
					        @vuetable:pagination-data="onPaginationData"
					        >
					        <template slot="actions" slot-scope="props">
					          <div class="custom-actions">
					         <button class="ui button yellow"
				          		@click="onAction('edit-item', props.rowData, props.rowIndex)">
				          		<i class="edit icon"></i>
				        	</button>
					        <button class="ui button red"
					        @click="onAction('delete-item', props.rowData, props.rowIndex)">
					        <i class="trash alternate icon"></i>
					      </button>
					    </div>
					  </template>
					</vuetable>
					<div class="card">
						<div class="header">
							<modal v-model="showModal">
							    <p slot="header">Update Department Details</p>
							 
							  	<div slot="content">
									 <div class="form-group" :class="{error: validation.hasError('modalForm.updated_department_name')}">
										<p><b>Department Name</b></p>
										<div class="borderBottom">
											<input type="text" v-model="modalForm.updated_department_name" class="form-control" placeholder="Enter a title..." />
										</div>
										<div class="message" style="color: red;">{{ validation.firstError('modalForm.updated_department') }}</div>
									</div>
							    </div>
								<div slot="content">
									 <div class="form-group" :class="{error: validation.hasError('modalForm.updated_description')}">
										<p><b>Description</b></p>
										<div class="borderBottom">
											<textarea cols="30" v-model="modalForm.updated_description" rows="4" class="form-control"></textarea>
										</div>
										<div class="message" style="color: red;">{{ validation.firstError('modalForm.updated_description') }}</div>
									</div>
								</div>
							    <div slot="content">
								    <div class="demo-radio-button form-group" :class="{error: validation.hasError('modalForm.updated_status')}">
										<input name="group1" type="radio" id="radio_6" v-model="modalForm.updated_status" value="1" class="with-gap" />
				        				<label for="radio_6">ACTIVE</label>
										<input name="group1" type="radio" id="radio_7" v-model="modalForm.updated_status" value="0" class="with-gap" />
				        				<label for="radio_7">INACTIVE</label>
									</div>
									<div class="message" style="color: red;">{{ validation.firstError('modalForm.updated_status') }}</div>
								</div>
							    <template slot="actions">
							        <div class="ui button positive" @click="updateData()">
							          Update
							        </div>
							        <div class="ui button red" @click="showModal=false">
							          Cancel
							        </div>
							    </template>
							</modal>
						</div>
					</div>
					<div class="vuetable-pagination ui basic segment grid">
					  <vuetable-pagination-info ref="paginationInfo"
					  ></vuetable-pagination-info>
					  <vuetable-pagination ref="pagination"
					  @vuetable-pagination:change-page="onChangePage"
					  ></vuetable-pagination>
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
	import Vue from 'vue'
	import VueEvents from 'vue-events'
	import Vuetable from 'vuetable-2/src/components/Vuetable'
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
	//import CustomActions from './CustomActions'
	//import DetailRow from './DetailRow'
	import FilterBar from '@/components/Pages/Admin/import_details/FilterBar'
	import { FieldsDef_departments } from '@/components/Pages/Admin/import_details/FieldsDef_departments'

	import modal from 'vue-semantic-modal'
	import SimpleVueValidation from 'simple-vue-validator'
    const Validator = SimpleVueValidation.Validator

    import Swal from 'sweetalert2'
	import { apiDomain } from '@/components/Pages/Authentication/config'



	Vue.use(VueEvents)
	//Vue.component('custom-actions', CustomActions)
	//Vue.component('my-detail-row', DetailRow)
	Vue.component('filter-bar', FilterBar)

	export default {
		  components: {
		    Vuetable,
		    VuetablePagination,
		    VuetablePaginationInfo,
		    modal
		  },
		  data () {
		    return {
		      isLoading: false,
		      fullPage: true,
		      fields: FieldsDef_departments,
		      sortOrder: [],
		      moreParams: {},
		      apiUrl: apiDomain + 'api/getDepartmentData',
		      data: [],
		      showModal: false,
		      id: '2',
		      modalForm:{
		      	 updated_department_name:'',
		      	 updated_status:'',
		      	 updated_description: '',
		      	 updated_by:'',
		      	 update_id:''
		      },
		      err_msg: 'Internal server error. Try again'
		    }
		  },
		  created(){
		  	 var self = this
		     const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
		     this.modalForm.updated_by = tokenData.id
		     // console.log(this.modalForm.updated_by)
		  },
		  methods: {
		  	statusCall(value){
		  		return value === '1'
		  						  ? '<span class="ui green label">Active</span>'
		  						  : '<span class="ui red label">Not Active</span>'
		  	},
		    onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      this.$refs.vuetable.changePage(page)
		    },
		    onAction (action, data, index) {
		      //console.log('slot action: ' + action, data.department_name, index)

		      if(action == 'edit-item'){
		      		this.modalForm.updated_department_name= data.department_name
		      		this.modalForm.updated_status= data.status
		      		this.modalForm.updated_description = data.description
		      		this.modalForm.update_id = data.id
		      		this.showModal = true
		      }
		      else if( action == 'delete-item'){
		      		var self = this;
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
			              	//console.log(data.id)
			                self.deleteData(data.id)
			                self.isLoading = true
			              }
			         });
		      	}
		    },
		    updateData(){
		    	var self = this;
		    	self.sendUpdateData()
				self.isLoading = true
				self.showModal = false
		    },
		    sendUpdateData(){
			        var self = this
			        // this.modalForm.updated_by= this.id
			    	this.$http.post(apiDomain+'api/updateDepartmentData',{
			    		department_name: self.modalForm.updated_department_name,
			    		description: self.modalForm.updated_description,
			    		status: self.modalForm.updated_status,
			    		update_id: self.modalForm.update_id,
			    		updated_by: self.modalForm.updated_by

			    	}).then((response)=>{
			    		console.log(response)
			    		this.$izitoast.success({
						    title: 'OK',
						    message: 'Successfully Updated!',
						});
			    		this.showModal = false
			    		self.isLoading = false
			    		Vue.nextTick( () => this.$refs.vuetable.refresh() )

			    	}).catch((e)=>{

			    		console.log(e)
			    		if(e.status == 401){
			    			self.err_msg = 'A department with this name already exist'
			    // 			this.$izitoast.error({
							//     title: 'error',
							//     message: self.err_msg
							// });
							self.failedModal()
			    			this.showModal = false
				    		self.isLoading = false
				    		Vue.nextTick( () => this.$refs.vuetable.refresh() )
			    		}else {
			    			this.failedModal()
			    // 			this.$izitoast.error({
							//     title: 'error',
							//     message: self.err_msg
							// });
				    		this.showModal = false
				    		self.isLoading = false
				    		Vue.nextTick( () => this.$refs.vuetable.refresh() )
			    		}
			    	})
		    },
		    successUpdatedModal(){
		    	Swal.fire(
				    'Updated!',
				    'Successfully Updated!',
				    'success'
				)
		    },
		    failedModal(){
		    	Swal.fire({
				  type: 'error',
				  title: 'Oops...',
				  text: this.err_msg
				})
		    },
		    deleteData(deleteId){
		    	var self = this;
		    	this.$http.post(apiDomain+'api/deleteDepartmentData',{
		    		id: deleteId
		    	}).then((response)=>{
		    		console.log(response)
		    		this.successDeletedModal()
		    		Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    		self.isLoading = false
		    	}).catch((e)=>{
		    		console.log(e)
		    		this.failedModal()
		    		self.isLoading = false
		    	})
		    },
		    successDeletedModal(){
		    	Swal.fire(
				    'Deleted!',
				    'Successfully Deleted!',
				    'success'
				)
		    },
		    onFilterSet (filterText) {
		      //console.log('filter-set', filterText)
		     	this.moreParams.filter = filterText
      			Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    },
		    onFilterReset () {
		      delete this.moreParams.filter
      		  Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    }
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  destroyed () {
			this.$events.$off('filter-set');
			this.$events.$off('filter-reset');
		  },
		  validators: {
		  		'modalForm.updated_department_name': function (value) {
		            return Validator.value(value).required();
		        },
		        'modalForm.status': function (value) {
		            return Validator.value(value).required();
		        },
		        'modalForm.updated_description': function (value) {
		            return Validator.value(value).required();
		        }

		  }
		}
</script>