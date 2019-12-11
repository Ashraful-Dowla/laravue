export const FieldsDef_departments = [
		{
			name:'id',
			title: 'Department ID',
			sortField: 'id'
		},
		{
			name:'department_name',
			title: 'Department Name',
			sortField: 'department_name'
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