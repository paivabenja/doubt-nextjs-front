import { ClotheEntry } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { toast } from 'react-hot-toast'

const clothesApi = axios.create({
  baseURL: 'http://localhost:8000/'
})

export const getAllClothes = async (): Promise<AxiosResponse> => {
  return await clothesApi.get('api/clothes/', { data: { __v: 0, _id: 0 } })
}

export const createClothe = async (clth: ClotheEntry): Promise<void> => {
  toast.promise(
    clothesApi.post('api/clothes/', clth),
    {
      loading: 'Adding clothe',
      success: 'Clothe added successfully',
      error: 'There was a problem adding the clothe'
    }
  ).catch(err => console.error(err))
}

export const getClotheById = async (id: number): Promise<AxiosResponse> => (
  await clothesApi.get(`/api/clothes/id/${id}`)
)
