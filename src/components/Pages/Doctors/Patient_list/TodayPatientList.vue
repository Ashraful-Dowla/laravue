<template>
	<div class="page-wrapper">
		<div class="content" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-10">
					<h3 class="page-title">Today's Patients</h3>
					<hr>
				</div>
				<!--<div class="col-sm-8 col-9 text-right m-b-20">
					<a class="btn btn-primary float-right btn-rounded fa fa-plus"><router-link to="/admin/employees/add_employees" style="color:white;">Add Employee</router-link></a>
				</div>-->
			</div>
			<div class="row">
				<div class="col-md-10">
					<table class="table table-striped table-dark">
						<thead style="color: white;">
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Patient ID</th>
								<th scope="col">Mobile</th>
								<th class="text-right">Action</th>
							</tr>
						</thead>
						<tbody style="color: white;">
							<tr>
								<td>Albina Simonis</td>
								<td>PT-0001</td>
								<td>828-634-2744</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to="/admin/employees/edit_employees"><span>Edit</span></router-link></a>
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Albina Simonis</td>
								<td>PT-0001</td>
								<td>828-634-2744</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to="/admin/employees/edit_employees"><span>Edit</span></router-link></a>
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Albina Simonis</td>
								<td>PT-0001</td>
								<td>828-634-2744</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to="/admin/employees/edit_employees"><span>Edit</span></router-link></a>
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Albina Simonis</td>
								<td>PT-0001</td>
								<td>828-634-2744</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to="/admin/employees/edit_employees"><span>Edit</span></router-link></a>
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Albina Simonis</td>
								<td>PT-0001</td>
								<td>828-634-2744</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to="/admin/employees/edit_employees"><span>Edit</span></router-link></a>
											<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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