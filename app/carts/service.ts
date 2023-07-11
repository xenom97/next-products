import { ICart, IParamsGetCarts, IResponseGetCarts } from './models'

const cartsService = {
  async getCarts(params: Partial<IParamsGetCarts>): Promise<IResponseGetCarts> {
    const url = new URL('https://dummyjson.com/carts')
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value as any)
    })
    const res = await fetch(url)
    const resData = await res.json()
    return resData ?? {}
  },

  async getCartById(cartId: number): Promise<ICart> {
    const url = new URL(`https://dummyjson.com/carts/${cartId}`)
    const res = await fetch(url)
    const resData = await res.json()
    return resData ?? {}
  },
}

export default cartsService
