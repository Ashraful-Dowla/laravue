<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-10">
					<h3>Prescription</h3>
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-5">
                    <div class="form-group">
                    	<p><b>Patient ID</b></p>
                        <div class="borderBottom">
                            <input type="text" class="form-control" placeholder="PT-XXXXXXXX" />
                        </div>
                    </div>
                </div>
				<div class="col-sm-5">
					<div class="form-group">
	                    <p><b>Testes</b></p>
	                    <div class="borderBottom">
		                    <select class="form-control show-tick">
		                        <option>X-RAY</option>
								<option>ECG</option>
								<option>OMR</option>
								<option>ALTASONOGRAPH</option>
		                    </select>
		                </div>
	                </div>
            	</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<ckeditor type="classic" v-model="editorText">CKEDITOR</ckeditor><br>
					<button style="float: right;" type="button" class="btn  btn-raised bg-blue-grey waves-effect"><strong>PRESCRIVE</strong></button>
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
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>