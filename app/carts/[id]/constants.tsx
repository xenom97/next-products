import formatCurrency from '@/utils/format-currency'
import { GridColDef } from '@mui/x-data-grid'

export const PRODUCT_COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Product Name', flex: 1, minWidth: 200 },
  {
    field: 'price',
    headerName: 'Price',
    flex: 1,
    minWidth: 150,
    type: 'number',
    valueFormatter({ value }) {
      return formatCurrency(value)
    },
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'total',
    headerName: 'Total',
    flex: 1,
    minWidth: 180,
    type: 'number',
    valueFormatter({ value }) {
      return formatCurrency(value)
    },
  },
  {
    field: 'discountPercentage',
    headerName: 'Discount (%)',
    flex: 1,
    minWidth: 180,
    type: 'number',
    valueFormatter({ value }) {
      return value + '%'
    },
  },
  {
    field: 'discountedPrice',
    headerName: 'Discounted Price',
    flex: 1,
    minWidth: 180,
    type: 'number',
    valueFormatter({ value }) {
      return formatCurrency(value)
    },
  },
]
