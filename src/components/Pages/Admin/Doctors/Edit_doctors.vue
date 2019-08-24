<template>
	<div class="page-wrapper">
            <div class="content">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h4 class="page-title">Edit Doctor</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <form>
                            <div class="row">
                                <div class="col-sm-5">
                            		<div class="form-group">
                            			<div class="borderBottom">
                            				<input type="text" class="form-control" placeholder="FIRST NAME" />
                            			</div>
                            		</div>
                            	</div>
                                <div class="col-sm-5">
                            		<div class="form-group">
                            			<div class="borderBottom">
                            				<input type="text" class="form-control" placeholder="LAST NAME" />
                            			</div>
                            		</div>
                            	</div>
                                <div class="col-sm-5">
                            		<div class="form-group">
                            			<div class="borderBottom">
                            				<input type="text" class="form-control" placeholder="USERNAME" />
                            			</div>
                            		</div>
                            	</div>
                                <div class="col-sm-5">
                            		<div class="form-group">
                            			<div class="borderBottom">
                            				<input type="email" class="form-control" placeholder="EMAIL" />
                            			</div>
                            		</div>
                            	</div>
                                <div class="col-sm-5">
                            		<div class="form-group">
                            			<div class="borderBottom">
                            				<input type="password" class="form-control" placeholder="PASSWORD" />
                            			</div>
                            		</div>
                            	</div>
                                <div class="col-sm-5">
                            		<div class="form-group">
                            			<div class="borderBottom">
                            				<input type="password" class="form-control" placeholder="CONFIRM PASSWORD" />
                            			</div>
                            		</div>
                            	</div>
								<div class="col-sm-5">
                            		<div class="form-group">
                            			<div class="borderBottom">
                            				<date-picker :bootstrap-styling="true" placeholder="BIRTHDAY" class="datepicker form-control"></date-picker>
                            			</div>
                            		</div>
                            	</div>
                                <div class="col-md-6">
                            		<p>Select Gender</p>
                            		<div class="demo-radio-button form-group">
                            			<input name="group1" type="radio" id="radio_4" class="with-gap" />
                            			<label for="radio_4">MALE</label>
                            			<input name="group1" type="radio" id="radio_5" class="with-gap" />
                            			<label for="radio_5">FEMALE</label>
                            		</div>
                            	</div>
								<div class="col-sm-12">
									<div class="row">
										<div class="col-sm-12">
						                    <div class="form-group">
						                        <div class="borderBottom">
						                            <input type="text" class="form-control" placeholder="ADDRESS" />
						                        </div>
						                    </div>
						                </div>
										<div class="col-sm-6">
						                    <div class="form-group">
						                        <div class="borderBottom">
						                            <input type="text" class="form-control" placeholder="DISTRICT" />
						                        </div>
						                    </div>
						                </div>
										<div class="col-sm-6">
						                    <div class="form-group">
						                        <div class="borderBottom">
						                            <input type="text" class="form-control" placeholder="VILLAGE" />
						                        </div>
						                    </div>
						                </div>
										<div class="col-sm-6">
						                    <div class="form-group">
						                        <div class="borderBottom">
						                            <input type="text" class="form-control" placeholder="POSTAL CODE" />
						                        </div>
						                    </div>
						                </div>
										<div class="col-sm-6">
						                    <div class="form-group">
						                        <div class="borderBottom">
						                            <input type="text" class="form-control" placeholder="PHONE NUMBER" />
						                        </div>
						                    </div>
						                </div>
									</div>
								</div>
                                <div class="col-sm-6">
									<div class="form-group">
										<label>UPLOAD IMAGE</label>
										<div class="profile-upload borderBottom">
											<div class="upload-input">
												<input type="file" class="form-control">
											</div>
										</div>
									</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                            	<label>SHORT BIOGRAPHY</label>
	                            <textarea class="form-control borderBottom" rows="3" cols="30"></textarea>
                            </div>
                            <div class="col-md-6">
								<p>STATUS</p>
								<div class="demo-radio-button form-group">
									<input name="group1" type="radio" id="radio_6" class="with-gap" />
                    				<label for="radio_6">ACTIVE</label>
									<input name="group1" type="radio" id="radio_7" class="with-gap" />
                    				<label for="radio_7">INACTIVE</label>
								</div>
							</div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10">
                        <div class="m-t-20 text-center">
                            <button type="button" class="btn  btn-raised btn-success waves-effect">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
	import Datepicker from 'vuejs-datepicker';
	export default {
		components: {
			'date-picker': Datepicker
		}
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>