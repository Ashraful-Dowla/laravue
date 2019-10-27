<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-7">
					<h4 class="page-title">Leave Request</h4>
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
						      	<router-link to=""><i class="check circle icon" @click="onAction('accept-request', props.rowData, props.rowIndex)"></i></router-link>/

						      	<router-link to=""><i class="trash alternate icon" @click="onAction('delete-request', props.rowData, props.rowIndex)"></i></router-link>

						    </div>
						</template>
						<template slot="doctor_name" slot-scope="props">
							{{props.rowData.first_name+' '+props.rowData.last_name}}
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
	import { FieldsDef_leaves } from '@/components/Pages/Admin/import_details/FieldsDef_leaves'
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import Swal from 'sweetalert2'

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
		      fields: FieldsDef_leaves,
		      sortOrder: [],
		      moreParams: {},
		      apiURL: apiDomain+'api/getLeaveRequests'
		    }
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  methods: {
		  	statusCall(value){
		  		return value === '1'
		  						  ? '<span class="ui green label">Approved</span>'
		  						  : '<span class="ui red label">Not Approved</span>'
		  	},
		    onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      this.$refs.vuetable.changePage(page)
		    },
		    onAction (action, data, index) {
		    	var self = this
		      	if(action === 'accept-request'){
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
	                            self.acceptRequest(data.id);     
	                      }
	                });
		      	}
		      	else if(action === 'delete-request'){
		      		Swal.fire({
	                    title: 'Are you sure?',
	                    text: "You won't be able to revert this!",
	                    type: 'warning',
	                    showCancelButton: true,
	                    confirmButtonColor: '#3085d6',
	                    cancelButtonColor: '#d33',
	                    confirmButtonText: 'Deny'
	                }).then((result) => {
	                      if (result.value) {
	                            self.denyLeaveRequest(data.id);     
	                      }
	                });
		      	}
		    },
		    denyLeaveRequest(id){
		    	var self = this
		    	this.$http.post(apiDomain + 'api/denyLeaveRequest',{id: id})
		    		.then(response => {
		    			if(response.status === 200){
		    				console.log(response)
		    				self.denySuccessModal()
		    				Vue.nextTick( () => self.$refs.vuetable.refresh() )
		    			}
		    		}).catch((e) => {
		    			console.log(e)
		    			self.failedModal()
		    		})
		    },
		    acceptRequest(id){
		    	var self = this
		    	this.$http.post(apiDomain + 'api/acceptLeaveRequest',{id: id})
		    		.then(response => {
		    			if (response.status === 200) {
		    				console.log(response)
		    				self.successModal()
		    				Vue.nextTick( () => self.$refs.vuetable.refresh() )
		    			}
		    		}).catch((e) => {
		    			console.log(e)
		    			self.failedModal()
		    		})
		    },
		    denySuccessModal(){
	            Swal.fire(
	                  'Success!',
	                  'Successfully Accepted!',
	                  'success'
	            )
	        },
		    successModal(){
	            Swal.fire(
	                  'Success!',
	                  'Successfully Accepted!',
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
		  created(){
		  	this.$http.get(this.apiURL)
		  		.then(response => {
		  			console.log(response)
		  		})
		  }
		}
</script>