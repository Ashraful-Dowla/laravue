<template>
<div class="page-wrapper">
    <div class="content">
  <div class="ui container">
    <h1>Transaction </h1>
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
//import FilterBar from '@/components/Pages/patient/import_details/FilterBar'
import { FieldsDef_transaction } from '@/components/Pages/receptionist/import_details/FieldsDef_transaction'

import { apiDomain } from '@/components/Pages/Authentication/config'

 import Swal from 'sweetalert2'

Vue.use(VueEvents)
//Vue.component('custom-actions', CustomActions)
//Vue.component('my-detail-row', DetailRow)
//Vue.component('filter-bar', FilterBar)

export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  data () {
    return {
      fields: FieldsDef_transaction,
      sortOrder: [ ],
      moreParams: {},
      apiUrl: '',
      id: '2',
      data: []
    }
  },
  created(){
     this.apiUrl = apiDomain + 'api/getTransactionData/' + this.id
     console.log(this.apiUrl) 
  },
  mounted () {
    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
    this.$events.$on('filter-reset', e => this.onFilterReset())
  },
  methods: {
    markCall(value)
    {
       if(value==1) return '<span class="ui green label">Wallet</span>'
       else if(value==2) return '<span class="ui blue label">Card</span>'
       else return '<span class="ui red label">Cash</span>'
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