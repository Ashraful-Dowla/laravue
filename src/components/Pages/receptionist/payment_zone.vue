<template>
    <div class="page-wrapper">
        <div class="content">
        <div class="container-fluid" align="left">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <loading :active.sync="isLoading" 
                    :can-cancel="true" 
                    :is-full-page="fullPage">
                </loading>
                <h2>Payment Zone</h2>
                <form>
                    <label for="patient_id">Bill ID</label>
                    <div class="form-group" :class="{error: validation.hasError('bill_id')}">
                        <div class="form-line">
                            <input type="text" id="bill_id" v-model="bill_id" class="form-control" placeholder="Enter the Bill ID" :readonly="show">
                        </div>
                        <div class="message" style="color: red;">{{ validation.firstError('bill_id') }}</div>
                    </div>
                    <button v-if="!show" type="button" @click="hide()" class="btn btn-raised btn-info m-t-15 waves-effect" style="float: right;">Payable</button>
                    <button v-if="show" type="button" @click="hide()" class="btn btn-raised btn-danger m-t-15 waves-effect" style="float: right;">Cancel</button>
                </form>
                <br><br><br><br>
                <div v-if="show">
                <v-select v-model="selected" :options="options" :reduce="mark=>mark.mark" label="name" @input="chk"></v-select>
                <br><br><br>
                <div class="card" v-if="mark==1">
                    <h2> My Wallet </h2>
                    <div class="body">
                        <form>
                            <label for="net_payable">Net Payable</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="net_payable" class="form-control" v-model="net_payable" readonly>
                                </div>
                            </div>
                            <label for="paid">Paid</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="paid" class="form-control" v-model="paid">
                                </div>
                            </div>
                            <button type="button" class="btn btn-raised btn-info m-t-15 waves-effect" @click="showModal">My Wallet</button>
                        </form>
                    </div>
                </div>
                <div class="card" v-if="mark==2">
                    <h2> Card Payment </h2>
                    <div class="body">
                        <form>
                            <label for="net_payable">Net Payable</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="net_payable" class="form-control" v-model="net_payable" readonly>
                                </div>
                            </div>
                            <label for="card_number">Card Number</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="card_number" class="form-control" v-model="card_number">
                                </div>
                            </div>
                            <label for="paid">Paid</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="paid" class="form-control" v-model="paid">
                                </div>
                            </div>
                            <button type="button" class="btn btn-raised btn-success m-t-15 waves-effect" @click="showModal">Card Payment</button>
                        </form>
                    </div>
                </div>
                <div class="card" v-if="mark==3">
                    <h2> Cash Payment </h2>
                    <div class="body">
                        <form>
                            <label for="net_payable">Net Payable</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="net_payable" class="form-control" v-model="net_payable" readonly>
                                </div>
                            </div>
                            <label for="paid">Paid</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="paid" class="form-control" v-model="paid">
                                </div>
                            </div>
                            <button type="button" @click="showModal" class="btn btn-raised btn-danger m-t-15 waves-effect">Cash Payment</button>
                        </form>
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
import 'vue-select/dist/vue-select.css'

import { apiDomain } from '@/components/Pages/Authentication/config'

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator


export default{
    name: 'proceed_to_payment',
    data(){
        return {
            mark: '1',
            options: [
                { name: 'My Wallet', mark: 1 },
                { name: 'Card Payment', mark: 2 },
                { name: 'Cash Payment', mark: 3 }
            ],
            selected: '',
            bill_id: '',
            net_payable: '',
            paid: '',
            id: '2',
            card_number: '',
            show: false,
            suc: false,
            isLoading: false,
            fullPage: true
        }
    },
    methods: {
        hide(){
            var self = this
            this.$validate()
                .then((response)=>{
                    if(response){
                        self.show = !self.show
                        if(self.show){
                            self.$http.get(apiDomain + 'api/getProceedToPaymentData/' + self.bill_id)
                            .then((response)=>{
                                self.net_payable = response.data[0]["due"]

                            }).catch((e)=>{
                                console.log(e)
                            })
                        }
                    }
                })
        },
        chk(){
            this.mark = this.selected
        },
        showModal(){
            var self = this
           
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
                self.sendData()
                self.isLoading = true
              }
            })
        },
        sendData(){
            var self = this
            this.$http.post(apiDomain + 'api/paymentDataInsert',{
                mark: self.mark,
                bill_id: self.bill_id,
                paid: self.paid,
                id: self.id,
                card_number: self.card_number
            }).then((response)=>{
                console.log(response)
                self.successModal()
                self.$router.push('/receptionist/bill_issued')
                self.isLoading = false
            }).catch((e)=>{
                console.log(e)
                self.failedModal()
                self.isLoading = false
            })
        },
        successModal(){
          Swal.fire(
            'Paid!',
            'Successfully Paid!',
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
    },
    validators: {
        'bill_id' : function(value){
            return Validator.value(value).required();
        }
    }
}
</script>