'use client'

import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ICart } from '../models'
import { IUser } from '@/app/users/models'
import cartsService from '../service'
import usersService from '@/app/users/service'
import CardDetailCard from './components/CartDetailCard'
import CartDetailTable from './components/CartDetailTable'

export default function CartDetail({ params }: { params: { id: string } }) {
  const [cart, setCart] = useState<ICart>({} as ICart)
  const [user, setUser] = useState<IUser>({} as IUser)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true)

        const cartData = await cartsService.getCartById(+params.id)
        if (cartData) {
          setCart(cartData)

          const userData = await usersService.getUserById(+cartData.userId)
          if (userData) {
            setUser(userData)
          }
        }
      } catch (error: any) {
        console.error('Failed to fetch cart detail: ', error?.message)
      } finally {
        setLoading(false)
      }
    }
    fetchDetail()
  }, [params.id])

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Cart {params.id}
      </Typography>

      <CardDetailCard cart={cart} user={user} />

      <CartDetailTable cart={cart} loading={loading} />
    </div>
  )
}
