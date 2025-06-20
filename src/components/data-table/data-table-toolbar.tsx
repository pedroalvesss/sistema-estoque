'use client'

import * as React from 'react'
import type { DataTableFilterField } from '@/types'
import { Cross2Icon } from '@radix-ui/react-icons'
import type { Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { DataTableFacetedFilter } from './data-table-faceted-filter'
import { DataTableViewOptions } from './data-table-view-options'

interface DataTableToolbarProps<TData>
  extends React.HTMLAttributes<HTMLDivElement> {
  table: Table<TData>
  filterFields?: DataTableFilterField<TData>[]
}

export function DataTableToolbar<TData>({
  table,
  filterFields = [],
  children,
  className,
  ...props
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  // Memoize computation of searchableColumns and filterableColumns
  const { filterableColumns } = React.useMemo(() => {
    return {
      filterableColumns: filterFields.filter((field) => field.options),
    }
  }, [filterFields])
  return (
    <div
      className={cn(
        'flex w-full items-center justify-between space-x-2 overflow-auto p-1',
        className,
      )}
      {...props}
    >
      <div className="flex flex-1 items-center space-x-2">
        {filterableColumns.length > 0 &&
          filterableColumns.map(
            (column) =>
              table.getColumn(column.value ? String(column.value) : '') && (
                <DataTableFacetedFilter
                  key={String(column.value)}
                  column={table.getColumn(
                    column.value ? String(column.value) : '',
                  )}
                  title={column.label}
                  options={column.options ?? []}
                />
              ),
          )}
        {
          <Button
            disabled={!isFiltered}
            aria-label="Resetar filtros"
            variant="ghost"
            className="h-8 px-2 lg:px-3"
            onClick={() => table.resetColumnFilters()}
          >
            Resetar filtros
            <Cross2Icon className="ml-2 size-4" aria-hidden="true" />
          </Button>
        }
      </div>
      <div className="flex items-center gap-2">
        {children}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
