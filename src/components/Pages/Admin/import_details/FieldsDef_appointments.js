export const FieldsDef_appointments = [
		{
			name:'id',
			title: 'ID',
			sortField: 'id'
		},
		{
			name:'patient_name',
			title: 'Patient Name',
			sortField: 'patient_name'
		},
		{
			name:'doctor_name',
			title: 'Doctor Name',
			sortField: 'doctor_name'
		},
		{
			name:'department',
			title: 'Department',
			sortField: 'department'
		},
		{
			name:'appointment_date',
			title: 'Appointment Date',
			sortField: 'appointment_date'
		},
		{
			name:'time',
			title: 'Appointment Time',
			sortField: 'time'
		},
		{
			name:'status',
			title: 'Status',
			callback:'appointmentStatus'
		},
		{
            name: '__slot:actions',
            title: 'Actions',
            dataClass: 'center aligned'
        }
]