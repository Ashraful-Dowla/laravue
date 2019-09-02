<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<h3>Refill Account</h3>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<div class="borderBottom">
							<input type="text" class="form-control" placeholder="Patient ID: PT-XXXXXXXX" />
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<div class="borderBottom">
							<input type="text" class="form-control" placeholder="Refill Amount" />
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="btn  btn-raised btn-success waves-effect">Deposite Credit</button>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>
<style scoped>
.borderBottom{
	border-bottom: 2px solid #607D8B;
}
</style>