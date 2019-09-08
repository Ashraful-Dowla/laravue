<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
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
                                            <div class="form-group">
                                                <div>
                                                    <input type="text" id="patient_id" class="form-control borderBottom" placeholder="Enter the Patient ID">
                                                </div>
                                            </div>
                                        </form>
                                        <br><br><br>
                                        <h2 style="font-size: 24px;">Select Test</h2>
                                        <v-select v-model="selected" :options="options" :reduce="test_name=>test_name.test_name" label="test_name"  @input="addRow"></v-select>
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
                                            <td><button type="button" @click="deleteRow(idx)" class="ui button red"><i class="delete icon"></i></button></td>
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
                                <router-link class="btn btn-raised btn-primary m-t-15 waves-effect" to="" tag="button" v-if="tableRows.length" @click.native="proceedToPayment"> Proceed to Payment</router-link>
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

    Vue.component('v-select', vSelect)
    import 'vue-select/dist/vue-select.css';
    
    // ES6 Modules or TypeScript
    import Swal from 'sweetalert2'

    export default{
        name:'test_issue',
        data(){
            return {
                selected: '',
                options:[
                    { test_name: 'ECG', test_cost: '1000'},
                    { test_name: 'CBC', test_cost: '500'},
                    { test_name: 'Lipid Profile Serum', test_cost: '1150'},
                    { test_name: 'CT-SCAN OF BRAIN', test_cost: '4000'},
                    { test_name: 'CT-Scan Contrast', test_cost: '1300'}
                ],
                tableRows: [],
                sub_total: 0,
                discount: 0,
                net_payable: 0
            };
        },
        methods:{
            addRow(){
                for(var i=0; i<this.options.length;i++)
                {
                    if(this.options[i].test_name == this.selected)
                    {
                        this.tableRows.push({ name: this.options[i].test_name, cost: this.options[i].test_cost, index: i  })
                        this.sub_total = parseInt(this.sub_total) + parseInt(this.options[i].test_cost)
                    }
                }
                this.calculate_net_payable()
            },
            deleteRow(idx){
                //console.log(this.tableRows)
                this.sub_total = parseInt(this.sub_total) - parseInt(this.options[parseInt(this.tableRows[idx].index)].test_cost)
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
                Swal.fire({
                      title: 'Are you sure?',
                      text: "You won't be able to revert this!",
                      type: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Are you sure?'
                    }).then((result) => {
                      if (!result.value) {
                          this.$router.push({path: '/receptionist/test_issue'})
                      }else {
                          this.$router.push({ path: '/receptionist/proceed_to_payment'})
                      }
                })
            }
        }
    }
</script>
<style scoped>
    .borderBottom{
        border-bottom: 2px solid #607D8B;
    }
</style>
