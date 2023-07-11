import { IBaseResponse } from '../shared/models'

export interface IParamsGetCarts {
  skip: number
  limit: number
  select: string
}

export interface IResponseGetCarts extends IBaseResponse {
  carts: ICart[]
}

export interface ICart {
  id: number
  products: ICartProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export interface ICartProduct {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
}
