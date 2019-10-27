<template>
  <div class="page-wrapper">
    <div class="container" style="margin-top: 25px;margin-left: 50px;">
        <div class="row">
            <div class="col-md-10">
                <h4 class="page-title">Today's Patients</h4>
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
        <div class="card">
            <div class="header">
                <modal v-model="showModal">
                    <p slot="header">Patient Short Info</p>
                    <div slot="content">
                        <div class="form-group">
                            <label><b>Patient Name:</b> {{patient_info.first_name+' '+patient_info.last_name}}</label><br>
                            <label><b>Address:</b> {{patient_info.address}}</label><br>
                            <label><b>Gender:</b> {{patient_info.gender}}</label><br>
                            <label><b>Age:</b> {{calculate_age(patient_info.birthday)}}</label><br>
                            <label><b>Phone Number:</b> {{patient_info.phone_number}}</label><br>
                        </div>
                    </div>
                    <template slot="actions">
                        <div class="ui button red" @click="showModal=false">
                            Cancel
                        </div>
                    </template>
                </modal>
            </div>
        </div>
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
import { FieldsDef_today_patient_list } from '@/components/Pages/Doctors/import_details/FieldsDef_today_patient_list'
import { apiDomain } from '@/components/Pages/Authentication/config'
import Swal from 'sweetalert2'
import modal from 'vue-semantic-modal'

Vue.use(VueEvents)
Vue.component('filter-bar', FilterBar)

export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    modal
  },
  data () {
    return {
      fields: FieldsDef_today_patient_list,
      sortOrder: [],
      moreParams: {},
      doctor_id: '',
      showModal: false,
      apiURL: '',
      patient_info: []
    }
  },
  mounted () {
    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
    this.$events.$on('filter-reset', e => this.onFilterReset())
  },
  methods: {
    calculate_age(BD){
        var today = new Date();
        var birthDate = new Date(BD);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age
    },
    statusCall(value){
      return value === 'online'
                    ? '<span class="ui green label">Active</span>'
                    : '<span class="ui red label">Inactive</span>'
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onAction (action, data, index) {
        var self = this
        if(action === 'view-item'){
            this.showModal = true
            this.$http.post(apiDomain + 'api/getSinglePatientInfo',{patient_id: data.patient_id})
                .then(response => {
                    if(response.status === 200){
                        console.log(response)
                        self.patient_info = response.body.patient_info[0]
                    }
                }).catch((e) => {
                    console.log(e)
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
  },
  created(){
    var self = this
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    this.doctor_id = tokenData.id
    this.apiURL = apiDomain + 'api/getTodayPatientList/' + tokenData.id
    this.$http.get(self.apiURL)
      .then(response => {
        console.log(response)
      })
  }
}
</script>