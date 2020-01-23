import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable } from 'react-table'

import makeData from '../data/makeData'

function Table({ columns, data }: { columns: any, data: any }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <MaUTable {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </MaUTable>
    )
}

function List() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Validators',
                columns: [
                    {
                        Header: 'Validator Key',
                        accessor: 'validator_pubkey',
                    }
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                    {
                        Header: 'Tags',
                        accessor: 'tags',
                    },
                    {
                        Header: 'Actions',
                        accessor: 'actions',
                    }
                ],
            },
        ],
        []
    )

    const data = React.useMemo(() => makeData(20), [])

    return (
        <div>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default List