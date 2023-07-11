import { Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { PRODUCT_COLUMNS } from '../constants'
import { ICart } from '../../models'

export default function CartDetailTable({
  cart,
  loading,
}: {
  cart: ICart
  loading: boolean
}) {
  return (
    <div className="mt-4">
      <Typography variant="body1" gutterBottom marginTop={2}>
        Products
      </Typography>

      <div className="w-full table table-fixed">
        <DataGrid
          rows={cart.products || []}
          columns={PRODUCT_COLUMNS}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  )
}
