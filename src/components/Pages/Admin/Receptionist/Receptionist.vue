<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-7">
					<h4 class="page-title">Receptionists</h4>
				</div>
				<div class="col-md-3 text-right m-b-20">
					<router-link class="ui button positive" to="/admin/receptionist/add_receptionist"><i class="plus icon"></i><strong>Add Receptionist</strong></router-link>
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
								<router-link :to="{name: 'edit_receptionist', params: { id: props.rowData.id }}"><i class="edit icon"></i></router-link>
								<router-link to=""><i class="trash alternate icon" @click="onAction('delete-items',props.rowData, props.rowIndex)"></i></router-link>
				    		</div>
				  		</template>
				</vuetable>
				<div class="card">
					<div class="header">
						<modal v-model="showModal">
						    <p slot="header">Receptionist Information</p>
						 
						  	<div slot="content">
								<img :src="modalData.image" alt="No Image">
						    </div>
						    <div slot="content">
						    	<br>
							    <strong>Name: </strong><span>{{modalData.first_name + ' ' + modalData.last_name}}</span><br>
							    <strong>Address: </strong><span>{{modalData.address}}</span><br>
							    <strong>Country: </strong><span>{{modalData.country}}</span><br>
							    <strong>State: </strong><span>{{modalData.state}}</span><br>
							    <strong>City: </strong><span>{{modalData.city}}</span><br>
							    <strong>Phone Number: </strong><span>{{modalData.phone_number}}</span><br>
						    </div>
						 
						    <template slot="actions">
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
	import FilterBar from '@/components/Pages/Admin/import_details/FilterBar'
	import { FieldsDef_Receptionist } from '@/components/Pages/Admin/import_details/FieldsDef_Receptionist'
	import { apiDomain } from '@/components/Pages/Authentication/config';
	import modal from 'vue-semantic-modal'
	import Swal from 'sweetalert2';

	Vue.use(VueEvents)
	Vue.component('filter-bar', FilterBar)

	export default {
		  components: {
		    Vuetable,
		    VuetablePagination,
		    VuetablePaginationInfo,
		    modal
		  },
		  data() {
		    return {
		    	modalData: {
		    		image: '',
					first_name: '',
					last_name: '',
					address: '',
					country: '',
					state: '',
					city: '',
					phone_number: ''
		    	},
		    	fields: FieldsDef_Receptionist,
		    	sortOrder: [],
		    	moreParams: {},
		    	apiURL: '',
		    	showModal: false
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
		    	var self = this
		      if(action === 'show-items'){
		      	this.$http.post(apiDomain + 'api/singleReceptionistInfo',{rowID: data.id})
			      		.then(response => {
			      			console.log(response)
			      			self.modalData.first_name = response.body.single_receptionist_info[0].first_name
			      			self.modalData.last_name = response.body.single_receptionist_info[0].last_name
			      			self.modalData.image = response.body.single_receptionist_info[0].image
			      			self.modalData.address = response.body.single_receptionist_info[0].address
			      			self.modalData.country = response.body.single_receptionist_info[0].country
			      			self.modalData.state = response.body.single_receptionist_info[0].state
			      			self.modalData.city = response.body.single_receptionist_info[0].city
			      			self.modalData.phone_number = response.body.single_receptionist_info[0].phone_number
			      		}).catch((e) => {
			      			console.log(e)
			      		})
		      	this.showModal = true
		      }
		      else if(action === 'delete-items'){
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
                            self.sendData(data.id)     
                      }
                });
		      }
		    },
		    sendData(id){
		    	var self = this
		      	this.$http.post(apiDomain + 'api/deleteReceptionist',{rec_id: id})
		      		.then(response => {
		      			if(response.status === 200){
		      				console.log(response)
		      				self.successModal();
		      				Vue.nextTick( () => self.$refs.vuetable.refresh() )
		      			}
		      		}).catch((e)=>{
		      			console.log(e)
		      			self.failedModal();
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
		  	this.apiURL = apiDomain + 'api/receptionistList'
		  }
		}
</script>