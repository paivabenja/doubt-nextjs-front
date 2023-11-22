import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser, registerUser } from '@/api/auth'
import { User } from '@/types'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'

export const SignUpForm = () => {
  const { push } = useRouter()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [data, setData] = useState<User>()

  const onSubmit = handleSubmit(formData => {
    delete formData.password2
    setData(formData as User)
  })

  const handleRegister = async (data: User) => {
    const res = await registerUser(data) as AxiosResponse
    if (res.status === 200) {
      const loginRes = await loginUser(data)
      console.log('login res')
      console.log(loginRes)
      if (loginRes && loginRes.status && loginRes.status === 200) {
        push('/')
      }
    }
  }

  useEffect(() => {
    if (data === undefined) return
    console.log(data)
    void handleRegister(data)
  }, [data])

  return (
    <div>
      <form className='flex flex-col text-left' onSubmit={onSubmit}>

        <label className='' htmlFor='username'>Name</label>
        <input className='text-black' type='text' {...register('name', { required: true })} />
        {(errors.name != null && <span>Pone el usuario gordo hijo de re mil puta</span>)}

        <label className='' htmlFor='username'>Lastname</label>
        <input className='text-black' type='text' {...register('lastname', { required: true })} />
        {(errors.lastname != null && <span>Pone el usuario gordo hijo de re mil puta</span>)}

        <label htmlFor='email'>Email</label>
        <input className='text-black' type='email' {...register('email', { required: true })} />
        {(errors.email != null && <span>Pone el mail gordo hijo de re mil puta</span>)}

        <label htmlFor='password'>Password</label>
        <input className='text-black' type='password' {...register('password', { required: true })} />
        {(errors.password != null && <span>PERO PONE UNA CONTRASEÑA AL MENOS PEDAZO DE RE MIL CULIADO NO PUEDE SER AAAAAAAAAAAAAAAA</span>)}

        <label htmlFor='password2'>Repeat your password</label>
        <input
          className='text-black'
          type='password' {...register('password2', {
            required: true,
            validate: (val: string) => {
              if (watch('password') !== val) {
                return 'Your passwords do not match'
              }
            }
          })}
        />
        {(errors.password2 != null && <span>LA CONTRASEÑA NO ES IGUAAAAAAAAAAAAAAAAAAAAAAAL</span>)}

        <input type='submit' />
      </form>
    </div>
  )
}
