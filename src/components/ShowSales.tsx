import { getAllSales } from '@/api/sales'
import { SaleEntry } from '@/types'
import React, { useEffect, useState } from 'react'

function ShowSales (): JSX.Element {
  const [sales, setSales] = useState<SaleEntry[]>()

  const getSales = async (): Promise<void> => {
    const res = await getAllSales()
    setSales(res)
  }

  useEffect(() => {
    void getSales()
  }, [])
  return (
    <div className='grid grid-cols-3 dark:bg-gray-950 bg-gray-50 p-4 rounded-xl'>
      {sales?.map((sale, i) => (
        <div key={i} className='dark:bg-gray-900 bg-gray-100 m-5 p-4 rounded-lg'>
          <h1 className='text-xl font-bold'>{sale.clotheName}</h1>
          <h1>Bought buy user: {sale.userId}</h1>
          <div className='bg-gray-200 p-5 rounded-lg mt-4'>
            <h1 className='text-lg font-semibold'>Shipping info</h1>
            <h1>{sale.address?.streetName}</h1>
            <h1>{sale.address?.extraData}</h1>
            <h1>{sale.address?.postalCode}</h1>
            <h1>{sale.address?.streetNumber}</h1>
          </div>
        </div>)
      )}
    </div>
  )
}

export default ShowSales
