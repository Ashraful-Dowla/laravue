export const FieldsDef= [
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
			name:'last_visit',
			title: 'Last Visit',
		    sortField: 'last_visit',
		    titleClass: 'center aligned',
		    dataClass: 'center aligned',
		},
		{
			name:'next_visit',
			title: 'Next Visit',
		    sortField: 'next_visit',
		    titleClass: 'center aligned',
		    dataClass: 'center aligned',
		}
		// ,
		// {
  //           name: '__slot:actions',
  //           title: 'Actions',
  //           dataClass: 'center aligned',
  //           visible: this.authenticated
  //       }
] 