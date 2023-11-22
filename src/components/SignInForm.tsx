'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getUser, loginUser } from '@/api/auth'
import { User } from '@/types'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/UserContext'

export const SignInForm = () => {
  const { setUser } = useContext(UserContext)
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [data, setData] = useState<User>()

  const onSubmit = handleSubmit(formData => {
    setData(formData as User)
  })

  const handleLogIn = async (loginData: User): Promise<void> => {
    const res = await loginUser(loginData)
    if (res && res.status && res.status === 200) {
      setUser(await getUser())
      push('/')
    }
  }

  useEffect(() => {
    if (data === undefined) return
    void handleLogIn(data)
  }, [data])

  return (
    <div>
      <form className='flex flex-col text-left' onSubmit={onSubmit}>

        <label className='' htmlFor='username'>Username</label>
        <input className='text-black' type='text' {...register('username', { required: true })} />
        {(errors.username != null && <span>Pone el usuario gordo hijo de re mil puta</span>)}

        <label htmlFor='password'>Password</label>
        <input className='text-black' type='password' {...register('password', { required: true })} />
        {(errors.password != null && <span>PERO PONE UNA CONTRASEÑA AL MENOS PEDAZO DE RE MIL CULIADO NO PUEDE SER AAAAAAAAAAAAAAAA</span>)}

        <input type='submit' />
      </form>
    </div>
  )
}
