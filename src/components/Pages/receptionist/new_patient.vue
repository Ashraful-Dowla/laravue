<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="page-title">Admit New Patient</h4>
                </div>
                <div class="col-md-2 text-right m-b-30">
                    <router-link class="btn  btn-raised bg-grey waves-effect fa fa-chevron-circle-left" to="/admin/patients"><strong>BACK</strong></router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="form-group">
                        <div class="borderBottom">
                            <input type="text" class="form-control" placeholder="FIRST NAME" />
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-group">
                        <div class="borderBottom">
                            <input type="text" class="form-control" placeholder="LAST NAME" />
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-group">
                        <div class="borderBottom">
                            <input type="text" class="form-control" placeholder="USERNAME" />
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-group">
                        <div class="borderBottom">
                            <input type="email" class="form-control" placeholder="EMAIL" />
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-group">
                        <div class="borderBottom">
                            <input type="password" class="form-control" placeholder="PASSWORD" />
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-5">
                    <div class="form-group">
                        <div class="borderBottom">
                            <input type="password" class="form-control" placeholder="CONFIRM PASSWORD" />
                        </div>
                    </div>
                </div> -->
                <div class="col-md-5">
                    <div class="form-group">
                        <div class="borderBottom">
                            <date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Admission Date"></date-picker>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-5">
                    <p>Gender</p>
                    <div class="demo-radio-button form-group">
                        <input name="group1" type="radio" id="radio_6" class="with-gap" />
                        <label for="radio_6">Male</label>
                        <input name="group1" type="radio" id="radio_7" class="with-gap" />
                        <label for="radio_7">Female</label>
                    </div>
                </div>
                
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="form-group">
                                <div class="borderBottom">
                                    <input type="text" class="form-control" placeholder="ADDRESS" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                                <div class="form-group">
                                    <div class="borderBottom">
                                        <select class="form-control select">
                                            <option>Select Country</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="borderBottom">
                                        <select class="form-control select">
                                            <option>Select City</option>
                                            <option>abc</option>
                                            <option>efg</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="borderBottom">
                                        <select class="form-control select">
                                            <option>Select Sate</option>
                                            <option>ksdgjhsgd</option>
                                            <option>gjhgjadgjhgd</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="borderBottom">
                                        <input type="password" class="form-control" placeholder="POSTAL CODE" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="borderBottom">
                                        <input type="text" class="form-control" placeholder="PHONE NUMBER" />
                                    </div>
                                </div>
                            </div>
                        <div class="col-md-5">
                            <div class="form-group">
                                <div class="borderBottom">
                                    <input type="text" class="form-control" placeholder="NID NO" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                           <div class="form-group">
                                <label>UPLOAD NID CARD IMAGE</label>
                                <div class="profile-upload borderBottom">
                                    <div class="upload-input">
                                        <input type="file" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <p>Status</p>
                    <div class="demo-radio-button form-group">
                        <input name="group1" type="radio" id="radio_6" class="with-gap" />
                        <label for="radio_6">Active</label>
                        <input name="group1" type="radio" id="radio_7" class="with-gap" />
                        <label for="radio_7">Inactive</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <div class="m-t-20 text-center">
                        <button type="button" class="btn  btn-raised btn-success waves-effect">Admit Patient</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <hr>
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