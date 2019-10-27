export const FieldsDef_prescription= [
		{
			name:'id',
			title:'ID',
			sortField: 'id'
		},
		{
			name:'patient_id',
			title:'Patient ID',
			sortField: 'patient_id'
		},
		{
			name:'patient_name',
			title: '<i class="fa fa-tag"></i> Patient Name',
			sortField: 'patient_name'
		},
		{
			name:'doctor_name',
			title: '<i class="fa fa-tag"></i> Doctor Name',
			sortField: 'doctor_name'
		},
		{
			name:'department',
			title: '<i class="fa fa-tag"></i> Department',
			sortField: 'department'
		},
		{
			name:'prescription_date',
			title: 'Visited date',
		    sortField: 'prescription_date',
		    titleClass: 'center aligned',
		    dataClass: 'center aligned',
		},
		{
            name: '__slot:actions',
            title: 'View Prescription',
            dataClass: 'center aligned'
        }
] 