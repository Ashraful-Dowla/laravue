<template>
    <div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
            <div class="row">
                <div class="col-md-5">
                    <p> <b>Specialist</b> </p>
                    <select class="form-control show-tick borderBottom">
                        <option>Cardiologist</option>
                        <option>Dermatologist</option>
                        <option>Surgeon</option>
                        <option>Medicine</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <p> <b>Doctor Select</b> </p>
                    <select class="form-control show-tick borderBottom">
                        <option>Dr.Kaushik Deb</option>
                        <option>Prof. Dr. Tafiquee Sayed</option>
                        <option>Dr. Syed Md Minhaz Hossain</option>
                        <option>Dr.Anik Sen</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="borderBottom">
                            <vue-auto-complete
                              source="https://api.github.com/search/repositories?q="
                              results-property="items"
                              results-display="full_name"
                            >
                            </vue-auto-complete>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <div class="m-t-20 text-center">
                        <button type="button" class="btn  btn-raised btn-success waves-effect">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Datepicker from 'vuejs-datepicker';
    import VueTimepicker from 'vue2-timepicker'
    import 'vue2-timepicker/dist/VueTimepicker.css'
    import Autocomplete from 'vuejs-auto-complete'
    export default {
        components: {
            'date-picker': Datepicker,
            'vue-timepicker': VueTimepicker,
            'vue-auto-complete': Autocomplete
        }
    }
</script>
<style scoped>
    .borderBottom{
        border-bottom: 2px solid #607D8B;
    }
</style>