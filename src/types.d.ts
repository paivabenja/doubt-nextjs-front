interface Sizes {
  s: number
  m: number
  l: number
  xl: number
  xxl: number
  xxxl: number
}

export interface RealClothe extends ClotheEntry {
  _id: string
}

export interface ClotheEntry {
  img_front: string
  img_back: string
  name: string
  price: number
  sizes: Sizes
  type: 'pant' | 'hoodie' | 'shirt'
}
