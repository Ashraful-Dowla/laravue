export const FieldsDef_doctor_schedule = [
		{
			name:'__slot:doctor_name',
			title:'Doctor Name',
		},
		{
			name:'doctor_id',
			title: 'doctor ID',
			sortField: 'doctor_id',
			visible: false
		},
		{
			name:'department',
			title: 'Department',
			sortField: 'department'
		},
		{
			name:'__slot:availableTimes',
			title:'Available Time',
		},
		{
			name:'status',
			title: 'Status',
		    dataClass: 'center aligned',
		    callback: 'statusCall'
		},
		{
            name: '__slot:actions',
            title: 'Actions',
            dataClass: 'center aligned'
        }
]