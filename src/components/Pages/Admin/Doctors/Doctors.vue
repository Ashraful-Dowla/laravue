<template>
	<div id="doctor-main">
		<div class="page-wrapper">
			<div class="container" style="margin-top: 25px;margin-left: 50px;">
				<div class="row">
					<div class="col-md-8">
						<h4 class="page-title">Doctors</h4>
					</div>
					<div class="col-md-2 text-right m-b-20">
						<router-link class="ui button positive" to="/admin/doctors/adddoctor"><i class="plus icon"></i><strong>Add Doctor</strong></router-link>
					</div>
				</div>
				<div class="row">
					<div class="col-md-10">
						<hr>
					</div>
				</div>
				<div class="row">
					<div class="col-md-11 border">
						<div class="ui container">
							<filter-bar></filter-bar>
							<vuetable ref="vuetable"
							:api-url="apiURL"
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
									<router-link to=""><i class="zoom icon" @click="onAction('show-items',props.rowData, props.rowIndex)"></i></router-link>
									<router-link :to="{name: 'editdoctor', params: { id: props.rowData.id }}"><i class="edit icon"></i></router-link>
									<router-link to=""><i class="trash alternate icon" @click="onAction('delete-items',props.rowData, props.rowIndex)"></i></router-link>
								</div>
							</template>
							</vuetable>
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
				<div class="card">
					<div class="header">
						<modal v-model="showModal">
						    <p slot="header">Doctor Information</p>
						 
						  	<div slot="content">
								<img :src="modalData.image" alt="No Image">
						    </div>
						    <div slot="content">
						    	<br>
							    <h5>{{'Name: '+modalData.first_name + ' ' + modalData.last_name}}</h5>
							    <h5>{{'Department: '+modalData.department}}</h5>
							    <h5>{{'Address: '+modalData.address}}</h5>
							    <h5>{{'Country: '+modalData.country}}</h5>
							    <h5>{{'State: '+modalData.state}}</h5>
							    <h5>{{'City: '+modalData.city}}</h5>
							    <h5>{{'Phonr Number: '+modalData.phone_number}}</h5>
						    </div>
						 
						    <template slot="actions">
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
</template>
<script>
	import Vue from 'vue'
	import VueEvents from 'vue-events'
	import Vuetable from 'vuetable-2/src/components/Vuetable'
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
	import FilterBar from '@/components/Pages/Admin/import_details/FilterBar'
	import { FieldsDef_doctors_list } from '@/components/Pages/Admin/import_details/FieldsDef_doctors_list'
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import modal from 'vue-semantic-modal'
	import Swal from 'sweetalert2'

	Vue.use(VueEvents)
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
		      modalData: {
		      	first_name: '',
		      	last_name: '',
		      	image: '',
		      	department: '',
		      	address: '',
		      	country: '',
		      	state: '',
		      	city: '',
		      	phone_number: ''
		      },
		      fields: FieldsDef_doctors_list,
		      sortOrder: [],
		      moreParams: {},
		      apiURL: '',
		      showModal: false,
		      profileImage: null

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
		      var self = this;
		      if (action === 'show-items') {
		      	this.$http.post(apiDomain + 'api/singleDoctorInfo',{rowID: data.id})
		      		.then(response => {
		      			console.log(response)
		      			self.modalData.first_name = response.body.single_doc_info[0].first_name
		      			self.modalData.last_name = response.body.single_doc_info[0].last_name
		      			self.modalData.image = response.body.single_doc_info[0].image
		      			self.modalData.department = response.body.single_doc_info[0].department
		      			self.modalData.address = response.body.single_doc_info[0].address
		      			self.modalData.country = response.body.single_doc_info[0].country
		      			self.modalData.state = response.body.single_doc_info[0].state
		      			self.modalData.city = response.body.single_doc_info[0].city
		      			self.modalData.phone_number = response.body.single_doc_info[0].phone_number
		      			// console.log(response.body.single_doc_info[0].first_name)
		      		}).catch((e) => {
		      			console.log(e)
		      		})
		      	this.showModal = true
		      }
		      else if(action === 'delete-items'){
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
                            self.deleteDoctor(data.id);     
                      }
                });
		      }
		    },
		    deleteDoctor(id){
		    	var self = this
		    	this.$http.post(apiDomain + 'api/deleteDoctor',{dr_id: id})
		    		.then(response => {
		    			if(response.status === 200){
		    				self.successModal()
		    				Vue.nextTick( () => self.$refs.vuetable.refresh() )
		    			}
		    		}).catch((e) => {
		    			self.failedModal();
		    			console.log(e)
		    		})
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
		  created () {
		  	var self = this
		  	this.apiURL = apiDomain + 'api/getDoctorsList'
		  	console.log(this.apiURL)
		  	this.$http.get(apiDomain + 'api/getDoctorsList')
		  		.then(response => {
		  			console.log(response)
		  		}).catch((e)=>{
		  			console.log(e)
		  		})
		  }
		}
</script>