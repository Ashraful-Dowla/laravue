export const FieldsDef_bill_issued = [
		{
			name:'id',
			title:'Bill Id',
			sortField: 'id'
		},
		{
			name:'patient_id',
			title: ' Patient ID'
		},
		{
			name:'amount',
			title: ' Amount'
		},
		{
			name:'discount',
			title: ' Discount'
		},
		{
			name:'amount_after_discount',
			title: 'Net Payable'
		},
		{
			name:'created_at',
			title: 'Issued Date',
		    titleClass: 'center aligned',
		    dataClass: 'center aligned'
		},
		{
			name:'status',
			title: 'Status ',
			dataClass: 'center aligned',
			callback: 'statusCall'
		},
		{
            name: '__slot:actions',
            title: 'Actions',
            dataClass: 'center aligned'
        }
] 