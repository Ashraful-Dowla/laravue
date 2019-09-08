<template>
    <div class="page-wrapper">
        <div class="content">
        <div class="container-fluid" align="left">
                <router-link class="btn btn-raised btn-info m-t-15 waves-effect" to="/receptionist/test_issue" tag="button" style="float: right;">Back</router-link>
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h2>Payment Section</h2>
                <v-select v-model="selected" :options="options" :reduce="mark=>mark.mark" label="name" @input="chk"></v-select>
                <br><br><br>
                <div class="card" v-if="mark==1">
                    <h2> My Wallet </h2>
                    <div class="body">
                        <form>
                            <label for="net_payable">Net Payable</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="net_payable" class="form-control" v-model="net_payable">
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
                                    <input type="text" id="net_payable" class="form-control" v-model="net_payable">
                                </div>
                            </div>
                            <label for="card_number">Card Number</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="card_number" class="form-control" v-model="card_number">
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
                                    <input type="text" id="net_payable" class="form-control" v-model="net_payable">
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
</template>

<script type="text/javascript">
import Vue from 'vue'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css'

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

export default{
    name: 'proceed_to_payment',
    data(){
        return {
            mark: 1,
            options: [
                { name: 'My Wallet', mark: 1 },
                { name: 'Card Payment', mark: 2 },
                { name: 'Cash Payment', mark: 3 }
            ],
            selected: ''
        }
    },
    methods: {
        chk(){
            this.mark = this.selected
        },
        showModal(){
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
                Swal.fire(
                  'Paid!',
                  'Successfully Paid!',
                  'success'
                )
              }
            })
        }
    }
}
</script>