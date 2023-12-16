import { SaleEntry } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { toast } from 'react-hot-toast'

const baseURL = 'http://localhost:3001/sales/'
const salesApi = axios.create({
  baseURL
})

export const createSale = async (sale: SaleEntry): Promise<boolean> => {
  const headers = {
    'Content-Type': 'application/json'
  }

  console.log('sale')
  console.log(sale)

  const res = await toast.promise(
    salesApi.post('/', sale, { headers }), {
      loading: 'Adding clothe',
      success: 'Clothe bought succesfully',
      error: 'There was a problem adding the clothe'
    })
    .catch(err => console.log(err)) as AxiosResponse

  return res.status === 200
}

export const getAllSales = async (): Promise<SaleEntry[]> => {
  const res = await toast.promise(
    salesApi.get('/'),
    {
      loading: 'getting sales',
      success: 'there u go',
      error: 'theres been a problem getting the sales, contact ur mom'
    }
  )

  console.log(res.data)
  return res.data
}
