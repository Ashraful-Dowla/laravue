<template>
	<div id="departments">
		<div class="page-wrapper">
			<div class="container" style="margin-top: 25px;margin-left: 50px;">
				<h3>Expenditure Details</h3>
				<div class="row">
					<div class="col-md-11">
						<hr>
					</div>
				</div>
				<div class="row">
	            	<div class="col-sm-5">
	            		<div class="form-group">
	            			<div class="borderBottom">
	            				<input type="text" class="form-control" placeholder="Enter Patient ID" />
	            			</div>
	            		</div>
	            	</div>
	            	<div class="col-md-5">
                        <div class="m-t-20">
                            <button type="button" class="btn  btn-raised btn-success waves-effect">View Details</button>
                        </div>
                    </div>
	            </div>
	            <div class="row">
					<div class="col-md-11 border">
						<div class="ui container">
					        <filter-bar></filter-bar>
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
	//import CustomActions from './CustomActions'
	//import DetailRow from './DetailRow'
	import FilterBar from '@/components/Pages/Admin/import_details/FilterBar'
	import { FieldsDef_Expenditure_Details } from '@/components/Pages/Admin/import_details/FieldsDef_Expenditure_Details'

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
		      fields: FieldsDef_Expenditure_Details,
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
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>