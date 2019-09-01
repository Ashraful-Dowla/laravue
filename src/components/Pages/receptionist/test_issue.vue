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
                                                <button type="button" @click="addRow()" class="btn btn-raised btn-success m-t-15 waves-effect" style="float: right;">Add Test</button>
                                            </div>
                                        </form>
                                        <br><br><br>
                                        <h2 style="font-size: 24px;">Select Test</h2>
                                        <v-select v-model="selected" :options="options" :reduce="test_name=>test_name.test_name" label="test_name"></v-select>
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
                                    </tbody>
                                </table>
                                <button type="button" @click="" class="btn btn-raised btn-primary m-t-15 waves-effect" v-if="tableRows.length">Submit</button>
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
                tableRows: []
            };
        },
        methods:{
            addRow(){
                for(var i=0; i<this.options.length;i++)
                {
                    if(this.options[i].test_name == this.selected)
                    {
                        this.tableRows.push({ name: this.options[i].test_name, cost: this.options[i].test_cost  })
                    }
                }
            },
            deleteRow(idx){
                this.tableRows.splice(idx,1)
            }
        }
    }
</script>
<style scoped>
    .borderBottom{
        border-bottom: 2px solid #607D8B;
    }
</style>
