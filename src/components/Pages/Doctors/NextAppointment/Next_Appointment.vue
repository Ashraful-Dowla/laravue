<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-10">
					<h3>Next Appointment</h3>
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3">
                    <div class="form-group">
                        <div class="borderBottom">
                            <input type="text" class="form-control" placeholder="Enter a Number" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                    	<div class="borderBottom">
		                    <select class="form-control show-tick">
		                        <option>Select</option>
		                        <option>Days</option>
								<option>Weeks</option>
								<option>Months</option>
								<option>Years</option>
		                    </select>
		                </div>
                    </div>
                </div>
				<div class="col-sm-3">
					<div class="form-group">
	                    <div class="borderBottom">
		                    <input type="text" class="form-control" placeholder="Patient ID: PT-XXXXXXXX" />
		                </div>
	                </div>
            	</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10 border">
					<div class="ui container">
				        <h3 style="text-align: center;">Available Dates</h3>
				        <vuetable ref="vuetable"
				        api-url="https://vuetable.ratiw.net/api/users"
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
				            <button class="ui button positive"
				            @click="onAction('view-item', props.rowData, props.rowIndex)">
				            <i class="hand pointer icon"></i>
				          Pick</button>
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
			</div><br>
			<div class="row">
				<div class="col-md-10">
					<button style="float: right;" type="button" class="btn  btn-raised bg-blue-grey waves-effect"><strong>SUBMIT</strong></button>
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
	import FilterBar from '@/components/Pages/Doctors/import_details/FilterBar'
	import { FieldsDef_next_appointment } from '@/components/Pages/Doctors/import_details/FieldsDef_next_appointment'

	Vue.use(VueEvents)
	//Vue.component('custom-actions', CustomActions)
	//Vue.component('my-detail-row', DetailRow)
	Vue.component('filter-bar', FilterBar)

	export default {
		  components: {
		    Vuetable,
		    VuetablePagination,
		    VuetablePaginationInfo
		  },
		  data () {
		    return {
		      fields: FieldsDef_next_appointment,
		      sortOrder: [],
		      moreParams: {}
		    }
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  methods: {
		    // allcap (value) {
		    //   return value.toUpperCase()
		    // },
		    // genderLabel (value) {
		    //   return value === 'M'
		    //     ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
		    //     : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
		    // },
		    // formatNumber (value) {
		    //   return accounting.formatNumber(value, 2)
		    // },
		    // formatDate (value, fmt = 'D MMM YYYY') {
		    //   return (value == null)
		    //     ? ''
		    //     : moment(value, 'YYYY-MM-DD').format(fmt)
		    // },
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
		    // onCellClicked (data, field, event) {
		    //   console.log('cellClicked: ', field.name)
		    //   this.$refs.vuetable.toggleDetailRow(data.id)
		    // },
		    onFilterSet (filterText) {
		      this.moreParams.filter = filterText
		      Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    },
		    onFilterReset () {
		      delete this.moreParams.filter
		      Vue.nextTick( () => this.$refs.vuetable.refresh() )
		    }
		  }
		}
</script>
<style scoped>
	.back{
		background-color: #494A47;
		color: white;
	}
	.vertical{
		border-left: 1px solid black;
		height: 70px;
	}
	.dangerr{
		color:red;
	}
	.rightSideBar{
		border: 1px solid black;
		border-radius: 3px;
		min-height:250px;
		background-color: #E8EAED;
	}
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>