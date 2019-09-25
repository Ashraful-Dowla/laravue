import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import App from '@/App'

/*===============Admin===============*/
import Sidebar from '@/Sidebar'
import Dashboard from '@/components/Pages/Admin/Dashboard'
import Doctors from '@/components/Pages/Admin/Doctors/Doctors'
import AddDoctor from '@/components/Pages/Admin/Doctors/Add_doctors'
import EditDoctor from '@/components/Pages/Admin/Doctors/Edit_doctors'
import Schedule from '@/components/Pages/Admin/Doctors/Schedule'
import AddSchedule from '@/components/Pages/Admin/Doctors/Add_schedule'
import EditSchedule from '@/components/Pages/Admin/Doctors/Edit_schedule'
import DoctorProfile from '@/components/Pages/Admin/Doctors/Profile'
import EditProfile from '@/components/Pages/Admin/Doctors/Edit_profile'
import Patients from '@/components/Pages/Admin/Patients/Patients'
import AddPatients from '@/components/Pages/Admin/Patients/Add_patients'
import EditPatients from '@/components/Pages/Admin/Patients/Edit_patients'
import Appointments from '@/components/Pages/Admin/Appointments/Appointments'
import AddAppointments from '@/components/Pages/Admin/Appointments/Add_appointment'
import EditAppointments from '@/components/Pages/Admin/Appointments/Edit_appointments'
import Departments from '@/components/Pages/Admin/Departments/Departments'
import AddDepartments from '@/components/Pages/Admin/Departments/Add_departments'
import EditDepartments from '@/components/Pages/Admin/Departments/Edit_departments'
import Employees from '@/components/Pages/Admin/Employee/Employees'
import AddEmployees from '@/components/Pages/Admin/Employee/Add_employee'
import EditEmployees from '@/components/Pages/Admin/Employee/Edit_employees'
import Leaves from '@/components/Pages/Admin/Employee/Leave'
import EditLeaves from '@/components/Pages/Admin/Employee/Edit_leaves'
import AddLeave from '@/components/Pages/Admin/Employee/Add_leave'
import Settings from '@/components/Pages/Admin/Others/Settings'
import TestManagement from '@/components/Pages/Admin/Others/test_management'
import SeePrascriptions from '@/components/Pages/Admin/Others/See_prescriptions'
import SeeReports from '@/components/Pages/Admin/Others/See_Reports'
import RefillAccount from '@/components/Pages/Admin/Others/Refill_Account'
import ExpenditureDetails from '@/components/Pages/Admin/Others/Expenditure_details'
import Payments from '@/components/Pages/Admin/Others/Payments'
import AdminProfile from '@/components/Pages/Admin/Profile/Admin_Profile'
import EditAdminProfile from '@/components/Pages/Admin/Profile/Edit_Admin_Profile'
import Receptionist from '@/components/Pages/Admin/Receptionist/Receptionist'
import AddReceptionist from '@/components/Pages/Admin/Receptionist/Add_Receptionist'
import EditReceptionist from '@/components/Pages/Admin/Receptionist/Edit_Receptionist'

/*===============Doctor===============*/
import Doctor from '@/components/Pages/Doctors/SidebarDoctor'
import DashboardDoctor from '@/components/Pages/Doctors/Dashboard'
import TodayPatientList from '@/components/Pages/Doctors/Patient_list/TodayPatientList'
import PatientPreviousRecords from '@/components/Pages/Doctors/Patient_previous_records/PreviousRecords'
import SeeDoctorList from '@/components/Pages/Doctors/See_Doctors_List/See_Doctor_List'
import SeeAllPatientList from '@/components/Pages/Doctors/Patient_list/See_All_Patient_List'
import Prescription from '@/components/Pages/Doctors/Prescription/Prescription'
import NextAppointment from '@/components/Pages/Doctors/NextAppointment/Next_Appointment'
import DocDoctorProfile from '@/components/Pages/Doctors/Profile/Doctor_Profile'
import EditDocDoctorProfile from '@/components/Pages/Doctors/Profile/Edit_Doctor_Profile'
import MakeLeaveRequest from '@/components/Pages/Doctors/Leave/make_leave_request'
import LeaveRequestApproval from '@/components/Pages/Doctors/Leave/Leave_request_approval'


/*==================Patient===========================*/

