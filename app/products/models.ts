import { IBaseResponse } from '../shared/models'

export interface IParamsGetProducts {
  skip: number
  limit: number
  select: string
  q: string
}

export interface IResponseGetProducts extends IBaseResponse {
  products: IProduct[]
}

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
