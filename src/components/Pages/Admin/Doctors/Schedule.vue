<template>
	<div id="schedule">
		<div class="page-wrapper">
			<div class="container" style="margin-top: 25px;margin-left: 50px;">
				<loading :active.sync="isLoading" 
	                :can-cancel="true"
	                :is-full-page="fullPage">
	            </loading>
				<div class="row">
					<div class="col-md-7">
						<h4 class="page-title">Schedule</h4>
					</div>
					<div class="col-md-4 text-right m-b-20">
						<router-link class="ui button positive" to="/admin/doctors_schedule/addschedule"><i class="plus icon"></i><strong>Add Schedule</strong></router-link>
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
					        data-path="scheduleInfo"
					        :append-params="moreParams"
					        @vuetable:pagination-data="onPaginationData"
					        >
					        <template slot="actions" slot-scope="props">
					          <div class="custom-actions">
					        <router-link :to="{name: 'editschedule', params: {id: props.rowData.doctor_id}}" class="ui button yellow"><i class="edit icon"></i></router-link>
					        <button class="ui button red"
					        @click="onAction('delete-item', props.rowData, props.rowIndex)">
					        <i class="trash alternate icon"></i>
					      </button>
					    </div>
					  </template>
					  <template slot="availableTimes" slot-scope="props">
					    <div v-for="dt in props.rowData.date_time">
					      Date: {{dt.date}}, Time: {{dt.time_from}} to {{dt.time_to}}
					    </div>
					  </template>
					  <template slot="doctor_name" slot-scope="props">
					  	<div>
					  		{{props.rowData.first_name+' '+props.rowData.last_name}}
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
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueEvents from 'vue-events'
	import Vuetable from 'vuetable-2/src/components/Vuetable'
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
	import FilterBar from '@/components/Pages/Admin/import_details/FilterBar'
	import { FieldsDef_doctor_schedule } from '@/components/Pages/Admin/import_details/FieldsDef_doctor_schedule'
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
		      fields: FieldsDef_doctor_schedule,
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
		    	var self = this
		      	if(action === 'delete-item'){
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
	                            self.deleteDoctorSchedule(data.doctor_id); 
	                            self.isLoading = true    
	                      }
	                });
		      	}
		    },
		    deleteDoctorSchedule(id){
		    	var self = this
		    	this.$http.post(apiDomain + 'api/deleteDoctorSchedule',{doc_id: id})
	      			.then(response => {
	      				if(response.status === 200){
	      					console.log(response)
	      					self.successModal();
	      					self.isLoading = false
	      					Vue.nextTick( () => self.$refs.vuetable.refresh() )
	      				}
	      			}).catch((e) => {
	      				self.failedModal()
	      				console.log(e)
	      				self.isLoading = false
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
		  created(){
		  	this.apiURL = apiDomain + 'api/getDoctorScheduleInfo'
		  	this.$http.get(this.apiURL)
		  		.then(response => {
		  			console.log(response)
		  		}).catch((e) => {
		  			console.log(e)
		  		})
		  }
		}
</script>