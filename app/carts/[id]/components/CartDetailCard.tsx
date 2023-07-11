import formatCurrency from '@/utils/format-currency'
import { Card, CardContent, Typography } from '@mui/material'
import { ICart } from '../../models'
import { IUser } from '@/app/users/models'

export default function CardDetailCard({
  cart,
  user,
}: {
  cart: ICart
  user: IUser
}) {
  const getUserName = () => {
    if (Object.keys(user).length) {
      return `${user.firstName} ${user.lastName} (@${user.username})`
    }
    return '-'
  }

  const getUserAddress = () => {
    if (user && Object.keys(user?.address || {}).length) {
      return `${user.address.address}, ${user.address.city} ${user.address.state} (${user.address.postalCode})`
    }
    return '-'
  }

  return (
    <div className="mt-4">
      <Typography variant="body1" gutterBottom>
        Details
      </Typography>

      <Card sx={{ minWidth: 275 }}>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div>
              <Typography
                sx={{ fontSize: 14, fontWeight: 500 }}
                color="text.primary"
                gutterBottom
              >
                User:
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {getUserName()}
              </Typography>
            </div>

            <div>
              <Typography
                sx={{ fontSize: 14, fontWeight: 500 }}
                color="text.primary"
                gutterBottom
              >
                Address:
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {getUserAddress()}
              </Typography>
            </div>
          </div>

          <div>
            <div>
              <Typography
                sx={{ fontSize: 14, fontWeight: 500 }}
                color="text.primary"
                gutterBottom
              >
                Total Products:
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {cart.totalProducts || 0}
              </Typography>
            </div>

            <div>
              <Typography
                sx={{ fontSize: 14, fontWeight: 500 }}
                color="text.primary"
                gutterBottom
              >
                Total Quantity:
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {cart.totalQuantity || 0}
              </Typography>
            </div>
          </div>

          <div>
            <div>
              <Typography
                sx={{ fontSize: 14, fontWeight: 500 }}
                color="text.primary"
                gutterBottom
              >
                Total:
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {formatCurrency(cart.total)}
              </Typography>
            </div>

            <div>
              <Typography
                sx={{ fontSize: 14, fontWeight: 500 }}
                color="text.primary"
                gutterBottom
              >
                Discounted Total:
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {formatCurrency(cart.discountedTotal)}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
