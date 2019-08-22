<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 50px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-5">
					<form>
						<div class="form-group">
						    <h3>Department</h3>
						    <select class="form-control">
						    	<option>Cardiology</option>
						    	<option>Neurology</option>
						    	<option>Pathodology</option>
						    	<option>Sergiology</option>
						    	<option>Somthinglogy</option>
						    </select><br>
						    <button style="float: right;" type="button" class="btn btn-secondary btn-sm">View Doctors</button>
			   		    </div>
			   		</form>
				</div>
			</div><br>
			<div class="row">
				<div class="col-md-10 border">
					<hr>
					<h3 style="text-align: center;">Doctors</h3>
					<hr>
					<table class="table table-striped table-bordered">
						<thead>
							<tr>
								<th scope="col">Department</th>
								<th scope="col">Doctor Name</th>
								<th scope="col">Speciality</th>
								<th scope="col">Mobile</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Cardiology</td>
								<td>Jhon Due</td>
								<td>Cardiologist</td>
								<td>987-897-589</td>
							</tr>
							<tr>
								<td>Cardiology</td>
								<td>Jhon Due</td>
								<td>Cardiologist</td>
								<td>987-897-589</td>
							</tr>
							<tr>
								<td>Cardiology</td>
								<td>Jhon Due</td>
								<td>Cardiologist</td>
								<td>987-897-589</td>
							</tr>
							<tr>
								<td>Cardiology</td>
								<td>Jhon Due</td>
								<td>Cardiologist</td>
								<td>987-897-589</td>
							</tr>
							<tr>
								<td>Cardiology</td>
								<td>Jhon Due</td>
								<td>Cardiologist</td>
								<td>987-897-589</td>
							</tr>
							<tr>
								<td>Cardiology</td>
								<td>Jhon Due</td>
								<td>Cardiologist</td>
								<td>987-897-589</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	.border{
		border: 1px solid black;
		border-radius: 3px;
	}
</style>