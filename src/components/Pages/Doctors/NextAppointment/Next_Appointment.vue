<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 50px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-10">
					<h3>Next Appointment</h3>
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<h3>Enter Duration</h3>
					<input type="text" class="form-control" v-model="textBox" placeholder="Eneter Time Duration..."><br>
					<h4 class="dangerr">{{ spliting }}</h4>
				</div>
				<div class="col-md-4">
					<h3>Patient ID</h3>
					<select class="form-control">
						<option>PT-001</option>
						<option>PT-002</option>
						<option>PT-003</option>
						<option>PT-004</option>
						<option>PT-005</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div v-if="tableInfoDay" class="col-md-7">
					<table class="table table-striped table-dark">
						<thead style="color: white;">
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Time</th>
								<th class="text-right">Action</th>
							</tr>
						</thead>
						<tbody style="color: white;">
							<tr>
								<td>26-03-2020</td>
								<td>02:30pm</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to=""><span>Pick</span></router-link></a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>26-03-2020</td>
								<td>02:30pm</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to=""><span>Pick</span></router-link></a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>26-03-2020</td>
								<td>02:30pm</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to=""><span>Pick</span></router-link></a>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div v-if="tableInfoMonth" class="col-md-7">
					<table class="table table-striped table-dark">
						<thead style="color: white;">
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Time</th>
								<th class="text-right">Action</th>
							</tr>
						</thead>
						<tbody style="color: white;">
							<tr>
								<td>26-03-2020</td>
								<td>02:30pm</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to=""><span>Pick</span></router-link></a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>26-03-2020</td>
								<td>02:30pm</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to=""><span>Pick</span></router-link></a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>26-03-2020</td>
								<td>02:30pm</td>
								<td class="text-right">
									<div class="dropdown dropdown-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item fa fa-pencil m-r-5"><router-link to=""><span>Pick</span></router-link></a>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div v-if="tableInfoDay || tableInfoMonth" class="col-md-3 rightSideBar">
					<h3>Something Will Grow Here</h3>
				</div>
			</div><br>
			<div class="row">
				<div v-if="tableInfoDay || tableInfoMonth" class="col-md-10">
					<button class="btn btn-secondary" style="float: right">Submit</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				textBox: '',
				collections: '',
				day: false,
				month: false
			}
		},
		computed: {
			spliting: function () {
				this.collections = this.textBox.split(" ");
				if(this.collections.length > 2){
					return 'Not more than two words'
				}
				else if(!Number(this.collections[0]) && this.collections[0] != ""){
					return "Invalid formate. First Enter a Number then Day/Month"
				}
				/*if(this.collections[1] != 'Day' || this.collections[1] != 'Days' || this.collections[1] != 'day' || this.collections[1] != 'days' || this.collections[1] != 'Month' || this.collections[1] != 'Months' || this.collections[1] != 'month' || this.collections[1] != 'months'){
					return "Next words must be Day or Days/Month or Months"
				}*/
			},
			tableInfoDay: function () {
				if(this.collections[1] === 'Day' && this.collections.length < 3){
					return true				
				}
			},
			tableInfoMonth: function () {
				if(this.collections[1] === 'Month' && this.collections.length < 3){
					return true				
				}
			}
		}
	}
</script>
<style scoped>
	.back{
		background-color: #494A47;
		color: white;
	}
	.vertical{
		border-left: 1px solid black;
		height: 70px;
	}
	.dangerr{
		color:red;
	}
	.rightSideBar{
		border: 1px solid black;
		border-radius: 3px;
		min-height:250px;
		background-color: #E8EAED;
	}
</style>