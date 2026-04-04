"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, BookOpen, Brain, Star } from "lucide-react"
import { getUserInterests, getUserKnowledge } from "@/lib/supabase"
import { useUser } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type TopicProgress = {
  id: string
  topic: string
  knowledge_level: number
  is_interest: boolean
  status: string
}

export const columns: ColumnDef<TopicProgress>[] = [
  {
    accessorKey: "topic",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Topic
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2 font-medium">
        <BookOpen className="h-4 w-4 text-purple-500" />
        <span className="capitalize">{row.getValue("topic")}</span>
        {row.original.is_interest && <Star className="h-3 w-3 text-yellow-500" />}
      </div>
    ),
  },
  {
    accessorKey: "knowledge_level",
    header: "Knowledge Level",
    cell: ({ row }) => {
      const level = parseFloat(row.getValue("knowledge_level"))
      return (
        <div className="flex items-center gap-2">
          <div className="h-2 w-full max-w-[100px] rounded-full bg-gray-100">
            <div 
              className="h-full rounded-full bg-green-500" 
              style={{ width: `${Math.min(100, Math.max(0, level))}%` }}
            />
          </div>
          <span className="text-xs font-bold text-green-700">{level}%</span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
          status === 'Mastered' ? 'bg-green-100 text-green-800' : 
          status === 'Learning' ? 'bg-blue-100 text-blue-800' : 
          'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </div>
      )
    },
  },
]

export function LearningDataTable() {
  const { user } = useUser()
  const [data, setData] = React.useState<TopicProgress[]>([])
  const [loading, setLoading] = React.useState(true)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  React.useEffect(() => {
    async function fetchData() {
      if (user) {
        setLoading(true)
        const [interests, knowledge] = await Promise.all([
          getUserInterests(user.id),
          getUserKnowledge(user.id)
        ])

        const topicsMap = new Map<string, TopicProgress>()
        
        // Add known knowledge levels
        knowledge.forEach((k: any) => {
          topicsMap.set(k.topic.toLowerCase(), {
            id: k.topic,
            topic: k.topic,
            knowledge_level: k.knowledge_level,
            is_interest: false,
            status: k.knowledge_level >= 80 ? 'Mastered' : 'Learning'
          })
        })

        // Add or update interests
        interests.forEach((interest: string) => {
          const key = interest.toLowerCase()
          if (topicsMap.has(key)) {
            topicsMap.get(key)!.is_interest = true
          } else {
            topicsMap.set(key, {
              id: interest,
              topic: interest,
              knowledge_level: 0,
              is_interest: true,
              status: 'Interested'
            })
          }
        })

        setData(Array.from(topicsMap.values()))
        setLoading(false)
      }
    }
    fetchData()
  }, [user])

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter topics..."
          value={(table.getColumn("topic")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("topic")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="overflow-hidden rounded-md border">
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
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Loading learning data...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
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
                  No topics or interests found. Explore content to build your profile!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
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
