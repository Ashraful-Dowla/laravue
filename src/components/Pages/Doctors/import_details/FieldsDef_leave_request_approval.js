export const FieldsDef_leave_request_approval = [
		{
			name:'id',
			title:'ID',
			sortField: 'id'
		},
		{
			name:'request_type',
			title: 'Leave Type',
			sortField: 'name'
		},
		{
			name:'date_from',
			title: 'From',
			sortField: 'name'
		},
		{
			name:'date_to',
			title: 'To',
			sortField: 'name'
		},
		{
			name:'number_of_days',
			title: 'Total days',
			sortField: 'name'
		},
		{
			name:'status',
			title: 'Status',
			callback: 'statusCall'
		},
		{
            name: '__slot:actions',
            title: 'Actions',
            dataClass: 'center aligned'
        }
]