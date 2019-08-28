<template>
    <div class="page-wrapper">
        <div class="content">
        	<div class="container-fluid" align="left">
        		 <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="card">
                            <h2> New Patient </h2>
                            <div class="body">
                                <form>
                                    <label for="patient_name">Patient Name</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="patient_name" class="form-control" placeholder="Enter the Patient Name">
                                        </div>
                                    </div>
                                    <label for="email_address">Email Address</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="email_address" class="form-control" placeholder="Enter your email address">
                                        </div>
                                    </div>
                                    <br>
                                    <button type="button" class="btn btn-raised btn-warning m-t-15 waves-effect">Admit</button>
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
	export default{
		name:'form_page'
	}
</script>