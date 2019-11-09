<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-11">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-7">
					<h4 class="page-title">Appointments</h4>
				</div>
				<div class="col-md-4 text-right m-b-20">
					<router-link class="ui button positive" to="/admin/appointments/add_appointments"><i class="plus icon"></i><strong>Add Appointment</strong></router-link>
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
								<router-link :to="{name: 'editAppointments', params: { id: props.rowData.id }}" class="ui button yellow"><i class="edit icon"></i></router-link>
								<button class="ui button red"
								@click="onAction('delete-item', props.rowData, props.rowIndex)">
								<i class="trash alternate icon"></i>
							</button>
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
	import { FieldsDef_appointments } from '@/components/Pages/Admin/import_details/FieldsDef_appointments'
	import { apiDomain } from '@/components/Pages/Authentication/config';
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
		      fields: FieldsDef_appointments,
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
		  	appointmentStatus(value){
		  		return value === 'online'
		  						  ? '<span class="ui green label">Online</span>'
		  						  : '<span class="ui red label">Manual</span>'
		  	},
		    onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      this.$refs.vuetable.changePage(page)
		    },
		    onAction (action, data, index) {
		    	if(action === 'delete-item'){
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
	                            self.deleteAppointment(data.id); 
	                            self.isLoading = true    
	                      }
	                });
		    	}
		    },
		    deleteAppointment(id){
		    	var self = this
	    		this.$http.post(apiDomain + 'api/deleteAppointment',{apt_id: id})
	    			.then(response => {
	    				console.log(response)
	    				if(response.status === 200){
	    					self.successModal();
	    					self.isLoading = false
	    					Vue.nextTick( () => self.$refs.vuetable.refresh() )
	    				}
	    			}).catch((e) => {
	    				console.log(e)
	    				self.failedModal();
	    				self.isLoading = false
	    			})
		    },
		    onFilterSet (filterText) {
		      this.moreParams.filter = filterText
		      Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    },
		    onFilterReset () {
		      delete this.moreParams.filter
		      Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    },
		    successModal(){
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
				  text: 'Internal server error. Try again.'
				})
		    }
		  },
		  created(){
		  	var self = this
		    	this.apiURL = apiDomain + 'api/getAppointmentsInfo'
		    	console.log(this.apiURL)
		    	this.$http.get(self.apiURL)
		    		.then(response => {
		    			console.log(response)
		    		}).catch((e)=>{
		    			console.log(e)
		    		})
		  }
		}
</script>