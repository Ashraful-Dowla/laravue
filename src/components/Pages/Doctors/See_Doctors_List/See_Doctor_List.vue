<template>
	<div class="page-wrapper">
		<div class="container body" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-10">
					<h3>See All Department's Doctors</h3>
					<hr>
				</div>
			</div>
			<div class="row clearfix">
                <div class="col-sm-5">
					<div class="form-group">
	                    <p><b>Select Department</b></p>
	                    <div class="borderBottom">
		                    <select class="form-control show-tick" v-model="department" @change="departmentChange()">
		                    	<option v-for="dept in depatrments" :value="dept.department_name">{{dept.department_name}}</option>
		                    </select>
		                </div>
	                </div>
            	</div>
			</div><br>
			<div class="row">
				<div class="col-md-10 border">
					<div class="ui container">
				        <h3 style="text-align: center;">Doctors Details</h3>
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
	import FilterBar from '@/components/Pages/Doctors/import_details/FilterBar'
	import { FieldsDef_see_doctors_list } from '@/components/Pages/Doctors/import_details/FieldsDef_see_doctors_list'
	import { apiDomain } from '@/components/Pages/Authentication/config'

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
		      fields: FieldsDef_see_doctors_list,
		      sortOrder: [],
		      moreParams: {},
		      depatrments: [],
		      department: '',
		      apiURL: ''
		    }
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  methods: {
		  	deptCall(){
		  		return this.department
		  	},
		  	departmentChange(){
		  		this.$nextTick(function(){
		  			var self = this
		  			this.apiURL = apiDomain + 'api/getDepartmentwiseDoctorInfo/' + self.department
		  			Vue.nextTick( () => self.$refs.vuetable.refresh() )
		  			this.$http.get(self.apiURL)
		  				.then(response => {
		  					if(response.status === 200){
		  						console.log(response)
		  					}
		  				}).catch((e) => {
		  					console.log(e)
		  				})
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
		      console.log('slot action: ' + action, data.name, index)
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
		    // const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
		    // this.appointment.patient_id = tokenData.patient_id
		    this.$http.get(apiDomain + 'api/getDepartmentInfo')
			    .then(response => {
			        self.depatrments = response.body.departmentsInfo
			    }).catch((e) => {
			        console.log(e)
			    })
		}
		}
</script>
<style scoped>
	.border{
		border: 1px solid black;
		border-radius: 3px;
	}
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>