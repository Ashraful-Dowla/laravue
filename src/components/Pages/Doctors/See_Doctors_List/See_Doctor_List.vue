<template>
	<div class="page-wrapper">
		<div class="container body" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-10">
					<h3>See All Department's Doctors</h3>
					<hr>
				</div>
			</div>
			<div class="row clearfix">
                <div class="col-sm-5">
					<div class="form-group">
	                    <p><b>Select Department</b></p>
	                    <div class="borderBottom">
		                    <select class="form-control show-tick">
		                        <option>Sergiology</option>
		                        <option>Nurology</option>
		                        <option>Cardiology</option>
		                        <option>Pathodology</option>
		                    </select>
		                </div>
	                </div>
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
<style scoped>
	.border{
		border: 1px solid black;
		border-radius: 3px;
	}
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>