<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="page-title">Previous Appointment</h4>
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
                        <filter-bar></filter-bar>
                        <vuetable ref="vuetable"
                          :api-url="apiURL"
                          :fields="fields"
                          pagination-path=""
                          :per-page="5"
                          :multi-sort="true"
                          @vuetable:pagination-data="onPaginationData"
                        >
                          <template slot="actions" slot-scope="props">
                            <div class="custom-actions">
                              <button class="ui orange button"
                                @click="onAction('view-item', props.rowData, props.rowIndex)">
                                <i class="eye icon"></i>
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
import FilterBar from '@/components/Pages/patient/import_details/FilterBar'
import { FieldsDef_previous_appointment } from '@/components/Pages/patient/import_details/FieldsDef_previous_appointment'
import { apiDomain } from '@/components/Pages/Authentication/config';

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
      data: [],
      fields: FieldsDef_previous_appointment,
      sortOrder: [],
      moreParams: {},
      apiURL: ''
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
  },
  created () {
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    this.apiURL = apiDomain + 'api/patient_previous_appointments/' + tokenData.patient_id
    console.log(this.apiURL)
  }
}
</script>