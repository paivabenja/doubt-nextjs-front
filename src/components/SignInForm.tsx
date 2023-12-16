/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '@/api/auth'
import { User } from '@/types'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@nextui-org/react'
import { useUserStore } from '@/zustand/userStore'

export const SignInForm = (): JSX.Element => {
  // const { setUser } = useContext(UserContext)
  const setUser = useUserStore((state) => state.setUser)
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
    if (res) {
      await setUser()
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

        <label className='' htmlFor='email'>Email</label>
        <Input className='text-black' type='email' {...register('email', { required: true })} />
        {(errors.email != null && <span>Pone el usuario gordo hijo de re mil puta</span>)}

        <label htmlFor='password'>Password</label>
        <Input className='text-black' type='password' {...register('password', { required: true })} />
        {(errors.password != null && <span>PERO PONE UNA CONTRASEÑA AL MENOS PEDAZO DE RE MIL CULIADO NO PUEDE SER AAAAAAAAAAAAAAAA</span>)}

        <Button type='submit'>submit</Button>
      </form>
    </div>
  )
}
