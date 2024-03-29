interface Sizes {
  s: number
  m: number
  l: number
  xl: number
  xl2: number
  xl3: number
}

export interface RealClothe extends ClotheEntry {
  _id?: string
}

export interface ClotheEntry {
  img_front: string
  img_back: string
  name: string
  price: number
  sizes: Sizes
  type: 'pant' | 'hoodie' | 'shirt'
}

export interface SaleEntry {
  clotheId?: string
  clotheName?: string
  userId?: string
  address?: AddressEntry
}

export interface AddressEntry {
  postalCode?: number
  streetName?: string
  streetNumber?: int
  extraData?: string
}

export interface User {
  loggedIn: boolean
  isAdmin?: boolean
  name?: string
  lastname?: string
  email?: string
  password?: string
  _id?: string
}
