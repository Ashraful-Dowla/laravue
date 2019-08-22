<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 50px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-10">
					<h3>Prescription</h3>
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<h4>Patient ID</h4>
					<input type="text" class="form-control" placeholder="PT-XXXXXXXXX"><br>
				</div>
				<div class="col-md-5">
					<h4>Testes</h4>
					<select class="form-control">
						<option>X-RAY</option>
						<option>ECG</option>
						<option>OMR</option>
						<option>ALTASONOGRAPH</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<ckeditor :config="editorConfig" type="classic" v-model="editorText">CKEDITOR</ckeditor><br>
					<button class="btn btn-secondary" style="float: right;">Prescribe</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				editorText: ''
			}
		}
	}
</script>