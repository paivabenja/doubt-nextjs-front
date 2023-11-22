import { createSale } from '@/api/sales'
import React from 'react'
import { RealClothe } from '@/types'
import Image from 'next/image'

interface Props {
  clth: RealClothe
}

export default function BuyClothe ({ clth }: Props): JSX.Element {
  const handlePlaceOrder = (): void => {
    const sale = { userId: 'iuseraidi', clotheId: clth._id, clotheName: clth.name }
    void createSale(sale)
  }

  return (
    <div className='h-full rounded-md bg-white text-doubt-green mx-12 p-10'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Buy</h1>
          <h2 className='text-xl font-medium'>{clth.name}</h2>
        </div>
        <p> {clth.type} </p>
      </div>
      <div className='flex justify-stretch'>
        <Image src={`http://localhost:3001/images/${clth.img_front}`} alt='' width={500} height={0} className='rounded-lg my-4' />
        <div className='bg-red-400 w-full p-12'>
          <button onClick={handlePlaceOrder} className='bg-doubt-green text-white p-2 rounded-md'>Place order</button>
        </div>
      </div>
      <p>Me pediste una seca y recien lo enrole con el id: {clth._id}</p>
    </div>
  )
}
