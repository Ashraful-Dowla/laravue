<template>
<div class="page-wrapper">
    <div class="content">
	<div class="container-fluid" align="left">
		 <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                    <div class="header">
						<h2>Emergency Stop</h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="">Action</a></li>
                                    <li><a href="">Another action</a></li>
                                    <li><a href="">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <div class="row clearfix">
                            <div class="col-lg-3 col-md-6">
                                <p> <b>Specialist</b> </p>
                                <select class="form-control show-tick">
                                    <option>Cardiologist</option>
                                    <option>Dermatologist</option>
                                    <option>Surgeon</option>
                                    <option>Medicine</option>
                                </select>
                            </div>
                        </div>
                        <br/><br/>
                        <div class="row clearfix">
                            <div class="col-lg-3 col-md-6">
                                <p> <b>Doctor Select</b> </p>
                                <select class="form-control show-tick">
                                    <option>Dr.Kaushik Deb</option>
                                    <option>Prof. Dr. Tafiquee Sayed</option>
                                    <option>Dr. Syed Md Minhaz Hossain</option>
                                    <option>Dr.Anik Sen</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" class="btn btn-raised btn-danger m-t-15 waves-effect">Emergency Request</button>
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

	}
</script>