<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<h3>Test Management</h3>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<p v-if="errors.length">
				<b>Please correct the following error(s):</b>
				<ul>
				    <li v-for="error in errors" class="text-danger" style="font-size: 18px">{{ error }}</li>
				</ul>
  			</p>
			<div class="row">
				<div class="col-sm-5">
					<div class="form-group">
						<p><b>Test Name</b></p>
						<div class="borderBottom">
							<input type="text" v-model="test_name" class="form-control" placeholder="Enter a title..." />
						</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<p><b>Price</b></p>
						<div class="borderBottom">
							<input type="number" v-model="price" class="form-control" placeholder="Enter Price..." />
						</div>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group">
						<div>
							<button type="button" class="btn  btn-raised btn-success waves-effect" @click="create_test()">Create Test</button>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10 border">
					<div class="ui container">
				        <filter-bar></filter-bar>
				        <vuetable ref="vuetable"
				        api-url="http://localhost:8000/api/get_test_management_data"
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
							    <p slot="header">Update Details</p>
							 
							  	<div slot="content">
									 <div class="form-group">
										<p><b>Test Name</b></p>
										<div class="borderBottom">
											<input type="text" v-model="updated_test_name" class="form-control" placeholder="Enter a title..." />
										</div>
									</div>
							    </div>
							    <div slot="content">
								    <div class="form-group">
										<p><b>Price</b></p>
										<div class="borderBottom">
											<input type="number" v-model="updated_price" class="form-control" placeholder="Enter Price..." />
										</div>
									</div>
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
	import { FieldsDef_test_management } from '@/components/Pages/Admin/import_details/FieldsDef_test_management'

	import Swal from 'sweetalert2'

	import modal from 'vue-semantic-modal'

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
		      errors:[],
		      data: [],
		      test_name:'',
		      price:'',
		      id: '2',
		      fields: FieldsDef_test_management,
		      sortOrder: [],
		      moreParams: {},
		      showModal: false,
		      updated_test_name: '',
		      updated_price: '',
		      update_id: '',
		      updated_by: ''
		    }
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  methods: {
		    onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      this.$refs.vuetable.changePage(page)
		    },
		    onAction (action, data, index) {
		      	console.log('slot action: ' + action, data.id, index)
		      	if(action == 'delete-item'){
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
			              }
			         });
		      	}
		      	else if(action == 'edit-item'){
		      		this.showModal = true
		      		this.updated_test_name = data.title
		      		this.updated_price = data.price
		      		this.update_id = data.id
		      	}
		    },
		    onFilterSet (filterText) {
		      this.moreParams.filter = filterText
		      Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    },
		    onFilterReset () {
		      delete this.moreParams.filter
		      Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    },
		    create_test(){
		    	if(this.errorCheck()){
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
			                self.sendData()	
			              }
			         });
		    	}
		    },
		    errorCheck(){
		    	this.errors=[]
		    	if(!this.test_name ){
		    		this.errors.push('Test Name is required')
		    	}
		    	if(!this.price){
		    		this.errors.push('Price is required')
		    	}
		    	if(!this.errors.length){
		    		return true
		    	}
		    	return false
		    },
		    sendData(){
		    	var self = this
		    	this.$http.post('http://localhost:8000/api/test_management',{
			            name: self.test_name,
			            test_price: self.price,
			            created_by: self.id
			         }).then((response)=>{

			           	 console.log(response)
			           	 this.test_name = ''
			           	 this.price = ''
			           	 this.successModal()
			           	 Vue.nextTick( () => this.$refs.vuetable.refresh() )

			             }).catch((e)=>{

			             	console.log(e)
			             	this.failedModal()

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
		    },
		    deleteData(deleteId){
		    	var self = this;
		    	this.$http.post('http://localhost:8000/api/delete_test_management_data',{
		    		id: deleteId
		    	}).then((response)=>{
		    		console.log(response)
		    		this.successDeletedModal()
		    		Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    	}).catch((e)=>{
		    		console.log(e)
		    		this.failedModal()
		    	})
		    },
		    successDeletedModal(){
		    	Swal.fire(
				    'Deleted!',
				    'Successfully Deleted!',
				    'success'
				)
		    },
		    updateData(){
		    	console.log('xyz')
		    	var self = this
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
			                self.sendUpdateData()	
			              }
			         });
		    },
		    sendUpdateData(){
		        var self = this
		        this.updated_by= this.id
		    	this.$http.post('http://localhost:8000/api/update_test_management_data',{

		    		name: self.updated_test_name,
		    		test_price: self.updated_price,
		    		update_id: self.update_id,
		    		updated_by: self.updated_by

		    	}).then((response)=>{

		    		this.successUpdatedModal()
		    		this.showModal = false
		    		Vue.nextTick( () => this.$refs.vuetable.refresh() )

		    	}).catch((e)=>{

		    		console.log(e)
		    		this.failedModal()
		    		this.showModal = false
		    		Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    	})
		    },
		    successUpdatedModal(){
		    	Swal.fire(
				    'Updated!',
				    'Successfully Updated!',
				    'success'
				)
		    }
		  }
		}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>