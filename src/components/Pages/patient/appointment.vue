<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="page-title">Book Appointment</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <hr>
                </div>
            </div>
            <div class="container-fluid" align="left">
                <div class="row ">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="body">
                                <form>
                                    <div class="row clearfix">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <p> <b>Department</b> </p>
                                                    <select class="form-control show-tick waves-effect">
                                                        <option>Cardiologist</option>
                                                        <option>Dermatologist</option>
                                                        <option>Surgeon</option>
                                                        <option>Medicine</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <p> <b>Select Doctor</b> </p>
                                                    <select class="form-control show-tick waves-effect">
                                                        <option>Dr.Kaushik Deb</option>
                                                        <option>Prof. Dr. Tafiquee Sayed</option>
                                                        <option>Dr. Syed Md Minhaz Hossain</option>
                                                        <option>Dr.Anik Sen</option>
                                                    </select>                                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <p><b>Select Date</b></p>
                                                        <date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Date: To"></date-picker>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <p> <b>Time</b> </p>
                                                        <select class="form-control show-tick waves-effect">
                                                         <option>6 pm</option>
                                                         <option>10 am</option>
                                                     </select>
                                                 </div>
                                             </div>
                                         </div>
                                         <br/><br/>
                                     </div>
                                     <div class="row">
                                        <div class="col-md-2">
                                            <button  type="button" class="btn btn-raised btn-primary m-t-15 waves-effect fa fa-send-o" @click="showModal">Submit</button>
                                        </div>
                                        <div class="col-md-2">
                                            <button type="button" class="btn btn-raised btn-danger m-t-15 waves-effect fa fa-money" @click="showModalMyWallet">Wallet Pay</button>
                                        </div>
                                     </div>
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
 import Datepicker from 'vuejs-datepicker';
 
 // ES6 Modules or TypeScript
 import Swal from 'sweetalert2'

 export default {
    components: {
        'date-picker': Datepicker
    },
    methods:{
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
                  'Ok!',
                  'Appointment Submitted Successfully',
                  'success'
                )
              }
            })
        },
        showModalMyWallet(){
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
                  'Successfully Paid from My Wallet',
                  'success'
                )
              }
            })
        }
    }
}
</script>  