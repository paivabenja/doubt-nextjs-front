import { SaleEntry } from '@/types'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const baseURL = 'http://localhost:3001/sales/'
const salesApi = axios.create({
  baseURL
})

export const createSale = async (sale: SaleEntry): Promise<void> => {
  const headers = {
    'Content-Type': 'application/json'
  }

  toast.promise(
    salesApi.post('/', sale, { headers }), {
      loading: 'Adding clothe',
      success: 'Clothe bought succesfully',
      error: 'There was a problem adding the clothe'
    })
    .catch(err => console.log(err))
}
