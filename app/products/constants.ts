import { GridColDef } from '@mui/x-data-grid'
import formatCurrency from '../../utils/format-currency'

export const PRODUCT_COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Product Name', width: 200 },
  {
    field: 'brand',
    headerName: 'Brand',
    width: 180,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    type: 'number',
    valueFormatter({ value }) {
      return formatCurrency(value)
    },
  },
  {
    field: 'discountPercentage',
    headerName: 'Discount (%)',
    flex: 1,
    minWidth: 150,
    type: 'number',
    valueFormatter({ value }) {
      return value + '%'
    },
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 150,
    type: 'number',
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 180,
  },
  { field: 'description', headerName: 'Description', flex: 1, minWidth: 200 },
]
