<template>
    <div class="page-wrapper">
        <div class="content">
            <div class="container-fluid" align="left">
                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="card">
                            <h2> Cash Payment </h2>
                            <div class="body">
                                <form>
                                    <label for="patient_id">Patient ID</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="patient_id" class="form-control" placeholder="Enter the Patient ID">
                                        </div>
                                    </div>
                                    <button v-if="!show" type="button" @click="hide()" class="btn btn-raised btn-info m-t-15 waves-effect" style="float: right;">Payable</button>
                                    <button v-if="show" type="button" @click="hide()" class="btn btn-raised btn-danger m-t-15 waves-effect" style="float: right;">Cancel</button>
                                    <label v-if="show" for="due">Due</label>
                                    <div class="form-group" v-if="show">
                                        <div class="form-line">
                                            <input type="text" id="due" class="form-control" v-model="val"  readonly>
                                        </div>
                                    </div>
                                    <label v-if="show" for="due">Net Payable</label>
                                    <div class="form-group" v-if="show">
                                        <div class="form-line">
                                            <input type="text" id="due" class="form-control" v-model="net_payable">
                                        </div>
                                    </div>
                                    <button v-if="show" type="button" @click="showModal" class="btn btn-raised btn-primary m-t-15 waves-effect">Submit</button>
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
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
export default{
    name:'cash_payment',
    data(){
        return {
            show: false,
            val: '1000',
            net_payable: ''
        };
    },
    methods:{
        hide(){
            this.show= !this.show
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