<template>
   <div class="page-wrapper">
    <div class="content">
  <div class="ui container">
    <h1>Report Overview</h1>
    <!-- <filter-bar></filter-bar> -->
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
import { FieldsDef_report } from '@/components/Pages/patient/import_details/FieldsDef_report'

import { apiDomain } from '@/components/Pages/Authentication/config'

import VueHtmlToPaper from 'vue-html-to-paper'

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

Vue.use(VueEvents)
//Vue.component('custom-actions', CustomActions)
//Vue.component('my-detail-row', DetailRow)
Vue.component('filter-bar', FilterBar)

const options = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=yes',
      'scrollbars=yes'
    ],
    styles: [
      'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      'https://unpkg.com/kidlat-css/css/kidlat.css'
    ]
  }  
Vue.use(VueHtmlToPaper, options)

export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  data () {
    return {
      fields: FieldsDef_report,
      sortOrder: [
        {
          field: 'id',
          sortField: 'id',
          direction: 'asc'
        }
      ],
      moreParams: {},
      id: '2',
      apiURL: '',
      data:[],
      dt: '#'
    }
  },
  created(){
      this.apiURL = apiDomain + 'api/getReport/' + this.id
      //console.log(apiDomain)
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
      //console.log('slot action: ' + action, data.name, index)
      if(action == 'view-item'){
         var self = this
         // //console.log(data.department)
         this.$http.get( apiDomain+ 'api/getReportData/' + data.id ).then((response)=>{
             //console.log(response.data)
             self.dt = response.data
             //console.log(self.dt)
             window.open(self.dt)
         })
      } 
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