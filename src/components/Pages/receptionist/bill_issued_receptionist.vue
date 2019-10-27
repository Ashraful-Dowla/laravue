<template>
<div class="page-wrapper">
    <div class="content">
  <div class="ui container">
    <h1>Bill Issued</h1>
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
           <button class="ui button green"
            @click="onAction('pay-item', props.rowData, props.rowIndex)">
            <i class="payment icon"></i>
          </button>
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
import { FieldsDef_bill_issued } from '@/components/Pages/receptionist/import_details/FieldsDef_bill_issued'
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
      fields: FieldsDef_bill_issued,
      sortOrder: [
        {
          field: 'id',
          sortField: 'id',
          direction: 'asc'
        }
      ],
      moreParams: {},
      apiUrl: '',
      id: '2',
      data: []
    }
  },
  created(){
     this.apiUrl = apiDomain + 'api/getBillIssuedData/' + this.id
     console.log(this.apiUrl) 
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
        var self = this
        if(action == 'edit-item'){
           this.$router.push('/receptionist/update_test_issue/'+data.id)
        }else if(action == 'delete-item'){
            //console.log(data.id)
            Swal.fire({
                          title: 'Are you sure?',
                          text: "You won't be able to revert this!",
                          type: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Are you sure?'
                        }).then((result) => {
                          if (result.value) {
                              self.deleteData(data.id)
                          }
                    }) 
        }else if(action == 'pay-item'){
            this.$router.push('/receptionist/proceed_to_payment/' + data.id)
        }
    },
    deleteData(idx){
        var self = this
       this.$http.post( apiDomain + 'api/deleteBillIssuedData',{
          id: idx
       }).then((response)=>{
            console.log(response)
            Vue.nextTick( () => this.$refs.vuetable.refresh() )
            self.successModal()
       }).catch((e)=>{
            console.log(e)
            self.failedModal()
       })
    },
    successModal(){
      Swal.fire(
        'Deleted!',
        'Successfully Deleted!',
        'success'
        )
    },
    failedModal(){
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
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