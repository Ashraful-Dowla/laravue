<template>
<div class="page-wrapper">
    <div class="content">
      <div class="ui container">
        <h1>Test Issued</h1> 
        <!-- <filter-bar></filter-bar> -->
        <vuetable ref="vuetable"
          :api-url="apiUrl"
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
</template>

<script>
import Vue from 'vue'
import VueEvents from 'vue-events'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
//import CustomActions from './CustomActions'
//import DetailRow from './DetailRow'
import FilterBar from '@/components/Pages/patient/import_details/FilterBar'
import { FieldsDef_test_issued } from "@/components/Pages/patient/import_details/FieldsDef_test_issued"

import { apiDomain } from '@/components/Pages/Authentication/config'

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
      fields: FieldsDef_test_issued,
      sortOrder: [
        {
          field: 'id',
          sortField: 'id',
          direction: 'asc'
        }
      ],
      moreParams: {},
      data: [],
      apiUrl: '',
      id: '',
    }
  },
  created(){
     const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
     this.id = tokenData.id

     //console.log(this.id)

     this.apiUrl = apiDomain + 'api/getPatientTestIssuedData/' + this.id
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