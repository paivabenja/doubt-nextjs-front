interface Sizes {
  s: number
  m: number
  l: number
  xl: number
  '2xl': number
  '3xl': number
}

export interface ClotheEntry {
  img_front: string
  img_back: string
  name: string
  price: number
  sizes: Sizes
  type: 'pant' | 'hoodie' | 'shirt'
}

export interface RealClothe extends ClotheEntry {
  _id: string
}
