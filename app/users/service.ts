import { IUser } from './models'

const usersService = {
  async getUserById(userId: number): Promise<IUser> {
    const url = new URL(`https://dummyjson.com/users/${userId}`)
    const res = await fetch(url)
    const resData = await res.json()
    return resData ?? {}
  },
}

export default usersService
