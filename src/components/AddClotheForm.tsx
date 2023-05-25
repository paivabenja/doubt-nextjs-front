'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Clothe } from '@/types'

export default function AddClotheForm (): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [data, setData] = useState<Clothe>()

  const onSubmit = handleSubmit((formData) => {
    const newClothe = {
      name: formData.name,
      price: formData.price,
      type: formData.type,
      img_front: formData.img_front,
      img_back: formData.img_back,
      sizes: {
        s: formData.s,
        m: formData.m,
        l: formData.l,
        xl: formData.xl,
        '2xl': formData['2xl'],
        '3xl': formData['3xl']
      }
    }
    setData(newClothe)
  })

  useEffect(() => console.log(data), [data])

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          {...register('name', { required: true })}
          placeholder='Insert clothe name'
          className='border border-solid border-black'
        />
        {(errors.name != null) && <span>Pone el nombre chupapija</span>}
        <input
          type='number'
          {...register('price', { required: true })}
          placeholder='Insert clothe price'
          className='border border-solid border-black'
        />
        {(errors.price != null) && <span>Pone el precio chupapija</span>}
        <input
          type='text'
          {...register('type', { required: true })}
          placeholder='Insert clothe type'
          className='border border-solid border-black'
        />
        <div>Insert the sizes available</div>
        <input
          type='number'
          {...register('s', { required: true })}
          placeholder='size S'
          className='border border-solid border-black'
        />
        <input
          type='number'
          {...register('m', { required: true })}
          placeholder='size M'
          className='border border-solid border-black'
        />
        <input
          type='number'
          {...register('l', { required: true })}
          placeholder='size L'
          className='border border-solid border-black'
        />
        <input
          type='number'
          {...register('xl', { required: true })}
          placeholder='size Xl'
          className='border border-solid border-black'
        />
        <input
          type='number'
          {...register('2xl', { required: true })}
          placeholder='size 2Xl'
          className='border border-solid border-black'
        />
        <input
          type='number'
          {...register('3xl', { required: true })}
          placeholder='size 3Xl'
          className='border border-solid border-black'
        />

        <button>submit</button>
        {Object.keys(errors).length > 0 && <p>culiado sos un down</p>}
      </form>
    </>
  )
}
