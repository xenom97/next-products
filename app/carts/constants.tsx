import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import formatCurrency from '../../utils/format-currency'

export const CART_COLUMNS: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
  },
  {
    field: 'userId',
    headerName: 'User ID',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'totalProducts',
    headerName: 'Total Products',
    flex: 1,
    minWidth: 150,
    type: 'number',
    valueFormatter({ value }) {
      if (value > 1) return value + ' Products'
      return value + ' Product'
    },
  },
  {
    field: 'totalQuantity',
    headerName: 'Total Quantity',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'discountedTotal',
    headerName: 'Total Discount',
    flex: 1,
    minWidth: 150,
    type: 'number',
    valueFormatter({ value }) {
      return formatCurrency(value)
    },
  },
  {
    field: 'total',
    headerName: 'Total',
    flex: 1,
    minWidth: 150,
    type: 'number',
    valueFormatter({ value }) {
      return formatCurrency(value)
    },
  },
]
