<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<h3>Report Overview</h3>
			<div class="row">
				<div class="col-md-11">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-11 border">
					<div class="ui container">
						<!-- <filter-bar></filter-bar> -->
						<vuetable ref="vuetable"
						api-url=""
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
									<i class="zoom icon"></i>
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
</template>
<script>
import Vue from 'vue'
import VueEvents from 'vue-events'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import FilterBar from '@/components/Pages/Admin/import_details/FilterBar'
import { FieldsDef_see_reports } from '@/components/Pages/Admin/import_details/FieldsDef_see_reports'

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
			fields: FieldsDef_see_reports,
			sortOrder: [],
			moreParams: {}
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
	}
}
</script>