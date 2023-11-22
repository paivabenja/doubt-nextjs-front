'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ClotheEntry } from '@/types'
import { createClothe } from '@/api/clothes'

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

  const inputStyle =
    'border-2 border-solid rounded-lg py-2 px-5 bg-doubt-green border-doubt-green-light placeholder:text-doubt-green-light focus:outline-none focus:border-doubt-green-lighter duration-500'

  return (
    <form
      onSubmit={onSubmit}
      className='duration-500 flex flex-col w-3/4 md:w-1/2 gap-3'
    >
      <input
        type='text'
        {...register('name', { required: true })}
        placeholder='Insert clothe name'
        className={inputStyle}
      />
      {(errors.name != null) && <span>Pone el nombre chupapija</span>}
      <input
        type='number'
        {...register('price', { required: true })}
        placeholder='Insert clothe price'
        className={inputStyle}
      />
      {(errors.price != null) && <span>Pone el precio chupapija</span>}
      <input
        type='text'
        {...register('type', { required: true })}
        placeholder='Insert clothe type'
        className={inputStyle}
      />
      <div>Insert the sizes available</div>
      <div className='grid grid-cols-2 gap-3'>
        <input
          type='number'
          {...register('sizes[s]', { required: true })}
          placeholder='size S'
          className={inputStyle}
        />
        <input
          type='number'
          {...register('sizes[m]', { required: true })}
          placeholder='size M'
          className={inputStyle}
        />
        <input
          type='number'
          {...register('sizes[l]', { required: true })}
          placeholder='size L'
          className={inputStyle}
        />
        <input
          type='number'
          {...register('sizes[xl]', { required: true })}
          placeholder='size Xl'
          className={inputStyle}
        />
        <input
          type='number'
          {...register('sizes[xl2]', { required: true })}
          placeholder='size 2Xl'
          className={inputStyle}
        />
        <input
          type='number'
          {...register('sizes[xl3]', { required: true })}
          placeholder='size 3Xl'
          className={inputStyle}
        />
      </div>

      <input type='file' {...register('img_front', { required: true })} />
      <input type='file' {...register('img_back', { required: true })} />
      <button className={inputStyle + ' w-1/2 self-center'}>submit</button>
      {Object.keys(errors).length > 0 && <p>culiado sos un down</p>}
    </form>
  )
}
