<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-sm-5">
                    <div class="form-group" :class="{error: validation.hasError('patient_id')}">
                    	<h3>Patient ID</h3>
                        <div class="borderBottom">
                            <input type="text" class="form-control" placeholder="Patient ID":readonly="show" v-model="patient_id">
                        </div>
                         <div class="message" style="color: red;">{{ validation.firstError('patient_id') }}</div>
                        <br>
						<button style="float: right;" type="button" class="ui button blue waves-effect" v-if="!show" @click="search"><strong>VIEW RECORD</strong></button>
						<button style="float: right;" type="button" class="ui button red waves-effect" v-if="show" @click="search"><strong>Cancel</strong></button>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="form-group">
                    	<h3>Record Type</h3>
                        <div class="borderBottom">
                            <select class="form-control" v-model="selected" :disabled="show">
                            	<option value="1">Prescription</option>
                            	<option value="2">Report</option>
                            </select>
                        </div><br>
                    </div>
                </div>
			</div><br>
			<div class="row" v-if="show">
				<div class="col-md-10 border">
					<div class="ui container">
				        <h3 style="text-align: center;">{{ view_title }}</h3>
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
				            <button v-if="selected==1" class="ui button positive"
				            @click="onAction('prescription', props.rowData, props.rowIndex)">
				            <i class="zoom icon"></i>
				            </button>
				            <button v-if="selected==2" class="ui button red"
				            @click="onAction('report', props.rowData, props.rowIndex)">
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
	import FilterBar from '@/components/Pages/Doctors/import_details/FilterBar'
	import { FieldsDef_see_patients_previous_records } from '@/components/Pages/Doctors/import_details/FieldsDef_see_patients_previous_records'

	import { apiDomain } from '@/components/Pages/Authentication/config'

    import Swal from 'sweetalert2'

	import SimpleVueValidation from 'simple-vue-validator'
  	const Validator = SimpleVueValidation.Validator

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
		      fields: FieldsDef_see_patients_previous_records,
		      sortOrder: [],
		      moreParams: {},
		      show: false,
		      selected: '1',
		      patient_id: '',
		      apiURL: '',
		      prescription: '',
		      view_title: ''
		    }
		  },
		  created(){
		  	  //this.apiURL = apiDomain + 'api/' + this.patient_id
		  },
		  mounted () {
		    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
		    this.$events.$on('filter-reset', e => this.onFilterReset())
		  },
		  methods: {
		  	search(){
		  		var self = this
		  		this.$validate()
		  			.then((response)=>{
		  				if(response){
		  					self.searchFunction()
		  					self.show = !self.show
		  				}
		  			})
		  	},
		  	searchFunction(){
		  		this.apiURL = apiDomain + 'api/previousRecords/' + this.patient_id + '/' + this.selected
		  		//Vue.nextTick( () => this.$refs.vuetable.refresh() )
		  		//console.log(this.apiURL)
		  		if(this.selected == 1){
		  			this.view_title = 'View Prescription Records'
		  		}else{
		  			this.view_title = 'View Report Records'
		  		}
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

		      if(action == 'prescription'){
		          this.prescription = data.prescription
		          //console.log(data.prescription)
		      	  window.setTimeout(()=> this.$htmlToPaper('printMe'),3000)
      		  }else {
      		  	 //console.log(data)
      		  	  this.$http.get( apiDomain + 'api/docPatientReportData/' + data.id ).then((response)=>{
      		  	  		console.log(response)
      		  	  		window.open(response.data)
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
		  validators: {
		  	 'patient_id': function(value){
		  	 	 return Validator.value(value).required()
		  	 }
		  }
		 
    }
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>