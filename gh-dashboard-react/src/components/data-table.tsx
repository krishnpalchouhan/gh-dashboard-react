"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu"
import { Input } from "./ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"

// const gridData: WarningsData[] = [
//     {
//         "warning_count": 6,
//         "build_duration": 0,
//         "date": "Tue Mar 19 10:54:27 UTC 2024",
//         "commit_id": "dd7240c1"
//     },
//     {
//         "warning_count": 6,
//         "build_duration": 0,
//         "date": "Tue Mar 19 14:16:43 UTC 2024",
//         "commit_id": "642ea5e3"
//     },
//     {
//         "warning_count": 6,
//         "build_duration": 0,
//         "date": "Tue Mar 19 16:32:35 UTC 2024",
//         "commit_id": "62a45eac"
//     }
// ]

export type WarningsData = {
    commit_id: string
    warning_count: number
    date: string
    build_duration: number
}
export function formattedDate(date: string) {
    const dateObj = new Date(date);
    return `${dateObj.getDate()} ${dateObj.toLocaleString('default', { month: 'long' })} ${dateObj.getFullYear().toString()}`;
}
export const columns: ColumnDef<WarningsData>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <div className="flex flex-col items-left">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "commit_id",
        header: () =>{
            return (
                <div className="text-center">Commit ID</div>
            )
        },

        cell: ({ row }) => (
            <div className="capitalize text-center">{row.getValue("commit_id")}</div>
        ),
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <div className="flex flex-col items-center">
                    <Button
                        className="text-center align-middle mx-auto"
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            return <span className="capitalize text-center">{formattedDate(row.getValue("date"))}</span>;
        },
    },
    {
        accessorKey: "warning_count",
        header: () => <div className="text-center">Warning Count</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("warning_count"))
            return <div className="text-center font-medium">{amount}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const WarningsData = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(WarningsData.commit_id)}>
                            Copy WarningsData ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Code Change</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

]

export const DataTable = ({ gridData }: { gridData: WarningsData[] }) => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
         []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data: gridData,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                                <TableHead className="ml-0 mr-0 py-0 px-0" style={{float: 'right', padding: '4px 2px'}}>
                                    <DropdownMenu >
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="ml-auto">
                                                 <ChevronDown className="" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="ml-0 mr-0 py-0 px-0 " >
                                            {table
                                                .getAllColumns()
                                                .filter((column) => column.getCanHide())
                                                .map((column) => {
                                                    return (
                                                        <DropdownMenuCheckboxItem
                                                            key={column.id}
                                                            className="capitalize"
                                                            checked={column.getIsVisible()}
                                                            onCheckedChange={(value) =>
                                                                column.toggleVisibility(!!value)
                                                            }
                                                        >
                                                            {column.id}
                                                        </DropdownMenuCheckboxItem>
                                                    )
                                                })}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableHead>
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
