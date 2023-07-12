import { API_BASE_URL } from '../shared/constants'
import { IParamsGetProducts, IResponseGetProducts } from './models'

const productsService = {
  async getProducts(
    params: Partial<IParamsGetProducts>
  ): Promise<IResponseGetProducts> {
    const url = new URL(`${API_BASE_URL}${params.q ? '/search' : ''}`)
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value as any)
    })
    const res = await fetch(url)
    const resData = await res.json()
    return resData ?? {}
  },
}

export default productsService
