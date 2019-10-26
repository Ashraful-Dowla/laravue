<template>
<div class="page-wrapper">
    <div class="content">
  <div class="ui container">
    <h1>Bill Issued</h1>
   <!--  <filter-bar></filter-bar> -->
    <bill_issued_pdf />
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
import { FieldsDef_bill_issued } from '@/components/Pages/patient/import_details/FieldsDef_bill_issued'

import bill_issued_pdf from '@/components/Pages/patient/bill_issued_pdf'

import { apiDomain } from '@/components/Pages/Authentication/config'

Vue.use(VueEvents)
//Vue.component('custom-actions', CustomActions)
//Vue.component('my-detail-row', DetailRow)
Vue.component('filter-bar', FilterBar)


export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    bill_issued_pdf
  },
  data () {
    return {
      fields: FieldsDef_bill_issued,
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
      id: '1',
      bill_id: '',
      show: false
    }
  },
  created(){
      this.apiUrl = apiDomain + 'api/getPatientBillIssuedData/' + this.id 
  },
  mounted () {
    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
    this.$events.$on('filter-reset', e => this.onFilterReset())
  },
  methods: {
    statusCall(value){
        return value === '1'
                      ? '<span class="ui green label">Paid</span>'
                      : '<span class="ui red label">Unpaid</span>'
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onAction (action, data, index) {
      //console.log('slot action: ' + action, data.name, index)

      if(action == 'view-item'){

          this.bill_id = data.id
          this.$events.fire('functionCall', this.bill_id)
          //this.$events.$off('functionCall')

          //console.log('xxx')

      }

    },
    onFilterSet (filterText) {
      console.log(this.filterText)
      this.moreParams = {
            'filter': filterText.trim()
      }
      Vue.nextTick( () => this.$refs.vuetable.refresh() )
    },
    onFilterReset () {
      this.moreParams = {}
      Vue.nextTick( () => this.$refs.vuetable.refresh() )
    }
  }
}
</script>