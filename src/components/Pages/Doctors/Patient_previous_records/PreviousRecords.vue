<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 50px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-5">
					<form>
						<div class="form-group">
						    <h3>Patient ID</h3>
						    <input type="text" class="form-control" placeholder="PT-XXXXXXXXX"><br>
						    <button style="float: right;" type="button" class="btn btn-secondary btn-sm">View Record</button>
			   		    </div>
			   		</form>
				</div>
			</div><br>
			<div class="row">
				<div class="col-md-10 border">
					<br>
					<h3 style="text-align: center;">Patient Previous Record</h3>
					<br>
					<table class="table table-striped table-bordered">
						<tbody>
							<tr>
								<td>Albina Simonis</td>
								<td>PT-0001</td>
								<td>14-10-2018</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to="/admin/employees/edit_employees"><span>Edit</span></router-link></a>
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i class="fad fa-eye"></i>View</a>
										</div>
									</div>
								</td>
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