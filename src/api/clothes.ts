import { Clothe } from '@/types'
import axios, { AxiosResponse } from 'axios'

const clothesApi = axios.create({
  baseURL: 'http://localhost:8000/'
})

export const getAllClothes = async (): Promise<AxiosResponse> => {
  return await clothesApi.get('api/clothes/', { data: { __v: 0, _id: 0 } })
}

export const createClothe = async (clth: Clothe): Promise<void> => {
  return await clothesApi.post('api/clothes/', clth)
}
