'use client'

import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { DataGrid, GridPaginationModel, GridRowParams } from '@mui/x-data-grid'
import { CART_COLUMNS } from './constants'
import { ICart } from './models'
import cartsService from './service'
import { useRouter } from 'next/navigation'

export default function Carts() {
  const [rows, setRows] = useState<ICart[]>([])
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  })
  const router = useRouter()

  const handlePaginationChange = ({ page, pageSize }: GridPaginationModel) => {
    setPagination({ page, pageSize })
  }

  const handleClickRow = ({ row }: GridRowParams) => {
    router.push(`/carts/${row.id}`)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined

    const fetchCarts = async () => {
      try {
        setLoading(true)
        const data = await cartsService.getCarts({
          limit: pagination.pageSize,
          skip: pagination.pageSize * pagination.page,
        })
        if (data) {
          setRows(data.carts)
          setCount(data.total)
        }
      } catch (error: any) {
        console.error('Failed to fetch carts: ', error?.message)
      } finally {
        setLoading(false)
      }
    }

    const debouncedFetchCarts = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(fetchCarts, 0)
    }

    debouncedFetchCarts()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [pagination])

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Carts
      </Typography>

      <div className="w-full table table-fixed mt-5">
        <DataGrid
          rows={rows}
          columns={CART_COLUMNS}
          loading={loading}
          pageSizeOptions={[5, 10, 25, 50]}
          paginationModel={pagination}
          paginationMode="server"
          rowCount={count}
          onPaginationModelChange={handlePaginationChange}
          onRowClick={handleClickRow}
          getRowClassName={() => 'cursor-pointer'}
          getCellClassName={() => '!outline-none'}
          disableRowSelectionOnClick
        />
      </div>
    </div>
  )
}
