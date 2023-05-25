interface Sizes {
  s: number
  m: number
  l: number
  xl: number
  '2xl': number
  '3xl': number
}

export interface Clothe {
  img_front: string
  img_back: string
  name: string
  price: number
  sizes: Sizes
  type: string
}
