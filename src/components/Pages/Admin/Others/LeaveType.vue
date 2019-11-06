<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true"
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<h3>Leave Type Management</h3>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
	                    <div class="borderBottom">
	                    	<input type="text" class="form-control"  placeholder="Enter Leave Type" v-model="LeaveType"/>
	                    </div>
	                </div>
	            </div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="ui button positive" @click="saveLeaveType()">Add Leave Type</button>
					</div>
				</div>
			</div>
			<div class="row">
				<hr>
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
	import { FieldsDef_Leave_Type } from '@/components/Pages/Admin/import_details/FieldsDef_Leave_Type'
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import modal from 'vue-semantic-modal'
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
		      fields: FieldsDef_Leave_Type,
		      sortOrder: [],
		      moreParams: {},
		      LeaveType: '',
		      apiURL: apiDomain + 'api/getLeaveTypeInfo',
		      AD_id: '',
		      isLoading: false,
		      fullPage: true
		    }
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  methods: {
		  	saveLeaveType(){
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
                            self.addLeaveType(); 
                            self.isLoading = true    
                      }
                });
		  	},
		  	addLeaveType(){
		  		var self = this
		  		this.$http.post(apiDomain + 'api/addLeaveType',{
		  														LeaveType: self.LeaveType,
		  														AD_id: self.AD_id
		  														})
		  			.then(response => {
		  				if(response.status === 200){
		  					console.log(response)
		  					self.successModal()
		  					self.isLoading = false
		  					Vue.nextTick( () => self.$refs.vuetable.refresh() )
		  				}
		  			}).catch((e) => {
		  				console.log(e)
		  				self.failedModal();
		  				self.isLoading = false
		  			})
		  	},
		    onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      this.$refs.vuetable.changePage(page)
		    },
		    onAction (action, data, index) {
		    	if(action === 'delete-items'){
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
	                            self.deleteLeaveType(data.id);
	                            self.isLoading = true     
	                      }
	                });
		    	}
		    },
		    deleteLeaveType(id){
		    	var self = this
		    	this.$http.post(apiDomain + 'api/deleteLeaveType',{rowID: id})
		    		.then(response=>{
		    			if(response.status === 200){
		    				console.log(response)
		    				self.deleteLeaveModal();
		    				self.isLoading = false
		    				Vue.nextTick( () => self.$refs.vuetable.refresh() )
		    			}
		    		}).catch((e)=>{
		    			console.log(e)
		    			self.failedModal();
		    			self.isLoading = false
		    		})
		    },
		    successModal(){
	            Swal.fire(
	                  'Success!',
	                  'Successfully Inserted!',
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
		    deleteLeaveModal(){
	            Swal.fire(
	                  'Success!',
	                  'Successfully Deleted!',
	                  'success'
	            )
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
		  	const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    		this.AD_id = tokenData.id
    		this.$http.get(this.apiURL)
    			.then(response => {
    				console.log(response)
    			}).catch((e)=>{
    				console.log(e)
    			})
		  }
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>