<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<h1>Summary</h1>
				<div class="col-sm-8 col-9 text-right m-b-20">
					<button class="btn  btn-raised bg-blue-grey waves-effect fa fa-plus"><strong>Send Refill Request</strong></button>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10" style="border: 1px solid gray; border-radius: 3px;">
					<label class="label_head">Current Blanece:   </label>  <label class="label_value">10,000</label><br>
					<label class="label_head">Previous Blanece:  </label>  <label class="label_value">15,000</label><br>
					<label class="label_head">Last Refilled:     </label>  <label class="label_value">12/07/2019</label><br>
					<label class="label_head">Last Outlay:   	 </label>  <label class="label_value">5,000</label><br>
					<label class="label_head">Leftover:   		 </label>  <label class="label_value">0</label><br>
				</div>
			</div><br>
		</div>
	</div>
</template>
<style scoped>
	.label_head{
		color: green;
		font-size: 17px;
		line-height: 5px;
		padding: 5px;
		font-weight: bold;
	}
	.label_value{
		color: gray;
		font-weight: bold;
	}
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>