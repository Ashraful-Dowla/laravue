export const FieldsDef_transaction = [
		{
			name:'id',
			title:'Bill Id',
			sortField: 'id'
		},
		{
			name:'bill_id',
			title: ' Bill ID'
		},
		{
			name:'paid',
			title: 'Paid'
		},
		{
			name:'mark',
			title: 'Payment Type',
			callback: 'markCall'
		},
		{
			name:'created_at',
			title: 'Issued Date',
		    titleClass: 'center aligned',
		    dataClass: 'center aligned'
		}
] 