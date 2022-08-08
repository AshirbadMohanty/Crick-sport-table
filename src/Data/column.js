import React from 'react'

export const column = [
	{
		Header: 'Image',
		accessor: 'sImage',
		Cell: (tableProps) => (
			<img
				src={tableProps.row.original.sImage}
				width={200}
			/>
		),
	},
	{
		Header: 'Title',
		accessor: 'sTitle',
	},
	{
		Header: 'Description',
		accessor: 'sDescription',
	},
	{
		Header: 'Type',
		accessor: 'eType',
	},
	{
		Header: 'Created At',
		accessor: 'dCreatedAt',

	},
	{
		Header: 'View Counts',
		accessor: 'nViewCounts',
	},
	{
		Header: 'Comments Count',
		accessor: 'nCommentsCount',
	},
]