import Dash from '@/components/Pages/patient/leftSideBar'
import DashboardPatient from '@/components/Pages/patient/Dashboard'
import Appointment from '@/components/Pages/patient/appointment'
import TestIssued from '@/components/Pages/patient/test_issued'
import LastVisit from '@/components/Pages/patient/last_visit'
import PrescriptionView from '@/components/Pages/patient/prescription_view'
import ReportOverview from '@/components/Pages/patient/report_overview'
import BillIssued from '@/components/Pages/patient/bill_issued'
import EmergencyStop from '@/components/Pages/patient/emergency_stop'
import PreviousAppointment from '@/components/Pages/patient/previous_appointment'


/*================Receptionist======================*/

import DashReceptionist from '@/components/Pages/receptionist/leftSideBar'
import DashboardReceptionist from '@/components/Pages/receptionist/Dashboard'
import TestIssue from '@/components/Pages/receptionist/test_issue'
import CashPayment from '@/components/Pages/receptionist/cash_payment'
import OldPatient from '@/components/Pages/receptionist/old_patient'
import NewPatient from '@/components/Pages/receptionist/new_patient'
import ProceedToPayment from '@/components/Pages/receptionist/proceed_to_payment'
import Orders from '@/components/Pages/receptionist/orders'

/*================Authentication======================*/
import Login from '@/components/Pages/Authentication/Login'
import Register from '@/components/Pages/Authentication/Register'
import EmailConfirmation from '@/components/Pages/Authentication/emailConfirmationSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	component: App,
    	name: 'Home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/emailConfirmation/:email/:token',
        component: EmailConfirmation,
        name: 'emailConfirmation'
    },
    {
    	path: '/admin', //sidebar
    	component: Sidebar,
    	children: [

    		{path: '', component: Dashboard,name: 'dashboard',meta: {requiresAuth: true}},

            /*=============Admin Profile==============*/
            {path: '/admin/admin_profile', component: AdminProfile,name: 'admin_profile'},
            {path: '/admin/edit_admin_profile', component: EditAdminProfile,name: 'edit_admin_profile'},

            /*==============Doctors============*/
            {path: '/admin/doctors', component: Doctors, name: 'doctors'},
            {path: '/admin/doctors/adddoctor', component: AddDoctor, name: 'adddoctor'},
            {path: '/admin/doctors/editdoctor', component: EditDoctor, name: 'editdoctor'},
            {path: '/admin/doctors/profile', component: DoctorProfile, name: 'doctorProfile'},
            {path: '/admin/doctors/edit_profile', component: EditProfile, name: 'editProfile'},

            /*==============Schedule============*/
            {path: '/admin/doctors_schedule', component: Schedule, name: 'schedule'},
            {path: '/admin/doctors_schedule/addschedule', component: AddSchedule, name: 'addschedule'},
            {path: '/admin/doctors_schedule/editschedule', component: EditSchedule, name: 'editschedule'},

            /*==============Patients============*/
            {path: '/admin/patients', component: Patients, name: 'patients'},
            {path: '/admin/patients/add_patients', component: AddPatients, name: 'addPatients'},
            {path: '/admin/patients/edit_patients', component: EditPatients, name: 'editPatients'},

            /*==============Appointments============*/
            {path: '/admin/appointments', component: Appointments, name: 'appointments'},
            {path: '/admin/appointments/add_appointments', component: AddAppointments, name: 'addAppointments'},
            {path: '/admin/appointments/edit_appointments', component: EditAppointments, name: 'editAppointments'},

            /*==============Departments============*/
            {path: '/admin/departments', component: Departments, name: 'departments'},  
            {path: '/admin/departments/add_departments', component: AddDepartments, name: 'addDepartments'},
            {path: '/admin/departments/edit_departments', component: EditDepartments, name: 'editDepartments'},

            /*==============Employee============*/
            {path: '/admin/employees', component: Employees, name: 'employees'}, 
            {path: '/admin/employees/add_employees', component: AddEmployees, name: 'addAmployees'}, 
            {path: '/admin/employees/edit_employees', component: EditEmployees, name: 'editAmployees'}, 
            {path: '/admin/employees/leaves', component: Leaves, name: 'leaves'}, 
            {path: '/admin/employees/edit_leaves', component: EditLeaves, name: 'editLeaves'}, 
            {path: '/admin/add_leave', component: AddLeave, name: 'add_leave'}, 

            /*==============Others============*/    
            {path: '/admin/settings', component: Settings, name: 'settings'},
            {path: '/admin/test_management', component: TestManagement, name: 'test_management'},
            {path: '/admin/see_prascriptions', component: SeePrascriptions, name: 'see_prascriptions'},
            {path: '/admin/see_reports', component: SeeReports, name: 'see_reports'},
            {path: '/admin/refill_account', component: RefillAccount, name: 'refill_account'},
            {path: '/admin/expenditure_details', component: ExpenditureDetails, name: 'expenditure_details'},
            {path: '/admin/payments', component: Payments, name: 'payments'},

            /*==============RECEPTIONIST============*/
            {path: '/admin/receptionist', component: Receptionist, name: 'receptionist'},
            {path: '/admin/receptionist/add_receptionist', component: AddReceptionist, name: 'add_receptionist'},
            {path: '/admin/receptionist/edit_receptionist', component: EditReceptionist, name: 'edit_receptionist'},
    	]
    },
    {
        path: '/doctor',
        component: Doctor,
        children: [
            {path: '', component: DashboardDoctor,name: 'dashboardDoctor',meta: {requiresAuth: true}},

            /*=============Doctor Profile===============*/
            {path: '/doctor/doctor_profile', component: DocDoctorProfile,name: 'doctor_profile'},
            {path: '/doctor/edit_doctor_profile', component: EditDocDoctorProfile,name: 'edit_doctor_profile'},

            /*=============Today Patient List============*/
            {path: '/doctor/today_patients_list', component: TodayPatientList,name: 'today_patients_list'},
            {path: '/doctor/see_all_patient_list', component: SeeAllPatientList,name: 'see_all_patient_list'},

            /*=============Patient Previous Records============*/
            {path: '/doctor/patient_previous_records', component: PatientPreviousRecords,name: 'patient_previous_records'},

            /*=============See all doctor list============*/
            {path: '/doctor/see_all_doctors_list', component: SeeDoctorList,name: 'see_all_doctors_list'},

            /*=============Prescription============*/
            {path: '/doctor/prescription', component: Prescription,name: 'prescription'},

            /*=============Next Appointment============*/
            {path: '/doctor/next_appointment', component: NextAppointment,name: 'next_appointment'},

            /*=============Leave============*/
            {path: '/doctor/make_leave_request', component: MakeLeaveRequest,name: 'make_leave_request'},           
            {path: '/doctor/leave_request_approval', component: LeaveRequestApproval,name: 'leave_request_approval'},           
        ]
    },
    {
        path: '/patient',
        component: Dash,
        children: [
            {
                path: '',
                name: 'DashboardPatient',
                component: DashboardPatient,
                meta: { requiresAuth: true }
            },
            {
                path: 'appointment',
                name: 'Appointment',
                component: Appointment
            },
            {
                path: 'test_issued',
                name: 'TestIssued',
                component: TestIssued
            },
            {
                path:'last_visit',
                name: 'LastVisit',
                component: LastVisit
            },
            {
                path: 'prescription_view',
                name: 'PrescriptionView',
                component: PrescriptionView
            },
            {
                path: 'report_overview',
                name: 'ReportOverview',
                component: ReportOverview
            },
            {
                path: 'bill_issued',
                name: 'BillIssued',
                component: BillIssued
            },
            {
                path: 'emergency_stop',
                name: 'EmergencyStop',
                component: EmergencyStop
            },
            {
                path: 'previous_appointment',
                name: 'PreviousAppointment',
                component: PreviousAppointment
            }
        ]
    },
    {
        path:'/receptionist',
        component: DashReceptionist,
        children: [
            {
                path:'',
                name:'DashboardReceptionist',
                component: DashboardReceptionist,
                meta: {requiresAuth: true}
            },
            {
                path:'test_issue',
                name: 'TestIssue',
                component: TestIssue
            },
            {
                path: 'cash_payment',
                name: 'CashPayment',
                component: CashPayment
            },
            {
                path: 'old_patient',
                name: 'OldPatient',
                component: OldPatient
            },
            {
                path: 'new_patient',
                name: 'NewPatient',
                component: NewPatient
            },
            {
                path: 'proceed_to_payment',
                name: 'ProceedToPayment',
                component: ProceedToPayment
            },
            {
                path: 'orders',
                name: 'Orders',
                component: Orders
            }
        ]
    }
  ],
  mode: 'history'
})
