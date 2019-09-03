<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
            <h2>Payment Section</h2>
            <div class="col-lg-12 col-md-12 col-sm-12">
                <button  type="button" @click="chk(1)" class="btn btn-raised btn-info m-t-15 waves-effect">My Wallet</button>
                <button  type="button" @click="chk(2)" class="btn btn-raised btn-success m-t-15 waves-effect">Card Payment</button>
                <button  type="button" @click="chk(3)" class="btn btn-raised btn-danger m-t-15 waves-effect">Cash Payment</button>
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
                            <button type="button" class="btn btn-raised btn-info m-t-15 waves-effect">My Wallet</button>
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
                            <button type="button" class="btn btn-raised btn-success m-t-15 waves-effect">Card Payment</button>
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
                            <button type="button" class="btn btn-raised btn-danger m-t-15 waves-effect">Cash Payment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default{
    name: 'proceed_to_payment',
    data(){
        return {
            mark: 1
        }
    },
    methods: {
        chk(val){
           this.mark = val
           //console.log(this.mark)
        }
    }
}
</script>