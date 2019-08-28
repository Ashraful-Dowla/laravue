<template>
    <div class="page-wrapper">
        <div class="content">
            <div class="container-fluid" align="left">
                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="card">
                            <h2> Appointment </h2>
                            <div class="body">
                                <form>
                                    <div class="row clearfix">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <p> <b>Specialist</b> </p>
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
                                                <p> <b>Doctor Select</b> </p>
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
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-group">
                                                     <button  type="button" class="btn btn-raised btn-primary m-t-15 waves-effect fa fa-send-o">Submit</button>
                                                     <button type="button" class="btn btn-raised btn-danger m-t-15 waves-effect fa fa-money">Wallet Pay</button>
                                            </div>
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
    export default {
        components: {
            'date-picker': Datepicker
        }
    }
</script>  