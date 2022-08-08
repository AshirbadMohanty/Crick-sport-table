import React,{useMemo} from 'react'
import { usePagination, useSortBy, useTable } from 'react-table'
import { column } from '../../Data/column'

function Table({ tableData }) {
	const columns = useMemo(() => column, [column])
	const data = useMemo(() => tableData, [tableData])
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		useSortBy,
		usePagination
	)
	

	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup, index) => (
						<tr key={index} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column, index) => (
								<th
									key={index}
									{...column.getHeaderProps(column.getSortByToggleProps())}
								>
									{column.render('Header')}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? ' 🔽'
												: ' 🔼'
											: ''}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row, index) => {
						prepareRow(row)
						return (
							<tr key={index} {...row.getRowProps()}>
								{row.cells.map((cell, index) => {
									return (
										<td {...cell.getCellProps()} key={index}>
											{cell.render('Cell')}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}

export default Table
