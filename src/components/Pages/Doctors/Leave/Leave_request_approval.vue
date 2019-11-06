<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Leave Request Approvals</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10 border">
					<br>
					<div class="ui container">
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
							    <!-- <button class="ui button red"
							    	@click="onAction('delete-item', props.rowData, props.rowIndex)">
							        <i class="trash alternate icon"></i>
							    </button> -->
							    <router-link to=""><i class="trash alternate icon" style="color: black;" @click="onAction('delete-item', props.rowData, props.rowIndex)"></i></router-link>
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
	import FilterBar from '@/components/Pages/Doctors/import_details/FilterBar'
	import { FieldsDef_leave_request_approval } from '@/components/Pages/Doctors/import_details/FieldsDef_leave_request_approval'
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
		      fields: FieldsDef_leave_request_approval,
		      sortOrder: [],
		      moreParams: {},
		      apiURL: '',
		      isLoading: false,
		      fullPage: true
		    }
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  methods: {
		  	statusCall(value){
		  		if(value === '2'){
		  			return '<span class="ui red label">Request Denied</span>'
		  		}
		  		else if(value === '0'){
		  			return '<span class="ui yellow label">Panding</span>'
		  		}
		  		else if(value === '1'){
		  			return '<span class="ui green label">Granted</span>'
		  		}
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
		    	if(action === 'delete-item'){
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
		    deleteData(id){
		    	var self = this
		    	this.$http.post(apiDomain + 'api/deleteLeaveRequestApproval',{rowData: id})
		    		.then(response => {
		    			if(response.status === 200){
		    				console.log(response)
		    				self.successdModal()
		    				self.isLoading = false
		    				Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    			}
		    		}).catch((e) => {
		    			console.log(e)
		    			self.failedModal()
		    			self.isLoading = false
		    		})
		    },
		    successdModal(){
		    	Swal.fire(
				    'Deleted!',
				    'Successfully Deleted!',
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
			var self = this
			this.apiURL = apiDomain + 'api/leaveRequestApproval/' + tokenData.doctor_id
			this.$http.get(self.apiURL)
				.then(response => {
					console.log(response)
				}).catch((e) =>{
					console.log(e)
				})
		}
	}
</script>