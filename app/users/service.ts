import { API_BASE_URL } from '../shared/constants'
import { IUser } from './models'

const usersService = {
  async getUserById(userId: number): Promise<IUser> {
    const url = new URL(`${API_BASE_URL}/users/${userId}`)
    const res = await fetch(url)
    const resData = await res.json()
    return resData ?? {}
  },
}

export default usersService
