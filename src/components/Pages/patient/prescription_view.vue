<template>
 <div class="page-wrapper">
    <div class="content">
  <div class="ui container">
    <h1>Prescription View</h1>
   <!--  <filter-bar></filter-bar> -->
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
    <div style="display: none;"> 
      <div v-html="prescription" id="printMe"></div>
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
import { FieldsDef_prescription } from '@/components/Pages/patient/import_details/FieldsDef_prescription'
import { apiDomain } from '@/components/Pages/Authentication/config';

import VueHtmlToPaper from 'vue-html-to-paper';
 
const optionss = {
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
 
Vue.use(VueHtmlToPaper, optionss);


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
      fields: FieldsDef_prescription,
      sortOrder: [],
      moreParams: {},
      apiURL: '',
      data: [],
      id: '',
      prescription: ''
    }
  },
  created () {
      var self = this
      const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
      this.id = tokenData.id

      this.apiURL = apiDomain + 'api/prescription_view/'+ this.id
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
          this.prescription = data.prescription
          //console.log(data.prescription)
          window.setTimeout(()=> this.$htmlToPaper('printMe'),3000)
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
  },
}
</script>