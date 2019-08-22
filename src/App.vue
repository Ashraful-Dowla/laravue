<template>
  <div class="container">
  	<div class="row">
  		<div class="col-md-10">
  			<button class="btn btn-default" @click="goToNext">NEXT PAGE</button>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
    methods: {
    	goToNext () {
    		window.location.href = 'doctor';
    	}
    }
  }
</script>

<style>

</style>
