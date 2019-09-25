<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<h1>Patient Dashboard Will Grow Here</h1>
			<h4>{{email}}</h4>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				email: ''
			}
		},
		created () {
			const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
			this.email = tokenData.patient_id
		}
	}
</script>