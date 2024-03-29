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
import LeaveType from '@/components/Pages/Admin/Others/LeaveType'
import AdminProfile from '@/components/Pages/Admin/Profile/Admin_Profile'
import EditAdminProfile from '@/components/Pages/Admin/Profile/Edit_Admin_Profile'
import Receptionist from '@/components/Pages/Admin/Receptionist/Receptionist'
import AddReceptionist from '@/components/Pages/Admin/Receptionist/Add_Receptionist'
import EditReceptionist from '@/components/Pages/Admin/Receptionist/Edit_Receptionist'
import AdminReportUpload from '@/components/Pages/Admin/report_upload'
import AdminUpdateTestIssue from '@/components/Pages/Admin/Others/update_test_issue'
import AdminProceedToPayment from '@/components/Pages/Admin/Others/proceed_to_payment'

/*===============Doctor===============*/
import Doctor from '@/components/Pages/Doctors/SidebarDoctor'
import DashboardDoctor from '@/components/Pages/Doctors/Dashboard'
import TodayPatientList from '@/components/Pages/Doctors/Patient_list/TodayPatientList'
import PatientPreviousRecords from '@/components/Pages/Doctors/Patient_previous_records/PreviousRecords'
import SeeDoctorList from '@/components/Pages/Doctors/See_Doctors_List/See_Doctor_List'
import SeeAllPatientList from '@/components/Pages/Doctors/Patient_list/See_All_Patient_List'
import Prescription from '@/components/Pages/Doctors/Prescription/Prescription'
import TodayPatientPrescription from '@/components/Pages/Doctors/Prescription/Todays_patient_prescription'
import NextAppointment from '@/components/Pages/Doctors/NextAppointment/Next_Appointment'
import DocDoctorProfile from '@/components/Pages/Doctors/Profile/Doctor_Profile'
import EditDocDoctorProfile from '@/components/Pages/Doctors/Profile/Edit_Doctor_Profile'
import MakeLeaveRequest from '@/components/Pages/Doctors/Leave/make_leave_request'
import LeaveRequestApproval from '@/components/Pages/Doctors/Leave/Leave_request_approval'

import AddDoctorEducation from '@/components/Pages/Doctors/Profile/Add_Education'
import AddDoctorExperience from '@/components/Pages/Doctors/Profile/experience'

import DoctorReportUpload from '@/components/Pages/Doctors/report_upload'



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
import PaymentZone from '@/components/Pages/receptionist/payment_zone'
import OldPatient from '@/components/Pages/receptionist/old_patient'
import PatientList from '@/components/Pages/receptionist/patient_list'
import NewPatient from '@/components/Pages/receptionist/new_patient'
import ProceedToPayment from '@/components/Pages/receptionist/proceed_to_payment'
import Orders from '@/components/Pages/receptionist/orders'
import ReceptionistBillIssued from '@/components/Pages/receptionist/bill_issued_receptionist'
import UpdateTestIssue from '@/components/Pages/receptionist/update_test_issue'
import MyWalletRecharge from '@/components/Pages/receptionist/my_wallet_recharge'
import Transaction from '@/components/Pages/receptionist/transaction'
import ReportUpload from '@/components/Pages/receptionist/report_upload'

/*================Authentication======================*/
import Login from '@/components/Pages/Authentication/Login'
import Register from '@/components/Pages/Authentication/Register'
import EmailConfirmation from '@/components/Pages/Authentication/emailConfirmationSuccess'
import ResetPassword from '@/components/Pages/Authentication/passwordReset'

