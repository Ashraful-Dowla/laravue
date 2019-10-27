<template>
	<div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
           <span class="dash-widget-bg1"><i class="fa fa-stethoscope" aria-hidden="true"></i></span>
           <div class="dash-widget-info text-right">
             <h3>{{doctors}}</h3>
             <span class="widget-title1">Doctors <i class="fa fa-check" aria-hidden="true"></i></span>
           </div>
         </div>
       </div>
       <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
        <div class="dash-widget">
          <span class="dash-widget-bg2"><i class="fa fa-wheelchair"></i></span>
          <div class="dash-widget-info text-right">
            <h3>{{patient}}</h3>
            <span class="widget-title2">Patients <i class="fa fa-check" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
        <div class="dash-widget">
          <span class="dash-widget-bg3"><i class="fa fa-user-o" aria-hidden="true"></i></span>
          <div class="dash-widget-info text-right">
            <h3>{{receptionist}}</h3>
            <span class="widget-title3">Receptionist <i class="fa fa-check" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
        <div class="dash-widget">
          <span class="dash-widget-bg4"><i class="fa fa-calendar" aria-hidden="true"></i></span>
          <div class="dash-widget-info text-right">
            <h3>{{apt_no}}</h3>
            <span class="widget-title4">Appointments <i class="fa fa-check" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-8 col-xl-8">
        <div class="card">
          <div class="card-header" style="background-color: #76D7C4">
            <h4 class="card-title d-inline-block">Upcoming Appointments</h4> <a class="btn btn-primary float-right"><router-link to="/admin/appointments" style="color: white;">View all</router-link></a>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table mb-0">
                <tbody>
                  <tr v-for="app in appointments">
                    <td style="min-width: 200px;">
                      <!-- <a class="avatar" href="profile.html">B</a> -->
                      <h5 class="time-title p-0">Patinet Name</h5>
                      <h2><a href="">{{app.patient_name}}</a></h2>
                    </td>                 
                    <td>
                      <h5 class="time-title p-0">Appointment With</h5>
                      <p>{{app.doctor_name}}</p>
                    </td>
                    <td>
                      <h5 class="time-title p-0">Date</h5>
                      <p>{{app.appointment_date}}</p>
                    </td>
                    <td>
                      <h5 class="time-title p-0">Time</h5>
                      <p>{{app.time}}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-4">
        <div class="card member-panel">
          <div class="card-header" style="background-color: #76D7C4">
            <h4 class="card-title mb-0">Doctors</h4>
          </div>
          <div class="card-body">
            <ul class="contact-list">
              <li v-for="doc in doctor_list">
                <div class="contact-cont">
                  <div class="contact-info">
                    <span class="contact-name text-ellipsis">{{doc.first_name+' '+doc.last_name}}</span>
                    <span class="contact-date">Department: </span><span class="contact-date">{{doc.department}}</span><br>
                    <span class="contact-date">Phone: </span><span class="contact-date">{{doc.phone_number}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="card-footer text-center bg-white">
            <a class="text-muted"><router-link to="/admin/doctors">View all Doctors</router-link></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-8 col-xl-8">
        <div class="card">
          <div class="card-header" style="background-color: #76D7C4">
            <h4 class="card-title d-inline-block">New Patients </h4> <a class="btn btn-primary float-right"><router-link to="/admin/patients" style="color: white;">View all</router-link></a>
          </div>
          <div class="card-block">
            <div class="table-responsive">
              <table class="table mb-0 new-patient-table">
                <tbody>
                  <tr v-for="pat in new_patient">
                    <td>{{pat.first_name+' '+pat.last_name}}</td>
                    <td>{{pat.email}}</td>
                    <td>{{pat.phone_number}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-4">
        <div class="card-header" style="background-color: #76D7C4">
          <h4 class="card-title mb-0" style="text-align: center;">Hospital Management</h4>
        </div>
        <div class="bar-chart">
          <div class="legend">
            <div class="item">
              <h4>Level1</h4>
            </div>
            
            <div class="item">
              <h4>Level2</h4>
            </div>
            <div class="item text-right">
              <h4>Level3</h4>
            </div>
            <div class="item text-right">
              <h4>Level4</h4>
            </div>
          </div>
          <div class="chart clearfix">
            <div class="item">
              <div class="bar">
                <span class="percent">16%</span>
                <div class="item-progress" data-percent="16">
                  <span class="title">OPD Patient</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bar">
                <span class="percent">71%</span>
                <div class="item-progress" data-percent="71">
                  <span class="title">New Patient</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bar">
                <span class="percent">82%</span>
                <div class="item-progress" data-percent="82">
                  <span class="title">Laboratory Test</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bar">
                <span class="percent">67%</span>
                <div class="item-progress" data-percent="67">
                  <span class="title">Treatment</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bar">
                <span class="percent">30%</span>                  
                <div class="item-progress" data-percent="30">
                  <span class="title">Discharge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import { apiDomain } from '@/components/Pages/Authentication/config'
  import Swal from 'sweetalert2'
  export default{
    data(){
      return{
        doctors: '',
        patient: '',
        receptionist: '',
        appointments: [],
        doctor_list: [],
        new_patient: [],
        apt_no: ''
      }
    },
    created(){
      var self = this
      this.$http.get(apiDomain + 'api/getInfoForAdminDashboard')
        .then(response => {
          if(response.status === 200){
            console.log(response)
            self.doctors = response.body.dashBoardDocInfo
            self.patient = response.body.dashBoardPatInfo
            self.receptionist = response.body.dashBoardRecInfo
            self.appointments = response.body.dashBoardAppInfo.data
            self.doctor_list = response.body.dashBoardDoctorListInfo
            self.new_patient = response.body.new_patient.data
            self.apt_no = response.body.numberOfAppointment
          }
        }).catch((e) => {
          console.log(e)
        })
    }
  }
</script>