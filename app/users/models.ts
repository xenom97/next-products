export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  username: string
  image: string
  address: IUserAddress
}

export interface IUserAddress {
  address: string
  city: string
  coordinates: IUserCoordinates
  postalCode: string
  state: string
}

export interface IUserCoordinates {
  lat: number
  lng: number
}
