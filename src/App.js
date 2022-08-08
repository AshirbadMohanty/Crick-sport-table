import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from './Components/Table/Table'

function App() {
	const [data, setData] = useState([])
	useEffect(() => {
		fetchData()
	}, [])
	async function fetchData() {
		axios
			.get('https://backend.sports.info/api/v1/posts/recent')
			.then((response) => setData(response.data.data))
	}
	return (
		<div>
			<Table tableData={data} />
		</div>
	)
}

export default App
