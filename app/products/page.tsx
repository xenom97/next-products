'use client'

import { useEffect, useState } from 'react'
import { Typography, TextField } from '@mui/material'
import { DataGrid, GridPaginationModel } from '@mui/x-data-grid'
import { PRODUCT_COLUMNS } from './constants'
import productsService from './service'
import { IProduct } from './models'

export default function Products() {
  const [rows, setRows] = useState<IProduct[]>([])
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  })
  const [query, setQuery] = useState<string>('')

  const handlePaginationChange = ({ page, pageSize }: GridPaginationModel) => {
    setPagination({ page, pageSize })
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined

    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await productsService.getProducts({
          limit: pagination.pageSize,
          skip: query ? 0 : pagination.pageSize * pagination.page,
          q: query,
        })
        if (data) {
          setRows(data.products)
          setCount(data.total)
        }
      } catch (error: any) {
        console.error('Failed to fetch products: ', error?.message)
      } finally {
        setLoading(false)
      }
    }

    const debouncedFetchProducts = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      const delay = query ? 500 : 0
      timeoutId = setTimeout(fetchProducts, delay)
    }

    debouncedFetchProducts()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [pagination, query])

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
        <Typography variant="h5" gutterBottom>
          Products
        </Typography>

        <TextField
          label="Search Product"
          variant="outlined"
          size="small"
          autoComplete="new-password"
          className="w-full md:w-auto"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="w-full table table-fixed mt-5">
        <DataGrid
          rows={rows}
          columns={PRODUCT_COLUMNS}
          loading={loading}
          pageSizeOptions={[5, 10, 25, 50]}
          paginationModel={pagination}
          paginationMode="server"
          rowCount={count}
          onPaginationModelChange={handlePaginationChange}
          disableRowSelectionOnClick
          initialState={{
            filter: {
              filterModel: {
                items: [
                  { field: 'price', operator: 'range', value: [0, 3000] },
                ],
              },
            },
          }}
        />
      </div>
    </div>
  )
}
