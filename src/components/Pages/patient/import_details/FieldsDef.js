export const FieldsDef= [
		{
			name:'id',
			title:'Patient ID',
			sortField: 'id'
		},
		{
			name:'name',
			title: '<i class="fa fa-tag"></i> Patient Name',
			sortField: 'name'
		},
		{
			name:'name',
			title: '<i class="fa fa-tag"></i> Doctor Name',
			sortField: 'name'
		},
		{
			name:'name',
			title: '<i class="fa fa-tag"></i> Specialist',
			sortField: 'name'
		},
		{
			name:'birthdate',
			title: 'Last Visit',
		    sortField: 'birthdate',
		    titleClass: 'center aligned',
		    dataClass: 'center aligned',
		},
		{
			name:'birthdate',
			title: 'Next Visit',
		    sortField: 'birthdate',
		    titleClass: 'center aligned',
		    dataClass: 'center aligned',
		},
		{
            name: '__slot:actions',
            title: 'Actions',
            dataClass: 'center aligned',
            visible: this.authenticated
        }
] 