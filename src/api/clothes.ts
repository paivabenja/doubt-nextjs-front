'use client'
import { toast } from 'react-hot-toast'
import { ClotheEntry } from '@/types'
import axios, { AxiosResponse } from 'axios'

const baseURL = 'http://localhost:3001/clothes/'
const clothesApi = axios.create({
  baseURL
})

export const getAllClothes = async (): Promise<AxiosResponse> => {
  return await clothesApi.get('/')
}

export const createClothe = async (clth: ClotheEntry): Promise<void> => {
  clth.img_front = clth.img_front[0]
  clth.img_back = clth.img_back[0]

  const headers = {
    'Content-Type': 'multipart/form-data'
  }

  toast
    .promise(clothesApi.post('/', clth, { headers }), {
      loading: 'Adding  clothe',
      success: 'Clothe added successfully',
      error: 'There was a problem adding the clothe'
    })
    .catch((err) => console.error(err))
}

export const getClotheById = async (id: string): Promise<AxiosResponse> => {
  const res = await clothesApi.get(`${id}`)
  console.log(res)
  return res
}

export const getImageById = (id: string): any => {
  return baseURL + id
}
