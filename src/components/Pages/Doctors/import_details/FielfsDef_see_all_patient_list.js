export const FielfsDef_see_all_patient_list= [
		{
			name:'patient_id',
			title:'Patient ID',
			sortField: 'patient_id'
		},
		{
			name:'patient_name',
			title: 'Patient Name',
			sortField: 'patient_name'
		},
		{
			name:'phone_number',
			title: 'Mobile Number',
			sortField: 'phone_number'
		},
		{
			name:'status',
			title: 'Status',
			callback:'statusCall',
			dataClass: 'center aligned'
		},
		{
            name: '__slot:actions',
            title: 'Actions',
            dataClass: 'center aligned'
        }
] 