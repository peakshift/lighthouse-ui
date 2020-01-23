import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable, useFilters, useGlobalFilter } from 'react-table'

// A great library for fuzzy filtering/sorting items
import matchSorter from 'match-sorter'

import makeData from '../data/makeData'

// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length

    return (
        <span>
            Search:{' '}
            <input
                value={globalFilter || ''}
                onChange={e => {
                    setGlobalFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: '1.1rem',
                    border: '0',
                }}
            />
        </span>
    )
}

// Define a default UI for filtering
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options: any = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach((row: any) => {
            options.add(row.values[id])
        })
        return [...options.values()]
    }, [id, preFilteredRows])

    // Render a multi-select box
    return (
        <select
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
        >
            <option value="">All</option>
            {options.map((option: any, i: any) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the min and max
    // using the preFilteredRows

    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach((row: any) => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    return (
        <>
            <input
                type="range"
                min={min}
                max={max}
                value={filterValue || min}
                onChange={e => {
                    setFilter(parseInt(e.target.value, 10))
                }}
            />
            <button onClick={() => setFilter(undefined)}>Off</button>
        </>
    )
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
    column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach((row: any) => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <input
                value={filterValue[0] || ''}
                type="number"
                onChange={e => {
                    const val = e.target.value
                    setFilter((old: any = []) => [val ? parseInt(val, 10) : undefined, old[1]])
                }}
                placeholder={`Min (${min})`}
                style={{
                    width: '70px',
                    marginRight: '0.5rem',
                }}
            />
            to
        <input
                value={filterValue[1] || ''}
                type="number"
                onChange={e => {
                    const val = e.target.value
                    setFilter((old: any = []) => [old[0], val ? parseInt(val, 10) : undefined])
                }}
                placeholder={`Max (${max})`}
                style={{
                    width: '70px',
                    marginLeft: '0.5rem',
                }}
            />
        </div>
    )
}

function fuzzyTextFilterFn(rows: any, id: any, filterValue: any) {
    return matchSorter(rows, filterValue, { keys: [(row: any) => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val: any) => !val

function Table({ columns, data }) {

    const filterTypes = React.useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            fuzzyText: fuzzyTextFilterFn,
            // Or, override the default text filter to use
            // "startWith"
            text: (rows: any, id: any, filterValue: any) => {
                return rows.filter((row: any) => {
                    const rowValue = row.values[id]
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true
                })
            },
        }),
        []
    )

    const defaultColumn: any = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    // Use the state and functions returned from useTable to build your UI
    // const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    //     columns,
    //     data,
    // })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        flatColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            filterTypes,
        },
        useFilters, // useFilters!
        useGlobalFilter // useGlobalFilter!
    )

    // Render the UI for your table
    return (
        <MaUTable {...getTableProps()}>
            <TableHead>
                {headerGroups.map((headerGroup: any) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <TableCell {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
                <TableRow>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row: any, i: any) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map((cell: any) => {
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

// Define a custom filter filter function!
function filterGreaterThan(rows: any, id: any, filterValue: any) {
    return rows.filter((row: any) => {
        const rowValue = row.values[id]
        return rowValue >= filterValue
    })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val: any) => typeof val !== 'number'

function List() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'Validator Key',
                        accessor: 'validator_pubkey',
                        // Use our custom `fuzzyText` filter on this column
                        filter: 'fuzzyText',
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
                        Header: 'Withdrawal Credentials',
                        accessor: 'withdrawal_credentials',
                        Filter: SliderColumnFilter,
                        filter: 'equals',
                    },
                    {
                        Header: 'Balance',
                        accessor: 'effective_balance',
                        Filter: NumberRangeColumnFilter,
                        filter: 'between',
                    },
                    {
                        Header: 'Slashed',
                        accessor: 'slashed',
                    },
                    {
                        Header: 'Activation',
                        accessor: 'activation_epoch',
                    },
                    {
                        Header: 'Exit',
                        accessor: 'exit_epoch',
                    },
                    {
                        Header: 'Withdrawable',
                        accessor: 'withdrawable_epoch',
                        Filter: SliderColumnFilter,
                        filter: filterGreaterThan,
                    }
                ],
            },
        ],
        []
    )

    const data = React.useMemo(() => makeData(1000), [])

    return (
        <div>
            <CssBaseline />
            <Table columns={columns} data={data} />
        </div>
    )
}

export default List