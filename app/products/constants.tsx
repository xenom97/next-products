import { GridColDef } from '@mui/x-data-grid'
import formatCurrency from '../../utils/format-currency'
import PriceFilterSlider from './components/PriceFilterSlider'

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
    filterOperators: [
      {
        label: 'Range',
        value: 'range',
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.field || !filterItem.value || !filterItem.operator) {
            return null
          }
          const [minVal, maxVal] = filterItem.value
          return (params): boolean => {
            return params.value >= minVal && params.value <= maxVal
          }
        },
        InputComponent: PriceFilterSlider,
        InputComponentProps: { type: 'array' },
      },
    ],
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
