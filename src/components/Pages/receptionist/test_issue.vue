<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
            <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
            <div class="container-fluid" align="left">
                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="card">
                            <h2> Test Issue</h2>
                            <div class="row">
                                <div class="col-md-10">
                                    <hr>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="body">
                                        <form>
                                            <p><b>Patient ID</b></p>
                                            <div class="form-group" :class="{error: validation.hasError('patient_id')}">
                                                <div>
                                                    <input type="text" id="patient_id" v-model="patient_id" class="form-control borderBottom" placeholder="Enter the Patient ID">
                                                </div>
                                                <div class="message" style="color: red;">{{ validation.firstError('patient_id') }}</div>
                                            </div>
                                        </form>
                                        <form>
                                            <p><b>Doctor ID</b></p>
                                            <div class="form-group" :class="{error: validation.hasError('doctor_id')}">
                                                <div>
                                                    <input type="text" id="doctor_id" v-model="doctor_id" class="form-control borderBottom" placeholder="Enter the Doctor ID">
                                                </div>
                                                <div class="message" style="color: red;">{{ validation.firstError('doctor_id') }}</div>
                                            </div>
                                        </form>
                                        <br><br><br>
                                        <h2 style="font-size: 24px;">Select Test</h2>
                                        <v-select v-model="selected" :options="options" :reduce="title=>title.title" label="title"  @input="addRow"></v-select>
                                        <br><br><br><br>
                                        <h2 style="text-align: center;" v-if="tableRows.length">TEST SELECTED</h2>
                                        <table class="table" v-if="tableRows.length">
                                          <thead>
                                            <tr>
                                              <th scope="col">Index</th>
                                              <th scope="col">Test Name</th>
                                              <th scope="col">Test Cost</th>
                                              <th scope="col">Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                        <tr v-for="(val,idx) in tableRows ">
                                            <td scope="row">{{ idx+1 }}</td>
                                            <td>{{ val.name }}</td>
                                            <td>{{ val.cost }}</td>
                                            <td><button type="button" @click="deleteRow(idx)" class="ui button red"><i class="ui trash icon"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td style="font-size: 16px;">Sub Total {{ sub_total }}</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td style="font-size: 16px;">Discount(%) <input type="text" name="discount" id="discount" v-model="discount" @keyup="dis"></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                         <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td style="font-size: 16px;">Net Payable {{ net_payable }}</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button type="button" v-if="tableRows.length" class="ui inverted blue button waves-effect" @click="proceedToPayment">Proceed to Payment</button>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    import vSelect from 'vue-select'

    import { apiDomain } from '@/components/Pages/Authentication/config'

    Vue.component('v-select', vSelect)
    import 'vue-select/dist/vue-select.css';
    
    // ES6 Modules or TypeScript
    import Swal from 'sweetalert2'

    import SimpleVueValidation from 'simple-vue-validator'
    const Validator = SimpleVueValidation.Validator

    export default{
        name:'test_issue',
        data(){
            return {
                selected: '',
                options:[
                    //{ test_name: 'ECG', test_cost: '1000'},
                ],
                tableRows: [],
                sub_total: 0,
                discount: 0,
                net_payable: 0,
                chkTest: [],
                patient_id: '',
                doctor_id: '',
                id: '2',
                suc: false,
                isLoading: false,
                fullPage: true
            };
        },
        created(){
            var self = this

            const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
            this.id = tokenData.id

            this.$http.get(apiDomain+'api/getTestData')
                .then((response)=>{
                    self.options = response.data
                    for(var i = 0 ; i < this.options.length ; i++){
                        self.chkTest.push(0)
                    }
                });
        },
        methods:{
            addRow(){
                for(var i=0; i<this.options.length;i++)
                {
                    if(this.options[i].title == this.selected && !this.chkTest[i])
                    {
                        this.tableRows.push({ name: this.options[i].title, cost: this.options[i].price, index: i  })
                        this.sub_total = parseInt(this.sub_total) + parseInt(this.options[i].price)
                        this.chkTest[i] = 1
                    }
                }
                this.calculate_net_payable()
            },
            deleteRow(idx){
                this.sub_total = parseInt(this.sub_total) - parseInt(this.options[parseInt(this.tableRows[idx].index)].price)
                this.chkTest[parseInt(this.tableRows[idx].index)] = 0
                this.tableRows.splice(idx,1)
                this.calculate_net_payable()
            },
            dis(){
                this.calculate_net_payable()  
            },
            calculate_net_payable(){
                this.net_payable = (100-parseFloat(this.discount))/100
                this.net_payable = parseFloat(this.net_payable)* parseFloat(this.sub_total)
            },
            proceedToPayment(){
                var self = this
                this.$validate()
                    .then((response)=>{
                        if(response){
                            self.sendData()
                            self.isLoading = true
                        }
                    })
            },
            sendData(){
                var self = this
                this.$http.post(apiDomain+'api/testIssuedData',{
                        options: self.tableRows,
                        patient_id: self.patient_id,
                        doctor_id: self.doctor_id,
                        created_by: self.id,
                        total : self.net_payable,
                        id: self.id,
                        sub_total : self.sub_total,
                        discount: self.discount
                    }).then((response)=>{
                        //console.log(response)
                        self.successModal()
                        self.isLoading = false
                        //self.$router.push({ path: '/receptionist/proceed_to_payment'})

                    }).catch((e)=>{
                        //console.log(e)
                        self.failedModal()
                        self.isLoading = false
                    })
            },
            errorCheck(){
                var self = this
                //console.log(this.suc)
                
            },
            successModal(){
                Swal.fire(
                    'Inserted!',
                    'Successfully Inserted!',
                    'success'
                )

                this.tableRows = []
                this.patient_id = ''
                this.doctor_id = ''
                this.selected = ''

            },
            failedModal(){
                Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Internal server error. Try again'
                })
            }
        },
        validators: {
            'patient_id' : function(value){
                return Validator.value(value).required();
            },
            'doctor_id' : function(value){
                return Validator.value(value).required();
            }
        }
    }
</script>
<style scoped>
    .borderBottom{
        border-bottom: 2px solid #0392CE;
    }
</style>