import Swal from 'sweetalert2';
Vue.use(Router)
var roleshash = {
                    1: 'admin',
                    2: 'doctor',
                    3: 'receptionist',
                    4: 'patient'
                }

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
        path: '/resetPassword/:email',
        component: ResetPassword,
        name: 'resetPassworde'
    },
    {
    	path: '/admin', //sidebar
    	component: Sidebar,
        beforeEnter: (to, from, next) => {
            const authUser = JSON.parse(window.localStorage.getItem('authUser'))
            if (authUser.role === 1) {
              next();
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Access Denied!',
                    text: 'Unauthorized access occured'
                })
                next({ path: '/' + roleshash[authUser.role] })
            }
        },
    	children: [

    		{
                path: '',
                component: Dashboard,
                name: 'dashboard',
                meta: {requiresAuth: true}
            },

            /*=============Admin Profile==============*/
            {path: '/admin/admin_profile', component: AdminProfile,name: 'admin_profile',meta: {requiresAuth: true}},
            {path: '/admin/edit_admin_profile', component: EditAdminProfile,name: 'edit_admin_profile',meta: {requiresAuth: true}},

            /*==============Doctors============*/
            {path: '/admin/doctors', component: Doctors, name: 'doctors',meta: {requiresAuth: true}},
            {path: '/admin/doctors/adddoctor', component: AddDoctor, name: 'adddoctor',meta: {requiresAuth: true}},
            {path: '/admin/doctors/editdoctor/:id', component: EditDoctor, name: 'editdoctor',meta: {requiresAuth: true}},
            {path: '/admin/doctors/profile', component: DoctorProfile, name: 'doctorProfile',meta: {requiresAuth: true}},
            {path: '/admin/doctors/edit_profile', component: EditProfile, name: 'editProfile',meta: {requiresAuth: true}},

            /*==============Schedule============*/
            {path: '/admin/doctors_schedule', component: Schedule, name: 'schedule',meta: {requiresAuth: true}},
            {path: '/admin/doctors_schedule/addschedule', component: AddSchedule, name: 'addschedule',meta: {requiresAuth: true}},
            {path: '/admin/doctors_schedule/editschedule/:id', component: EditSchedule, name: 'editschedule',meta: {requiresAuth: true}},

            /*==============Patients============*/
            {path: '/admin/patients', component: Patients, name: 'patients',meta: {requiresAuth: true}},
            {path: '/admin/patients/add_patients', component: AddPatients, name: 'addPatients',meta: {requiresAuth: true}},
            {path: '/admin/patients/edit_patients/:id', component: EditPatients, name: 'editPatients',meta: {requiresAuth: true}},

            /*==============Appointments============*/
            {path: '/admin/appointments', component: Appointments, name: 'appointments',meta: {requiresAuth: true}},
            {path: '/admin/appointments/add_appointments', component: AddAppointments, name: 'addAppointments',meta: {requiresAuth: true}},
            {path: '/admin/appointments/edit_appointments/:id', component: EditAppointments, name: 'editAppointments',meta: {requiresAuth: true}},

            /*==============Departments============*/
            {path: '/admin/departments', component: Departments, name: 'departments',meta: {requiresAuth: true}},  
            {path: '/admin/departments/add_departments', component: AddDepartments, name: 'addDepartments',meta: {requiresAuth: true}},
            {path: '/admin/departments/edit_departments', component: EditDepartments, name: 'editDepartments',meta: {requiresAuth: true}},

            /*==============Employee============*/
            {path: '/admin/employees', component: Employees, name: 'employees',meta: {requiresAuth: true}}, 
            {path: '/admin/employees/add_employees', component: AddEmployees, name: 'addAmployees',meta: {requiresAuth: true}}, 
            {path: '/admin/employees/edit_employees', component: EditEmployees, name: 'editAmployees',meta: {requiresAuth: true}}, 
            {path: '/admin/employees/leaves', component: Leaves, name: 'leaves',meta: {requiresAuth: true}}, 
            {path: '/admin/employees/edit_leaves', component: EditLeaves, name: 'editLeaves',meta: {requiresAuth: true}}, 
            {path: '/admin/add_leave', component: AddLeave, name: 'add_leave',meta: {requiresAuth: true}}, 

            /*==============Others============*/    
            {path: '/admin/settings', component: Settings, name: 'settings',meta: {requiresAuth: true}},
            {path: '/admin/test_management', component: TestManagement, name: 'test_management',meta: {requiresAuth: true}},
            {path: '/admin/see_prascriptions', component: SeePrascriptions, name: 'see_prascriptions',meta: {requiresAuth: true}},
            {path: '/admin/see_reports', component: SeeReports, name: 'see_reports',meta: {requiresAuth: true}},
            {path: '/admin/refill_account', component: RefillAccount, name: 'refill_account',meta: {requiresAuth: true}},
            {path: '/admin/expenditure_details', component: ExpenditureDetails, name: 'expenditure_details',meta: {requiresAuth: true}},
            {path: '/admin/payments', component: Payments, name: 'payments',meta: {requiresAuth: true}},
            {path: '/admin/Leave_type', component: LeaveType, name: 'Leave_type',meta: {requiresAuth: true}},

            /*==============RECEPTIONIST============*/
            {path: '/admin/receptionist', component: Receptionist, name: 'receptionist',meta: {requiresAuth: true}},
            {path: '/admin/receptionist/add_receptionist', component: AddReceptionist, name: 'add_receptionist',meta: {requiresAuth: true}},
            {path: '/admin/receptionist/edit_receptionist/:id', component: EditReceptionist, name: 'edit_receptionist',meta: {requiresAuth: true}},
    	    {
                path: 'report_upload',
                name: 'AdminReportUpload',
                component: AdminReportUpload,
                meta: { requiresAuth: true }
            },
            {
                path: 'update_test_issue/:id',
                name: 'AdminUpdateTestIssue',
                component: AdminUpdateTestIssue,
                meta: { requiresAuth: true }
            },
            {
                path: 'proceed_to_payment/:bill_id',
                name: 'AdminProceedToPayment',
                component: AdminProceedToPayment,
                meta: {requiresAuth: true}
            }
        ]

    },
    {
        path: '/doctor',
        component: Doctor,
        beforeEnter: (to, from, next) => {
            const authUser = JSON.parse(window.localStorage.getItem('authUser'))
            if (authUser.role === 2)
            {
              next();
            }
            else
            {
                Swal.fire({
                    type: 'error',
                    title: 'Access Denied!',
                    text: 'Unauthorized access occured'
                })
                next({ path: '/' + roleshash[authUser.role] })
            }
        },
        children: [
            {path: '', component: DashboardDoctor,name: 'dashboardDoctor',meta: {requiresAuth: true}},

            /*=============Doctor Profile===============*/
            {path: '/doctor/doctor_profile', component: DocDoctorProfile,name: 'doctor_profile',meta: {requiresAuth: true}},
            {path: '/doctor/edit_doctor_profile', component: EditDocDoctorProfile,name: 'edit_doctor_profile',meta: {requiresAuth: true}},
            {path: '/doctor/add_education/:doctor_id/:id', component: AddDoctorEducation,name: 'add_education',meta: {requiresAuth: true}},
            {path: '/doctor/add_experience/:doctor_id/:id', component: AddDoctorExperience,name: 'add_experience',meta: {requiresAuth: true}},

            /*=============Today Patient List============*/
            {path: '/doctor/today_patients_list', component: TodayPatientList,name: 'today_patients_list',meta: {requiresAuth: true}},
            {path: '/doctor/see_all_patient_list', component: SeeAllPatientList,name: 'see_all_patient_list',meta: {requiresAuth: true}},

            /*=============Patient Previous Records============*/
            {path: '/doctor/patient_previous_records', component: PatientPreviousRecords,name: 'patient_previous_records',meta: {requiresAuth: true}},

            /*=============See all doctor list============*/
            {path: '/doctor/see_all_doctors_list', component: SeeDoctorList,name: 'see_all_doctors_list',meta: {requiresAuth: true}},

            /*=============Prescription============*/
            {path: '/doctor/prescription', component: Prescription,name: 'prescription',meta: {requiresAuth: true}},
            {path: '/doctor/todays_patient_prescription/:date/:patient_id/:doctor_id', component: TodayPatientPrescription,name: 'todays_patient_prescription',meta: {requiresAuth: true}},

            /*=============Next Appointment============*/
            {path: '/doctor/next_appointment', component: NextAppointment,name: 'next_appointment',meta: {requiresAuth: true}},

            /*=============Leave============*/
            {path: '/doctor/make_leave_request', component: MakeLeaveRequest,name: 'make_leave_request',meta: {requiresAuth: true}},           
            {path: '/doctor/leave_request_approval', component: LeaveRequestApproval,name: 'leave_request_approval',meta: {requiresAuth: true}},           
            {
                path: 'report_upload',
                name: 'DoctorReportUpload',
                component: DoctorReportUpload,
                meta: { requiresAuth: true}
            }
        ]
    },
    {
        path: '/patient',
        component: Dash,
        beforeEnter: (to, from, next) => {
            const authUser = JSON.parse(window.localStorage.getItem('authUser'))
            if (authUser.role === 4)
            {
              next();
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Access Denied!',
                    text: 'Unauthorized access occured'
                })
                next({ path: '/' + roleshash[authUser.role] })
            }
        },
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
                component: Appointment,
                meta: {requiresAuth: true}
            },
            {
                path: 'test_issued',
                name: 'TestIssued',
                component: TestIssued,
                meta: {requiresAuth: true}
            },
            {
                path:'last_visit',
                name: 'LastVisit',
                component: LastVisit,
                meta: {requiresAuth: true}
            },
            {
                path: 'prescription_view',
                name: 'PrescriptionView',
                component: PrescriptionView,
                meta: {requiresAuth: true}
            },
            {
                path: 'report_overview',
                name: 'ReportOverview',
                component: ReportOverview,
                meta: {requiresAuth: true}
            },
            {
                path: 'bill_issued',
                name: 'BillIssued',
                component: BillIssued,
                meta: {requiresAuth: true}
            },
            {
                path: 'emergency_stop',
                name: 'EmergencyStop',
                component: EmergencyStop,
                meta: {requiresAuth: true}
            },
            {
                path: 'previous_appointment',
                name: 'PreviousAppointment',
                component: PreviousAppointment,
                meta: {requiresAuth: true}
            }
        ]
    },
    {
        path:'/receptionist',
        component: DashReceptionist,
        meta: {requiresAuth: true},
        beforeEnter: (to, from, next) => {
            const authUser = JSON.parse(window.localStorage.getItem('authUser'))
            if (authUser.role === 3) {
              next();
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Access Denied!',
                    text: 'Unauthorized access occured'
                })
                next({ path: '/' + roleshash[authUser.role] })
            }
        },
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
                component: TestIssue,
                meta: {requiresAuth: true}
            },
            {
                path: 'payment_zone',
                name: 'PaymentZone',
                component: PaymentZone,
                meta: {requiresAuth: true}
            },
            {
                path: 'old_patient',
                name: 'OldPatient',
                component: OldPatient,
                meta: {requiresAuth: true}
            },
            {
                path: 'patient_list',
                name: 'PatientList',
                component: PatientList,
                meta: {requiresAuth: true}
            },
            {
                path: 'new_patient',
                name: 'NewPatient',
                component: NewPatient,
                meta: {requiresAuth: true}
            },
            {
                path: 'proceed_to_payment/:bill_id',
                name: 'ProceedToPayment',
                component: ProceedToPayment,
                meta: {requiresAuth: true}
            },
            {
                path: 'orders',
                name: 'Orders',
                component: Orders,
                meta: { requiresAuth: true }
            },
            {
                path: 'bill_issued',
                name: 'ReceptionistBillIssued',
                component: ReceptionistBillIssued,
                meta: { requiresAuth: true } 
            },
            {
                path: 'update_test_issue/:id',
                name: 'UpdateTestIssue',
                component : UpdateTestIssue,
                meta : { requiresAuth: true }
            },
            {
                path: 'my_wallet_recharge',
                name: 'MyWalletRecharge',
                component: MyWalletRecharge,
                meta: { requiresAuth: true }
            },
            {
                path: 'transaction',
                name: 'Transaction',
                component: Transaction,
                meta: { requiresAuth: true }
            },
            {
                path: 'report_upload',
                name: 'ReportUpload',
                component: ReportUpload,
                meta: { requiresAuth: true}
            }
        ]
    }
  ],
  mode: 'history'
})
