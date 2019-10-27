 export const FieldsDef_leaves = [
		{
		 	name:'id',
		 	title:'ID',
		 	sortField:'id'
		},
 		{
			name:'__slot:doctor_name',
			title: 'Doctor Name',
		},
		{
			name:'department_name',
			title:'department',
			sortField:'department_namet'
		},
		{
			name:'request_type',
			title: 'Leave Type',
			sortField: 'request_type'
		},
		{
			name:'date_from',
			title: 'From',
			sortField: 'date_from'
		},
		{
			name:'date_to',
			title: 'To',
			sortField: 'date_to'
		},
		{
			name:'number_of_days',
			title: 'No of Days',
			sortField: 'number_of_days'
		},
		{
			name:'leave_reason',
			title: 'Reason',
			sortField: 'leave_reason'
		},
		{
			name:'status',
			title: 'Status',
			callback:'statusCall'
		},
		{
            name: '__slot:actions',
            title: 'Actions',
            dataClass: 'center aligned'
        }
]