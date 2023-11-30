'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ClotheEntry } from '@/types'
import { createClothe } from '@/api/clothes'
import { Input, Button } from '@nextui-org/react'

export default function AddClotheForm (): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [data, setData] = useState<ClotheEntry>()

  const onSubmit = handleSubmit((formData) => {
    setData(formData as ClotheEntry)
  })

  useEffect(() => {
    if (data === undefined) return
    void createClothe(data)
  }, [data])

  return (
    <form
      onSubmit={onSubmit}
      className='duration-500 flex flex-col w-3/4 md:w-1/2 gap-3'
    >
      <Input
        type='text'
        {...register('name', { required: true })}
        placeholder='Insert clothe name'
      />
      {(errors.name !== null) && <span>Pone el nombre</span>}
      <Input
        type='number'
        {...register('price', { required: true })}
        placeholder='Insert clothe price'
      />
      {(errors.price !== null) && <span>Pone el precio</span>}
      <Input
        type='text'
        {...register('type', { required: true })}
        placeholder='Insert clothe type'
      />
      <div>Insert the sizes available</div>
      <div className='grid grid-cols-2 gap-3'>
        <Input
          type='number'
          {...register('sizes[s]', { required: true })}
          placeholder='size S'
        />
        <Input
          type='number'
          {...register('sizes[m]', { required: true })}
          placeholder='size M'
        />
        <Input
          type='number'
          {...register('sizes[l]', { required: true })}
          placeholder='size L'
        />
        <Input
          type='number'
          {...register('sizes[xl]', { required: true })}
          placeholder='size Xl'
        />
        <Input
          type='number'
          {...register('sizes[xl2]', { required: true })}
          placeholder='size 2Xl'
        />
        <Input
          type='number'
          {...register('sizes[xl3]', { required: true })}
          placeholder='size 3Xl'
        />
      </div>

      <Input type='file' {...register('img_front', { required: true })} />
      <Input type='file' {...register('img_back', { required: true })} />
      <Button type='submit'>submit</Button>
      {Object.keys(errors).length > 0 && <p>You have some form errors</p>}
    </form>
  )
}
