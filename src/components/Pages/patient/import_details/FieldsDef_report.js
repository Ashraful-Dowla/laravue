export const FieldsDef_report= [
		{
			name:'id',
			title:'ID',
			sortField: 'id'
		},
		{
			name:'patient_id',
			title:'Patient ID'
		},
		{
			name:'patient_name',
			title: '<i class="fa fa-tag"></i> Patient Name'
		},
		{
			name:'doctor_name',
			title: '<i class="fa fa-tag"></i> Doctor Name',
			sortField: 'name'
		},
		{
			name:'department',
			title: '<i class="fa fa-tag"></i> Department'
		},
		{
			name:'issued_date',
			title: 'Issued Date',
		    titleClass: 'center aligned',
		    dataClass: 'center aligned',
		},
		{
            name: '__slot:actions',
            title: 'Report View',
            dataClass: 'center aligned'
        }
] 