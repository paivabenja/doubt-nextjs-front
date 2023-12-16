import { createSale } from '@/api/sales'
import React, { useContext, useEffect, useState } from 'react'
import { AddressEntry, RealClothe, SaleEntry } from '@/types'
import Image from 'next/image'
import { UserContext } from '@/context/UserContext'
import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

interface Props {
  clth: RealClothe
}

export default function BuyClothe ({ clth }: Props): JSX.Element {
  const [data, setData] = useState<AddressEntry>()

  const { user } = useContext(UserContext)
  const { register, handleSubmit } = useForm<AddressEntry>()

  const onSubmit = handleSubmit(formData => {
    console.log('formData')
    console.log(formData)
    setData(formData)
  }
  )

  useEffect(() => {
    if (data === undefined) return

    const sale: SaleEntry = {
      address: { ...data },
      userId: user._id,
      clotheId: clth._id,
      clotheName: clth.name
    }

    void createSale(sale)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className='h-full rounded-md mx-12 p-10 overflow-hidden'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Buy</h1>
          <h2 className='text-xl font-medium'>{clth.name}</h2>
        </div>
        <p> {clth.type} </p>
      </div>
      <div className='flex justify-stretch'>
        <Image
          src={`http://localhost:3001/images/${clth.img_front}`}
          alt=''
          width={500}
          height={0}
          className='rounded-lg my-4'
        />
        <form name='address form' className='w-full p-12' onSubmit={onSubmit}>
          <label htmlFor='address form'>Set your address</label>
          <Input {...register('streetName', { required: true })} className='my-4' type='text' placeholder='Street' />
          <Input {...register('postalCode', { required: true, valueAsNumber: true })} className='my-4' type='number' placeholder='Postal code' />
          <Input {...register('streetNumber', { required: true, valueAsNumber: true })} className='my-4' type='number' placeholder='Number' />
          <Input {...register('extraData', { required: false })} className='my-4' type='text' placeholder='Floor, apartment number, batch' />
          <Button type='submit'>Place Order</Button>
        </form>
      </div>
      <p>Clothe Id: {clth._id}</p>
    </div>
  )
}
