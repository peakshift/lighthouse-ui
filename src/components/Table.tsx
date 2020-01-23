import React from "react";

export function Table(data: Array<{value: any}>) {
	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Peers</th>
					<th>Validators</th>
					<th>Sync State</th>
					<th>Head Slot</th>
					<th>Finalized slot</th>
					<th>Disk Usage</th>
					<th>Version</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{data[0].value}</td>
					<td>{data[0].value}</td>
					<td>{data[0].value}</td>
					<td>{data[0].value}</td>
					<td>{data[0].value}</td>
					<td>{data[0].value}</td>
					<td>{data[0].value}</td>
					<td>{data[0].value}</td>
				</tr>
			</tbody>
		</table>
	);
}
